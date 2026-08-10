// Generează territories.geojson: contururile REALE (Natural Earth 10m) ale
// teritoriilor de peste mări definite în script.js.
// Necesită în același folder (nu se versionează, se re-descarcă):
//   curl -sL -o ne10_admin0.json https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_0_countries.geojson
//   curl -sL -o ne10_admin1.json https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_1_states_provinces.geojson
const fs = require('fs');

const src = fs.readFileSync('script.js', 'utf8');
const start = src.indexOf('const overseasTerritories = {');
const end = src.indexOf('const overseasParents');
const data = eval('(' + src.slice(start + 'const overseasTerritories = '.length, end).trim().replace(/;$/, '') + ')');

const admin0 = JSON.parse(fs.readFileSync('ne10_admin0.json', 'utf8'));
const admin1 = JSON.parse(fs.readFileSync('ne10_admin1.json', 'utf8'));

// nume punct -> cod ADM0_A3 în Natural Earth 10m admin_0
const isoMap = {
  'Guadelupa': 'GLP', 'Martinica': 'MTQ', 'Guyana Franceză': 'GUF', 'Réunion': 'REU', 'Mayotte': 'MYT',
  'Saint-Pierre și Miquelon': 'SPM', 'Saint-Martin': 'MAF', 'Saint-Barthélemy': 'BLM',
  'Polinezia Franceză': 'PYF', 'Wallis și Futuna': 'WLF',
  'Gibraltar': 'GIB', 'Bermuda': 'BMU', 'Insulele Cayman': 'CYM', 'Turks și Caicos': 'TCA',
  'Insulele Virgine Britanice': 'VGB', 'Anguilla': 'AIA', 'Montserrat': 'MSR',
  'Saint Helena': 'SHN', 'Ascension': 'SHN', 'Tristan da Cunha': 'SHN',
  'Pitcairn': 'PCN', 'Georgia de Sud': 'SGS', 'Diego Garcia (BIOT)': 'IOT',
  'Insulele Feroe': 'FRO',
  'Aruba': 'ABW', 'Curaçao': 'CUW', 'Sint Maarten': 'SXM', 'Bonaire': 'BES', 'Saba': 'BES', 'Sint Eustatius': 'BES',
  'Guam': 'GUM', 'Insulele Virgine Americane': 'VIR', 'Samoa Americană': 'ASM', 'Insulele Mariane de Nord': 'MNP',
  'Svalbard': 'SJM', 'Jan Mayen': 'SJM', 'Insula Bouvet': 'BVT',
  'Insula Norfolk': 'NFK', 'Insula Crăciunului': 'CXR', 'Insulele Cocos': 'CCK',
  'Insulele Cook': 'COK', 'Niue': 'NIU', 'Tokelau': 'TKL'
};

// nume punct -> [cod țară, regex nume regiune] în NE 10m admin_1
const admin1Map = {
  'Guadelupa': ['France', 'guadeloupe'],
  'Martinica': ['France', 'martinique'],
  'Guyana Franceză': ['France', 'guyane'],
  'Réunion': ['France', 'reunion'],
  'Mayotte': ['France', 'mayotte'],
  'Insulele Canare': ['Spain', 'las palmas|santa cruz de tenerife'],
  'Ceuta': ['Spain', 'ceuta'],
  'Melilla': ['Spain', 'melilla'],
  'Azore': ['Portugal', 'açores|azores'],
  'Madeira': ['Portugal', 'madeira'],
  'Insulele Galápagos': ['Ecuador', 'galápagos|galapagos']
};

// fallback: căutare după nume în admin_0 dacă codul ISO nu e găsit
const admin0NameMap = {
  'Bonaire': 'bonaire', 'Saba': '\\bsaba\\b', 'Sint Eustatius': 'eustatius',
  'Svalbard': 'svalbard', 'Jan Mayen': 'jan mayen', 'Insula Bouvet': 'bouvet',
  'Insula Crăciunului': 'christmas', 'Insulele Cocos': 'cocos', 'Tokelau': 'tokelau'
};

const norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

// point-in-polygon (ray casting) pe inele exterioare
const pointInRing = (lng, lat, ring) => {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i], [xj, yj] = ring[j];
    if ((yi > lat) !== (yj > lat) && lng < ((xj - xi) * (lat - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};
const coveredBy = (geom, lng, lat) => {
  if (!geom) return false;
  const polys = geom.type === 'Polygon' ? [geom.coordinates] : (geom.type === 'MultiPolygon' ? geom.coordinates : []);
  return polys.some(rings => rings.length && pointInRing(lng, lat, rings[0]));
};

const roundCoords = (c) => Array.isArray(c[0]) ? c.map(roundCoords) : [Math.round(c[0] * 1000) / 1000, Math.round(c[1] * 1000) / 1000];

(async () => {
  const countries110 = await fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson').then(r => r.json());
  const parent110 = {};
  countries110.features.forEach(f => {
    let iso = f.properties.ISO_A3;
    if (iso === '-99' || !iso) iso = f.properties.ADM0_A3;
    parent110[iso] = f.geometry;
  });

  const features = [];
  const usedIso = new Set();
  const report = [];

  Object.entries(data).forEach(([parentIso, t]) => {
    t.points.forEach(p => {
      let found = [], via = '';
      if (admin1Map[p.name]) {
        const [countryName, nameRe] = admin1Map[p.name];
        const re = new RegExp(nameRe, 'i');
        found = admin1.features.filter(f => norm(f.properties.admin) === norm(countryName) && re.test(norm(f.properties.name)));
        via = 'admin1:' + countryName + ':' + nameRe;
      } else if (isoMap[p.name]) {
        const code = isoMap[p.name];
        const f = admin0.features.find(f => f.properties.ADM0_A3 === code || f.properties.ISO_A3 === code);
        if (f) { found = [f]; via = 'admin0:' + code; }
      }
      if (!found.length && admin0NameMap[p.name]) {
        const re = new RegExp(admin0NameMap[p.name], 'i');
        found = admin0.features.filter(f => re.test(f.properties.NAME || '') || re.test(f.properties.ADMIN || '') || re.test(f.properties.SUBUNIT || ''));
        via = 'admin0-nume:' + admin0NameMap[p.name];
      }
      if (!found.length) { report.push('PUNCT (fără contur): ' + p.name); return; }
      if (usedIso.has(via)) { report.push('ACOPERIT de ' + via + ': ' + p.name); return; }

      // dacă țara-mamă la 110m include deja acest teritoriu, nu-l duplicăm
      if (coveredBy(parent110[parentIso], p.lng, p.lat)) {
        report.push('DEJA în poligonul 110m al părintelui: ' + p.name);
        return;
      }
      usedIso.add(via);
      found.forEach(feature => {
        features.push({
          type: 'Feature',
          properties: { name: p.name, parentIso, iso: via.replace('admin0:', '').replace('admin1:', '') },
          geometry: { type: feature.geometry.type, coordinates: roundCoords(feature.geometry.coordinates) }
        });
      });
      report.push('CONTUR REAL (' + via + ', ' + found.length + ' geometrii): ' + p.name);
    });
  });

  fs.writeFileSync('territories.geojson', JSON.stringify({ type: 'FeatureCollection', features }));
  console.log(report.join('\n'));
  console.log('\nTotal contururi:', features.length, '| dimensiune fișier:', Math.round(fs.statSync('territories.geojson').size / 1024), 'KB');
})();
