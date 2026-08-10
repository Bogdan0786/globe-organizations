const schengen = { AUT: 1997, BEL: 1995, BGR: 2024, HRV: 2023, CZE: 2007, DNK: 2001, EST: 2007, FIN: 2001, FRA: 1995, DEU: 1995, GRC: 2000, HUN: 2007, ISL: 2001, ITA: 1997, LVA: 2007, LIE: 2011, LTU: 2007, LUX: 1995, MLT: 2007, NLD: 1995, NOR: 2001, POL: 2007, PRT: 1995, ROU: 2024, SVK: 2007, SVN: 2007, ESP: 1995, SWE: 2001, CHE: 2008 };
const eu = { AUT: 1995, BEL: 1958, BGR: 2007, HRV: 2013, CYP: 2004, CZE: 2004, DNK: 1973, EST: 2004, FIN: 1995, FRA: 1958, DEU: 1958, GRC: 1981, HUN: 2004, IRL: 1973, ITA: 1958, LVA: 2004, LTU: 2004, LUX: 1958, MLT: 2004, NLD: 1958, POL: 2004, PRT: 1986, ROU: 2007, SVK: 2004, SVN: 2004, ESP: 1986, SWE: 1995 };
const eea = { ...eu, ISL: 1994, LIE: 1995, NOR: 1994, AUT: 1994, FIN: 1994, SWE: 1994 };
const nato = { ALB: 2009, BEL: 1949, BGR: 2004, CAN: 1949, HRV: 2009, CZE: 1999, DNK: 1949, EST: 2004, FIN: 2023, FRA: 1949, DEU: 1955, GRC: 1952, HUN: 1999, ISL: 1949, ITA: 1949, LVA: 2004, LTU: 2004, LUX: 1949, MNE: 2017, NLD: 1949, MKD: 2020, NOR: 1949, POL: 1999, PRT: 1949, ROU: 2004, SVK: 2004, SVN: 2004, ESP: 1982, SWE: 2024, TUR: 1952, GBR: 1949, USA: 1949 };
const osce = { AUT: 1975, BEL: 1975, BGR: 1975, CAN: 1975, CYP: 1975, CZE: 1993, DNK: 1975, FIN: 1975, FRA: 1975, DEU: 1975, GRC: 1975, VAT: 1975, HUN: 1975, ISL: 1975, IRL: 1975, ITA: 1975, LIE: 1975, LUX: 1975, MLT: 1975, MCO: 1975, NLD: 1975, NOR: 1975, POL: 1975, PRT: 1975, ROU: 1975, SMR: 1975, ESP: 1975, SWE: 1975, CHE: 1975, TUR: 1975, GBR: 1975, USA: 1975, ALB: 1991, AND: 1996, ARM: 1992, AZE: 1992, BLR: 1992, BIH: 1992, HRV: 1992, EST: 1991, GEO: 1992, KAZ: 1992, KGZ: 1992, LVA: 1991, LTU: 1991, MDA: 1992, MNG: 2012, MNE: 2006, MKD: 1995, RUS: 1991, SRB: 2000, SVK: 1993, SVN: 1992, TJK: 1992, TKM: 1992, UKR: 1992, UZB: 1992 };
const coe = { BEL: 1949, DNK: 1949, FRA: 1949, IRL: 1949, ITA: 1949, LUX: 1949, NLD: 1949, NOR: 1949, SWE: 1949, GBR: 1949, GRC: 1949, TUR: 1949, ISL: 1950, DEU: 1951, AUT: 1956, CYP: 1961, CHE: 1963, MLT: 1965, PRT: 1976, ESP: 1977, LIE: 1978, SMR: 1988, FIN: 1989, HUN: 1990, POL: 1991, BGR: 1992, EST: 1993, LTU: 1993, SVN: 1993, CZE: 1993, SVK: 1993, ROU: 1993, AND: 1994, LVA: 1995, ALB: 1995, MDA: 1995, MKD: 1995, UKR: 1995, HRV: 1996, GEO: 1999, ARM: 2001, AZE: 2001, BIH: 2002, SRB: 2003, MCO: 2004, MNE: 2007 };
const ocde = { AUT: 1961, BEL: 1961, CAN: 1961, DNK: 1961, FRA: 1961, DEU: 1961, GRC: 1961, ISL: 1961, IRL: 1961, ITA: 1961, LUX: 1961, NLD: 1961, NOR: 1961, PRT: 1961, ESP: 1961, SWE: 1961, CHE: 1961, TUR: 1961, GBR: 1961, USA: 1961, JPN: 1964, FIN: 1969, AUS: 1971, NZL: 1973, MEX: 1994, CZE: 1995, HUN: 1996, POL: 1996, KOR: 1996, SVK: 2000, CHL: 2010, SVN: 2010, ISR: 2010, EST: 2010, LVA: 2016, LTU: 2018, COL: 2020, CRI: 2021 };
const arab_league = { EGY: 1945, IRQ: 1945, JOR: 1945, LBN: 1945, SAU: 1945, SYR: 1945, YEM: 1945, LBY: 1953, SDN: 1956, MAR: 1958, TUN: 1958, KWT: 1961, DZA: 1962, ARE: 1971, BHR: 1971, QAT: 1971, OMN: 1971, MRT: 1973, SOM: 1974, PSE: 1976, DJI: 1977, COM: 1993 };
const csi = { ARM: 1991, AZE: 1993, BLR: 1991, KAZ: 1991, KGZ: 1991, RUS: 1991, TJK: 1991, UZB: 1991, TKM: 1991 };
const mercosur = { ARG: 1991, BRA: 1991, PRY: 1991, URY: 1991, BOL: 2023 };
const frontex = { AUT: 2004, BEL: 2004, BGR: 2007, HRV: 2013, CYP: 2004, CZE: 2004, DNK: 2004, EST: 2004, FIN: 2004, FRA: 2004, DEU: 2004, GRC: 2004, HUN: 2004, ISL: 2004, ITA: 2004, LVA: 2004, LIE: 2011, LTU: 2004, LUX: 2004, MLT: 2004, NLD: 2004, NOR: 2004, POL: 2004, PRT: 2004, ROU: 2007, SVK: 2004, SVN: 2004, ESP: 2004, SWE: 2004, CHE: 2008 };

const unNonMembers = ['TWN', 'ESH', 'KOS', 'PSE', 'VAT', 'SXM', 'CUW', 'ABW', 'GRL', 'NCL', 'PYF', 'ATF'];
const interpolNonMembers = ['PRK', 'TWN', 'ESH', 'KOS', 'SXM', 'CUW', 'ABW', 'GRL', 'NCL', 'PYF', 'ATF'];
const omsNonMembers = ['TWN', 'ESH', 'KOS', 'PSE', 'VAT', 'LIE', 'SXM', 'CUW', 'ABW', 'GRL', 'NCL', 'PYF', 'ATF'];
const fmiNonMembers = ['CUB', 'PRK', 'MCO', 'LIE', 'TWN', 'ESH', 'VAT', 'PSE', 'SXM', 'CUW', 'ABW', 'GRL', 'NCL', 'PYF', 'ATF'];
const unescoNonMembers = ['ISR', 'LIE', 'TWN', 'ESH', 'KOS', 'VAT', 'SXM', 'CUW', 'ABW', 'GRL', 'NCL', 'PYF', 'ATF'];
const onu_founders = ['ARG', 'AUS', 'BEL', 'BOL', 'BRA', 'BLR', 'CAN', 'CHL', 'CHN', 'COL', 'CRI', 'CUB', 'CZE', 'DNK', 'DOM', 'ECU', 'EGY', 'SLV', 'ETH', 'FRA', 'GRC', 'GTM', 'HTI', 'HND', 'IND', 'IRN', 'IRQ', 'LBN', 'LBR', 'LUX', 'MEX', 'NLD', 'NZL', 'NIC', 'NOR', 'PAN', 'PRY', 'PER', 'PHL', 'POL', 'RUS', 'SAU', 'ZAF', 'SYR', 'TUR', 'UKR', 'GBR', 'USA', 'URY', 'VEN', 'YUG'];
const onu_years = { AFG: 1946, ISL: 1946, SWE: 1946, THA: 1946, PAK: 1947, YEM: 1947, MMR: 1948, ISR: 1949, IDN: 1950, ALB: 1955, AUT: 1955, BGR: 1955, KHM: 1955, LKA: 1955, FIN: 1955, HUN: 1955, IRL: 1955, ITA: 1955, JOR: 1955, LAO: 1955, LBY: 1955, NPL: 1955, PRT: 1955, ROU: 1955, ESP: 1955, JPN: 1956, MAR: 1956, SDN: 1956, TUN: 1956, GHA: 1957, MYS: 1957, GIN: 1958, BEN: 1960, BFA: 1960, CMR: 1960, CAF: 1960, TCD: 1960, COG: 1960, CIV: 1960, CYP: 1960, GAB: 1960, MDG: 1960, MLI: 1960, NER: 1960, NGA: 1960, SEN: 1960, SOM: 1960, TGO: 1960, COD: 1960, MRT: 1961, MNG: 1961, SLE: 1961, TZA: 1961, DZA: 1962, BDI: 1962, JAM: 1962, RWA: 1962, TTO: 1962, UGA: 1962, KEN: 1963, KWT: 1963, MWI: 1964, MLT: 1964, ZMB: 1964, GMB: 1965, MDV: 1965, SGP: 1965, BRB: 1966, BWA: 1966, GUY: 1966, LSO: 1966, GNQ: 1968, MUS: 1968, SWZ: 1968, FJI: 1970, BHR: 1971, BTN: 1971, OMN: 1971, QAT: 1971, ARE: 1971, BHS: 1973, DEU: 1973, BGD: 1974, GRD: 1974, GNB: 1974, CPV: 1975, COM: 1975, MOZ: 1975, PNG: 1975, STP: 1975, SUR: 1975, AGO: 1976, WSM: 1976, SYC: 1976, DJI: 1977, VNM: 1977, DMA: 1978, SLB: 1978, LCA: 1979, VCT: 1980, ZWE: 1980, ATG: 1981, BLZ: 1981, VUT: 1981, KNA: 1983, BRN: 1984, LIE: 1990, NAM: 1990, PRK: 1991, KOR: 1991, FSM: 1991, MHL: 1991, EST: 1991, LVA: 1991, LTU: 1991, ARM: 1992, AZE: 1992, BIH: 1992, HRV: 1992, GEO: 1992, KAZ: 1992, KGZ: 1992, MDA: 1992, SMR: 1992, SVN: 1992, TJK: 1992, TKM: 1992, UZB: 1992, AND: 1993, ERI: 1993, MKD: 1993, MCO: 1993, SVK: 1993, PLW: 1994, KIR: 1999, NRU: 1999, TON: 1999, TUV: 2000, SRB: 2000, CHE: 2002, TLS: 2002, MNE: 2006, SSD: 2011 };
const schengenVisaRequired = ['AFG','ARM','AGO','AZE','BGD','BFA','BHR','BDI','BEN','BOL','BTN','BWA','BLR','BLZ','COD','CAF','COG','CIV','CMR','CHN','CUB','CPV','DJI','DOM','DZA','ECU','EGY','ERI','SWZ','ETH','FJI','GAB','GHA','GMB','GIN','GNQ','GNB','GUY','HTI','IDN','IND','IRQ','IRN','JAM','JOR','KEN','KGZ','KHM','COM','PRK','KWT','KAZ','LAO','LBN','LKA','LBR','LSO','LBY','MAR','MDG','MLI','MMR','MNG','MRT','MDV','MWI','MOZ','NAM','NER','NGA','NPL','OMN','PNG','PHL','PAK','QAT','RUS','RWA','SAU','SDN','SLE','SEN','SOM','SUR','SSD','STP','SYR','TCD','TGO','THA','TJK','TKM','TUN','TUR','TZA','UGA','UZB','VUT','VNM','YEM','ZAF','ZMB','ZWE','PSE'];
const schengenVisaExempt = ['MKD','AND','ARE','ATG','ALB','ARG','AUS','BIH','BRB','BRN','BRA','BHS','CAN','CHL','COL','CRI','DMA','FSM','GRD','GEO','GTM','HND','ISR','JPN','KIR','KNA','KOR','LCA','MCO','MDA','MNE','MHL','MUS','MEX','MYS','NIC','NRU','NZL','PAN','PER','PLW','PRY','SRB','SLB','SYC','SGP','SMR','SLV','TLS','TON','TTO','TUV','UKR','GBR','USA','URY','VAT','VCT','VEN','WSM','TWN','KOS'];
// State membre UE care NU sunt în Schengen — nu apar în anexele Reg. (UE) 2018/1806
// (regulamentul vizează doar țările terțe), dar cetățenii lor nu au nevoie de viză.
const euNonSchengenNoVisa = ['IRL', 'CYP'];

const organizations = {
  schengen: schengen,
  eu: eu,
  eea: eea,
  nato: nato,
  osce: osce,
  coe: coe,
  eu_council: eu,
  ocde: ocde,
  arab_league: arab_league,
  csi: csi,
  mercosur: mercosur,
  frontex: frontex
};

let currentOrg = 'none';
let highlightedFeature = null;
let overseasSelection = null;
let focusedTerritory = null;
let focusedTerritoryIso = null;
let focusedTerritoryName = null;
let resumeRotateTimer = null;

// ---------- Teritorii de peste mări ----------
// polygons = coduri ISO prezente ca poligoane în setul de date al globului
// points   = teritorii/insule care lipsesc din setul de date -> afișate ca puncte în relief
const overseasTerritories = {
  FRA: {
    name: 'Franța',
    polygons: ['NCL', 'ATF'],
    points: [
      { name: 'Guadelupa', lat: 16.25, lng: -61.58 },
      { name: 'Martinica', lat: 14.64, lng: -61.02 },
      { name: 'Guyana Franceză', lat: 4.0, lng: -53.0 },
      { name: 'Réunion', lat: -21.11, lng: 55.53 },
      { name: 'Mayotte', lat: -12.83, lng: 45.16 },
      { name: 'Saint-Pierre și Miquelon', lat: 46.78, lng: -56.17 },
      { name: 'Saint-Martin', lat: 18.07, lng: -63.05 },
      { name: 'Saint-Barthélemy', lat: 17.90, lng: -62.83 },
      { name: 'Polinezia Franceză', lat: -17.65, lng: -149.43 },
      { name: 'Wallis și Futuna', lat: -13.30, lng: -176.20 },
      { name: 'Insula Clipperton', lat: 10.30, lng: -109.22 }
    ]
  },
  GBR: {
    name: 'Regatul Unit',
    polygons: ['FLK'],
    points: [
      { name: 'Gibraltar', lat: 36.14, lng: -5.35 },
      { name: 'Bermuda', lat: 32.30, lng: -64.77 },
      { name: 'Insulele Cayman', lat: 19.32, lng: -81.24 },
      { name: 'Turks și Caicos', lat: 21.79, lng: -71.79 },
      { name: 'Insulele Virgine Britanice', lat: 18.42, lng: -64.62 },
      { name: 'Anguilla', lat: 18.22, lng: -63.05 },
      { name: 'Montserrat', lat: 16.74, lng: -62.19 },
      { name: 'Saint Helena', lat: -15.96, lng: -5.71 },
      { name: 'Ascension', lat: -7.94, lng: -14.37 },
      { name: 'Tristan da Cunha', lat: -37.10, lng: -12.28 },
      { name: 'Pitcairn', lat: -24.37, lng: -128.32 },
      { name: 'Georgia de Sud', lat: -54.28, lng: -36.50 },
      { name: 'Diego Garcia (BIOT)', lat: -7.32, lng: 72.42 },
      { name: 'Akrotiri și Dhekelia', lat: 34.60, lng: 32.97 }
    ]
  },
  ESP: {
    name: 'Spania',
    polygons: [],
    points: [
      { name: 'Insulele Canare', lat: 28.10, lng: -15.40 },
      { name: 'Ceuta', lat: 35.89, lng: -5.31 },
      { name: 'Melilla', lat: 35.29, lng: -2.94 }
    ]
  },
  PRT: {
    name: 'Portugalia',
    polygons: [],
    points: [
      { name: 'Azore', lat: 37.74, lng: -25.67 },
      { name: 'Madeira', lat: 32.67, lng: -16.92 }
    ]
  },
  DNK: {
    name: 'Danemarca',
    polygons: ['GRL'],
    points: [
      { name: 'Insulele Feroe', lat: 61.97, lng: -6.90 }
    ]
  },
  NLD: {
    name: 'Țările de Jos',
    polygons: [],
    points: [
      { name: 'Aruba', lat: 12.52, lng: -70.03 },
      { name: 'Curaçao', lat: 12.17, lng: -68.93 },
      { name: 'Sint Maarten', lat: 18.04, lng: -63.06 },
      { name: 'Bonaire', lat: 12.15, lng: -68.27 },
      { name: 'Saba', lat: 17.63, lng: -63.23 },
      { name: 'Sint Eustatius', lat: 17.49, lng: -62.98 }
    ]
  },
  USA: {
    name: 'Statele Unite ale Americii',
    polygons: ['PRI'],
    points: [
      { name: 'Guam', lat: 13.44, lng: 144.79 },
      { name: 'Insulele Virgine Americane', lat: 18.34, lng: -64.90 },
      { name: 'Samoa Americană', lat: -14.27, lng: -170.70 },
      { name: 'Insulele Mariane de Nord', lat: 15.18, lng: 145.75 }
    ]
  },
  NOR: {
    name: 'Norvegia',
    polygons: [],
    points: [
      { name: 'Svalbard', lat: 78.22, lng: 15.63 },
      { name: 'Jan Mayen', lat: 71.0, lng: -8.30 },
      { name: 'Insula Bouvet', lat: -54.42, lng: 3.36 }
    ]
  },
  AUS: {
    name: 'Australia',
    polygons: [],
    points: [
      { name: 'Insula Norfolk', lat: -29.03, lng: 167.95 },
      { name: 'Insula Crăciunului', lat: -10.49, lng: 105.62 },
      { name: 'Insulele Cocos', lat: -12.16, lng: 96.87 }
    ]
  },
  NZL: {
    name: 'Noua Zeelandă',
    polygons: [],
    points: [
      { name: 'Insulele Cook', lat: -21.23, lng: -159.78 },
      { name: 'Niue', lat: -19.05, lng: -169.87 },
      { name: 'Tokelau', lat: -9.20, lng: -171.85 }
    ]
  },
  CHL: {
    name: 'Chile',
    polygons: [],
    points: [
      { name: 'Insula Paștelui (Rapa Nui)', lat: -27.11, lng: -109.35 },
      { name: 'Juan Fernández', lat: -33.64, lng: -78.84 }
    ]
  },
  ECU: {
    name: 'Ecuador',
    polygons: [],
    points: [
      { name: 'Insulele Galápagos', lat: -0.74, lng: -90.31 }
    ]
  }
};
const overseasParents = Object.keys(overseasTerritories);

// ---------- Căutare țări ----------
// Dicționar nume în română (după cod ISO A3). Unde lipsește, se folosește numele în engleză.
const roNames = {
  AFG: 'Afganistan', ALB: 'Albania', DZA: 'Algeria', AND: 'Andorra', AGO: 'Angola', ATG: 'Antigua și Barbuda',
  ARG: 'Argentina', ARM: 'Armenia', AUS: 'Australia', AUT: 'Austria', AZE: 'Azerbaidjan', BHS: 'Bahamas',
  BHR: 'Bahrain', BGD: 'Bangladesh', BRB: 'Barbados', BLR: 'Belarus', BEL: 'Belgia', BLZ: 'Belize',
  BEN: 'Benin', BTN: 'Bhutan', BOL: 'Bolivia', BIH: 'Bosnia și Herțegovina', BWA: 'Botswana', BRA: 'Brazilia',
  BRN: 'Brunei', BGR: 'Bulgaria', BFA: 'Burkina Faso', BDI: 'Burundi', CPV: 'Capul Verde', KHM: 'Cambodgia',
  CMR: 'Camerun', CAN: 'Canada', CAF: 'Republica Centrafricană', TCD: 'Ciad', CHL: 'Chile', CHN: 'China',
  COL: 'Columbia', COM: 'Comore', COG: 'Congo', COD: 'Republica Democrată Congo', CRI: 'Costa Rica',
  CIV: 'Coasta de Fildeș', HRV: 'Croația', CUB: 'Cuba', CYP: 'Cipru', CZE: 'Cehia', DNK: 'Danemarca',
  DJI: 'Djibouti', DMA: 'Dominica', DOM: 'Republica Dominicană', ECU: 'Ecuador', EGY: 'Egipt', SLV: 'El Salvador',
  GNQ: 'Guineea Ecuatorială', ERI: 'Eritreea', EST: 'Estonia', SWZ: 'Eswatini', ETH: 'Etiopia', FJI: 'Fiji',
  FIN: 'Finlanda', FRA: 'Franța', GAB: 'Gabon', GMB: 'Gambia', GEO: 'Georgia', DEU: 'Germania', GHA: 'Ghana',
  GRC: 'Grecia', GRL: 'Groenlanda', GRD: 'Grenada', GTM: 'Guatemala', GIN: 'Guineea', GNB: 'Guineea-Bissau',
  GUY: 'Guyana', HTI: 'Haiti', HND: 'Honduras', HUN: 'Ungaria', ISL: 'Islanda', IND: 'India', IDN: 'Indonezia',
  IRN: 'Iran', IRQ: 'Irak', IRL: 'Irlanda', ISR: 'Israel', ITA: 'Italia', JAM: 'Jamaica', JPN: 'Japonia',
  JOR: 'Iordania', KAZ: 'Kazahstan', KEN: 'Kenya', KIR: 'Kiribati', PRK: 'Coreea de Nord', KOR: 'Coreea de Sud',
  KOS: 'Kosovo', KWT: 'Kuweit', KGZ: 'Kârgâzstan', LAO: 'Laos', LVA: 'Letonia', LBN: 'Liban', LSO: 'Lesotho',
  LBR: 'Liberia', LBY: 'Libia', LIE: 'Liechtenstein', LTU: 'Lituania', LUX: 'Luxemburg', MDG: 'Madagascar',
  MWI: 'Malawi', MYS: 'Malaezia', MDV: 'Maldive', MLI: 'Mali', MLT: 'Malta', MHL: 'Insulele Marshall',
  MRT: 'Mauritania', MUS: 'Mauritius', MEX: 'Mexic', FSM: 'Micronezia', MDA: 'Republica Moldova', MCO: 'Monaco',
  MNG: 'Mongolia', MNE: 'Muntenegru', MAR: 'Maroc', MOZ: 'Mozambic', MMR: 'Myanmar', NAM: 'Namibia',
  NRU: 'Nauru', NPL: 'Nepal', NLD: 'Țările de Jos', NZL: 'Noua Zeelandă', NIC: 'Nicaragua', NER: 'Niger',
  NGA: 'Nigeria', MKD: 'Macedonia de Nord', NOR: 'Norvegia', OMN: 'Oman', PAK: 'Pakistan', PLW: 'Palau',
  PSE: 'Palestina', PAN: 'Panama', PNG: 'Papua Noua Guinee', PRY: 'Paraguay', PER: 'Peru', PHL: 'Filipine',
  POL: 'Polonia', PRT: 'Portugalia', QAT: 'Qatar', ROU: 'România', RUS: 'Rusia', RWA: 'Rwanda',
  KNA: 'Saint Kitts și Nevis', LCA: 'Saint Lucia', VCT: 'Saint Vincent și Grenadine', WSM: 'Samoa',
  SMR: 'San Marino', STP: 'São Tomé și Príncipe', SAU: 'Arabia Saudită', SEN: 'Senegal', SRB: 'Serbia',
  SYC: 'Seychelles', SLE: 'Sierra Leone', SGP: 'Singapore', SVK: 'Slovacia', SVN: 'Slovenia', SLB: 'Insulele Solomon',
  SOM: 'Somalia', ZAF: 'Africa de Sud', SSD: 'Sudanul de Sud', ESP: 'Spania', LKA: 'Sri Lanka', SDN: 'Sudan',
  SUR: 'Surinam', SWE: 'Suedia', CHE: 'Elveția', SYR: 'Siria', TWN: 'Taiwan', TJK: 'Tadjikistan',
  TZA: 'Tanzania', THA: 'Thailanda', TLS: 'Timorul de Est', TGO: 'Togo', TON: 'Tonga', TTO: 'Trinidad și Tobago',
  TUN: 'Tunisia', TUR: 'Turcia', TKM: 'Turkmenistan', TUV: 'Tuvalu', UGA: 'Uganda', UKR: 'Ucraina',
  ARE: 'Emiratele Arabe Unite', GBR: 'Regatul Unit', USA: 'Statele Unite ale Americii', URY: 'Uruguay',
  UZB: 'Uzbekistan', VUT: 'Vanuatu', VAT: 'Vatican', VEN: 'Venezuela', VNM: 'Vietnam', YEM: 'Yemen',
  ZMB: 'Zambia', ZWE: 'Zimbabwe', ESH: 'Sahara de Vest',
  NCL: 'Noua Caledonie', ATF: 'Teritoriile Australe Franceze', PRI: 'Puerto Rico', FLK: 'Insulele Falkland'
};

// Elimină diacriticele și face literele mici: „România" -> „romania"
const normalizeStr = (s) => (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

// Centroid geografic al celui mai mare inel al poligonului (mediere sferică,
// robustă și pentru țări de la antimeridian: Rusia, Fiji, SUA).
const centroidOf = (feature) => {
  const geom = feature.geometry;
  if (!geom) return { lat: 0, lng: 0 };
  let rings = [];
  if (geom.type === 'Polygon') rings = [geom.coordinates[0]];
  else if (geom.type === 'MultiPolygon') rings = geom.coordinates.map(p => p[0]);
  if (!rings.length) return { lat: 0, lng: 0 };
  const ring = rings.reduce((a, b) => (b.length > a.length ? b : a), rings[0]);
  let x = 0, y = 0, z = 0;
  ring.forEach(([lng, lat]) => {
    const la = lat * Math.PI / 180, lo = lng * Math.PI / 180;
    x += Math.cos(la) * Math.cos(lo);
    y += Math.cos(la) * Math.sin(lo);
    z += Math.sin(la);
  });
  const n = ring.length || 1;
  x /= n; y /= n; z /= n;
  const lng = Math.atan2(y, x) * 180 / Math.PI;
  const hyp = Math.sqrt(x * x + y * y);
  const lat = Math.atan2(z, hyp) * 180 / Math.PI;
  return { lat, lng };
};

Promise.all([
  fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson').then(res => res.json()),
  fetch('territories.geojson?v=26').then(res => res.json()).catch(() => ({ features: [] }))
]).then(([countries, territoriesGeo]) => {

    // Toate poligoanele globului: țările (110m) + contururile reale ale teritoriilor (10m)
    const allFeatures = countries.features.concat(territoriesGeo.features);

    const getIso = (feat) => {
        // teritoriile de peste mări moștenesc statutul țării-mamă
        if (feat.properties.parentIso) return feat.properties.parentIso;
        let iso = feat.properties.ISO_A3;
        if (iso === '-99' || !iso) {
            iso = feat.properties.ADM0_A3;
        }
        return iso;
    };

    // Index de căutare: nume RO + EN, cod ISO, centroid, referință la feature
    const countryIndex = countries.features.map(f => {
        const iso = getIso(f);
        const nameEn = f.properties.ADMIN || '';
        const nameRo = roNames[iso] || nameEn;
        const { lat, lng } = centroidOf(f);
        return {
            feature: f,
            iso,
            nameEn,
            nameRo,
            lat,
            lng,
            keyRo: normalizeStr(nameRo),
            keyEn: normalizeStr(nameEn)
        };
    }).filter(c => c.nameEn);
      const getSchengenVizaStatus = (iso) => {
                if (!iso || iso === '-99') return false;
                if (schengen[iso]) return 'schengen';
                if (euNonSchengenNoVisa.includes(iso)) return 'eu_exempt';
                if (schengenVisaRequired.includes(iso)) return 'required';
                if (schengenVisaExempt.includes(iso)) return 'exempt';
                return false;
      };
    const getCountryMemberYear = (iso) => {
        if (currentOrg === 'none') return false;
        
        if (currentOrg === 'onu') {
            if (iso && iso !== '-99' && !unNonMembers.includes(iso)) {
                if (onu_founders.includes(iso)) return 1945;
                if (onu_years[iso]) return onu_years[iso];
                return 'Membru'; 
            }
            return false;
        }

        if (currentOrg === 'interpol') {
            if (iso && iso !== '-99' && !interpolNonMembers.includes(iso)) {
                return 'Membru'; 
            }
            return false;
        }

        if (currentOrg === 'oms') {
            if (iso && iso !== '-99' && !omsNonMembers.includes(iso)) {
                if (onu_founders.includes(iso)) return 1948; // WHO founded in 1948
                return 'Membru'; 
            }
            return false;
        }

        if (currentOrg === 'unhcr') {
            if (iso && iso !== '-99' && !unNonMembers.includes(iso)) {
                if (onu_founders.includes(iso)) return 1950; // UNHCR founded in 1950
                return 'Membru'; 
            }
            return false;
        }

        if (currentOrg === 'fmi') {
            if (iso && iso !== '-99' && !fmiNonMembers.includes(iso)) {
                if (onu_founders.includes(iso)) return 1945; // IMF founded in 1945
                return 'Membru'; 
            }
            return false;
        }

        if (currentOrg === 'unesco') {
            if (iso && iso !== '-99' && !unescoNonMembers.includes(iso)) {
                if (onu_founders.includes(iso)) return 1945; // UNESCO founded in 1945
                return 'Membru'; 
            }
            return false;
        }
        
        if (organizations[currentOrg] && organizations[currentOrg][iso]) {
            return organizations[currentOrg][iso];
        }
        return false;
    };
          const getPolygonColor = (feat) => {
                    if (currentOrg === 'none') return 'rgba(255, 255, 255, 0.6)';
                    const iso = getIso(feat);
                    if (currentOrg === 'schengen_viza') {
                                const status = getSchengenVizaStatus(iso);
                                if (status === 'schengen') return 'rgba(37, 99, 235, 0.9)';
                                if (status === 'required') return 'rgba(220, 38, 38, 0.9)';
                                if (status === 'exempt' || status === 'eu_exempt') return 'rgba(34, 197, 94, 0.9)';
                                return 'rgba(200, 205, 215, 0.6)';
                    }
                    if (currentOrg === 'overseas') {
                                if (overseasSelection) {
                                            const t = overseasTerritories[overseasSelection];
                                            if (feat.properties.parentIso) {
                                                        return feat.properties.parentIso === overseasSelection ? 'rgba(192, 132, 252, 0.95)' : 'rgba(200, 205, 215, 0.6)';
                                            }
                                            if (iso === overseasSelection) return 'rgba(147, 51, 234, 0.9)';
                                            if (t.polygons.includes(iso)) return 'rgba(192, 132, 252, 0.95)';
                                            return 'rgba(200, 205, 215, 0.6)';
                                }
                                if (feat.properties.parentIso) return 'rgba(200, 205, 215, 0.6)';
                                return overseasParents.includes(iso) ? 'rgba(147, 51, 234, 0.7)' : 'rgba(200, 205, 215, 0.6)';
                    }
                    return getCountryMemberYear(iso) !== false ? 'rgba(34, 197, 94, 0.9)' : 'rgba(200, 205, 215, 0.6)';
          };

    const world = Globe()
      (document.getElementById('globe-container'))
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .backgroundColor('#f8fafc')
      .polygonsData(allFeatures)
      .polygonAltitude(0.01)
      .polygonCapColor(feat => getPolygonColor(feat))
      .polygonSideColor(() => 'rgba(0, 0, 0, 0.1)')
      .polygonStrokeColor(() => '#e2e8f0')
      .polygonLabel((feat) => {
          const d = feat.properties;
          const iso = getIso(feat);
          const memberYear = getCountryMemberYear(iso);
          
          let memberBadge = '';
                  if (currentOrg === 'schengen_viza') {
                              const status = getSchengenVizaStatus(iso);
                              if (status === 'schengen') {
                                            memberBadge = `<div style="color: #2563eb; font-size: 12px; margin-top: 4px; display: flex; align-items: center; gap: 4px;"><span style="display:inline-block; width:6px; height:6px; background:#2563eb; border-radius:50%;"></span> Spațiul Schengen</div>`;
                              } else if (status === 'required') {
                                            memberBadge = `<div style="color: #dc2626; font-size: 12px; margin-top: 4px; display: flex; align-items: center; gap: 4px;"><span style="display:inline-block; width:6px; height:6px; background:#dc2626; border-radius:50%;"></span> Necesită viză (Reg. (UE) 2018/1806)</div>`;
                              } else if (status === 'exempt') {
                                            memberBadge = `<div style="color: #16a34a; font-size: 12px; margin-top: 4px; display: flex; align-items: center; gap: 4px;"><span style="display:inline-block; width:6px; height:6px; background:#16a34a; border-radius:50%;"></span> Nu necesită viză (Reg. (UE) 2018/1806)</div>`;
                              } else if (status === 'eu_exempt') {
                                            memberBadge = `<div style="color: #16a34a; font-size: 12px; margin-top: 4px; display: flex; align-items: center; gap: 4px;"><span style="display:inline-block; width:6px; height:6px; background:#16a34a; border-radius:50%;"></span> Stat membru UE (non-Schengen) – nu necesită viză</div>`;
                              }
                  } else if (currentOrg === 'overseas' && overseasSelection) {
                              const t = overseasTerritories[overseasSelection];
                              if (d.parentIso === overseasSelection || t.polygons.includes(iso)) {
                                            memberBadge = `<div style="color: #9333ea; font-size: 12px; margin-top: 4px; display: flex; align-items: center; gap: 4px;"><span style="display:inline-block; width:6px; height:6px; background:#9333ea; border-radius:50%;"></span> Teritoriu aparținând: ${t.name}</div>`;
                              } else if (iso === overseasSelection) {
                                            memberBadge = `<div style="color: #9333ea; font-size: 12px; margin-top: 4px; display: flex; align-items: center; gap: 4px;"><span style="display:inline-block; width:6px; height:6px; background:#9333ea; border-radius:50%;"></span> Țară-mamă</div>`;
                              }
                  } else if (memberYear !== false) {
            const yearText = typeof memberYear === 'number' ? `(din ${memberYear})` : ``;
            memberBadge = `<div style="color: #16a34a; font-size: 12px; margin-top: 4px; display: flex; align-items: center; gap: 4px;">
                 <span style="display:inline-block; width:6px; height:6px; background:#16a34a; border-radius:50%;"></span> Membru ${yearText}
               </div>`;
          }
            
          return `
            <div style="background: rgba(255, 255, 255, 0.95); padding: 10px 14px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.1); box-shadow: 0 4px 15px rgba(0,0,0,0.1); font-family: 'Inter', sans-serif;">
                <b style="color: #1e293b; font-size: 14px;">${d.name || roNames[iso] || d.ADMIN}</b>
                ${memberBadge}
            </div>
          `;
      })
      .onPolygonHover(hoverD => {
        world.polygonAltitude(d => d === hoverD ? Math.max(0.08, reliefAlt(d)) : reliefAlt(d))
          .polygonCapColor(d => d === hoverD ? '#60a5fa' : getPolygonColor(d));
      })
      .polygonsTransitionDuration(300)
      .pointsData([])
      .pointLat(d => d.lat)
      .pointLng(d => d.lng)
      .pointColor(() => 'rgba(147, 51, 234, 0.95)')
      .pointAltitude(d => d === focusedTerritory ? 0.32 : 0.16)
      .pointRadius(d => d === focusedTerritory ? 1.0 : 0.65)
      .pointsMerge(false)
      .htmlElementsData([])
      .htmlLat(d => d.lat)
      .htmlLng(d => d.lng)
      .htmlAltitude(0.18)
      .htmlElement(d => {
        const el = document.createElement('div');
        el.className = 'territory-label' + (d === focusedTerritory ? ' focused' : '');
        el.textContent = d.name;
        return el;
      });

      // Altitudinea poligoanelor: țara căutată + teritoriile selectate ies în relief
      const reliefAlt = (d) => {
        if (focusedTerritoryName && d.properties.name === focusedTerritoryName) return 0.3;
        if (focusedTerritoryIso && !d.properties.parentIso && getIso(d) === focusedTerritoryIso) return 0.3;
        if (d === highlightedFeature) return 0.25;
        if (currentOrg === 'overseas' && overseasSelection) {
          const iso = getIso(d);
          const t = overseasTerritories[overseasSelection];
          if (d.properties.parentIso === overseasSelection) return 0.14;
          if (!d.properties.parentIso && (iso === overseasSelection || t.polygons.includes(iso))) return 0.14;
        }
        return 0.01;
      };

      // Redesenează poligoanele (relief + culori) în funcție de țara evidențiată
      const refreshPolygons = () => {
        world.polygonAltitude(d => reliefAlt(d));
        world.polygonCapColor(d => getPolygonColor(d));
      };

      // Re-aplică aspectul punctelor-teritorii (dimensiune/relief la hover)
      let currentTerritoryPoints = [];
      const refreshPoints = () => {
        world.pointAltitude(world.pointAltitude());
        world.pointRadius(world.pointRadius());
        // Re-creează etichetele HTML pentru a aplica clasa „focused"
        world.htmlElementsData(currentTerritoryPoints.slice());
      };

      // Lista completă de teritorii a unei țări (puncte + poligoane), sortată alfabetic
      const territoryItems = (code) => {
        const t = overseasTerritories[code];
        const items = t.points.map(p => ({ kind: 'point', ref: p, name: p.name, lat: p.lat, lng: p.lng }));
        t.polygons.forEach(polyIso => {
          const entry = countryIndex.find(c => c.iso === polyIso);
          if (entry) items.push({ kind: 'polygon', iso: polyIso, name: roNames[polyIso] || entry.nameRo, lat: entry.lat, lng: entry.lng });
        });
        return items.sort((a, b) => a.name.localeCompare(b.name, 'ro'));
      };

      // Hover pe un teritoriu din panoul din dreapta: globul zboară la el
      // și RĂMÂNE acolo până la alegerea altui teritoriu (fără fly-back).
      const focusTerritory = (item) => {
        const hasGeo = item.kind === 'point' && currentGeoNames.has(item.name);
        focusedTerritory = (item.kind === 'point' && !hasGeo) ? item.ref : null;
        focusedTerritoryIso = item.kind === 'polygon' ? item.iso : null;
        focusedTerritoryName = hasGeo ? item.name : null;
        refreshPoints();
        refreshPolygons();
        world.pointOfView({ lat: item.lat, lng: item.lng, altitude: 1.2 }, 1200);
        world.controls().autoRotate = false;
        clearTimeout(resumeRotateTimer);
      };

      const clearTerritoryFocus = (flyBack) => {
        focusedTerritory = null;
        focusedTerritoryIso = null;
        focusedTerritoryName = null;
        refreshPoints();
        refreshPolygons();
        if (flyBack && currentOrg === 'overseas' && overseasSelection) {
          const entry = countryIndex.find(c => c.iso === overseasSelection);
          if (entry) world.pointOfView({ lat: entry.lat, lng: entry.lng, altitude: 2.3 }, 1200);
        }
      };

      // Panoul din dreapta: „Franța — 13 teritorii —" + lista teritoriilor
      const overseasInfo = document.getElementById('overseas-info');
      const renderOverseasInfo = () => {
        if (currentOrg !== 'overseas' || !overseasSelection) {
          overseasInfo.classList.remove('visible');
          return;
        }
        const t = overseasTerritories[overseasSelection];
        const items = territoryItems(overseasSelection);
        document.getElementById('overseas-info-name').textContent = t.name;
        document.getElementById('overseas-info-count').textContent = `— ${items.length} teritorii —`;
        const list = document.getElementById('overseas-info-list');
        list.innerHTML = items.map((it, i) =>
          `<div class="overseas-info-item" data-idx="${i}">• ${it.name}</div>`
        ).join('');
        list.querySelectorAll('.overseas-info-item').forEach(el => {
          el.addEventListener('mouseenter', () => {
            list.querySelectorAll('.overseas-info-item').forEach(x => x.classList.remove('hover'));
            el.classList.add('hover');
            focusTerritory(items[Number(el.getAttribute('data-idx'))]);
          });
        });
        overseasInfo.classList.add('visible');
      };
      overseasInfo.addEventListener('mouseleave', () => {
        // Nu mai facem fly-back: teritoriul ales rămâne în prim-plan.
      });

      // Afișează/ascunde punctele-teritorii și etichetele lor.
      // Cilindrele rămân DOAR pentru teritoriile fără contur real; cele cu
      // contur sunt desenate ca poligoane, dar păstrează eticheta HTML.
      let currentGeoNames = new Set();
      const applyOverseas = () => {
        if (currentOrg === 'overseas' && overseasSelection) {
          const t = overseasTerritories[overseasSelection];
          currentGeoNames = new Set(
            territoriesGeo.features
              .filter(f => f.properties.parentIso === overseasSelection)
              .map(f => f.properties.name)
          );
          currentTerritoryPoints = t.points;
          world.pointsData(t.points.filter(p => !currentGeoNames.has(p.name)));
          world.htmlElementsData(t.points);
        } else {
          currentGeoNames = new Set();
          currentTerritoryPoints = [];
          world.pointsData([]);
          world.htmlElementsData([]);
        }
      };

      // Panoul derulant cu țările care au teritorii de peste mări
      const overseasPanel = document.getElementById('overseas-panel');
      const overseasList = document.getElementById('overseas-list');
      const renderOverseasPanel = () => {
        overseasList.innerHTML = overseasParents.map(code => {
          const t = overseasTerritories[code];
          const count = t.polygons.length + t.points.length;
          return `<div class="overseas-item${code === overseasSelection ? ' active' : ''}" data-code="${code}">
            <span>${t.name}</span><span class="overseas-count">${count} teritorii</span>
          </div>`;
        }).join('');
        overseasList.querySelectorAll('.overseas-item').forEach(el => {
          el.addEventListener('click', () => {
            overseasSelection = el.getAttribute('data-code');
            clearTerritoryFocus(false);
            renderOverseasPanel();
            applyOverseas();
            renderOverseasInfo();
            refreshPolygons();
            const entry = countryIndex.find(c => c.iso === overseasSelection);
            if (entry) {
              world.pointOfView({ lat: entry.lat, lng: entry.lng, altitude: 2.3 }, 1600);
              world.controls().autoRotate = false;
              clearTimeout(resumeRotateTimer);
              resumeRotateTimer = setTimeout(() => { world.controls().autoRotate = true; }, 9000);
            }
          });
        });
      };

      // ---------- Motor de căutare țări ----------
      const searchInput = document.getElementById('country-search');
      const searchResults = document.getElementById('search-results');
      let activeIndex = -1;
      let currentMatches = [];

      const closeResults = () => {
        searchResults.classList.remove('visible');
        searchResults.innerHTML = '';
        activeIndex = -1;
      };

      const selectCountry = (entry) => {
        searchInput.value = entry.nameRo;
        closeResults();
        highlightedFeature = entry.feature;
        refreshPolygons();
        // Globul se rotește și "zboară" spre țară
        world.pointOfView({ lat: entry.lat, lng: entry.lng, altitude: 1.6 }, 1600);
        world.controls().autoRotate = false;
        clearTimeout(resumeRotateTimer);
        resumeRotateTimer = setTimeout(() => { world.controls().autoRotate = true; }, 9000);
      };

      const renderResults = (matches) => {
        currentMatches = matches;
        activeIndex = matches.length ? 0 : -1;
        if (!matches.length) {
          searchResults.innerHTML = '<div class="search-empty">Nicio țară găsită</div>';
          searchResults.classList.add('visible');
          return;
        }
        searchResults.innerHTML = matches.map((c, i) => `
          <div class="search-item${i === activeIndex ? ' selected' : ''}" data-idx="${i}">
            <span class="search-item-name">${c.nameRo}</span>
            <span class="search-item-alt">${c.nameRo !== c.nameEn ? c.nameEn : c.iso}</span>
          </div>
        `).join('');
        searchResults.classList.add('visible');
        searchResults.querySelectorAll('.search-item').forEach(el => {
          el.addEventListener('mousedown', (e) => {
            e.preventDefault();
            selectCountry(currentMatches[Number(el.getAttribute('data-idx'))]);
          });
        });
      };

      const filterCountries = (q) => {
        const query = normalizeStr(q.trim());
        if (!query) return [];
        const starts = [], contains = [];
        countryIndex.forEach(c => {
          if (c.keyRo.startsWith(query) || c.keyEn.startsWith(query)) starts.push(c);
          else if (c.keyRo.includes(query) || c.keyEn.includes(query)) contains.push(c);
        });
        return starts.concat(contains).slice(0, 8);
      };

      searchInput.addEventListener('input', () => {
        const q = searchInput.value;
        if (!q.trim()) {
          closeResults();
          if (highlightedFeature) {
            highlightedFeature = null;
            refreshPolygons();
          }
          return;
        }
        renderResults(filterCountries(q));
      });

      searchInput.addEventListener('keydown', (e) => {
        if (!searchResults.classList.contains('visible')) return;
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
          if (!currentMatches.length) return;
          activeIndex = (activeIndex + (e.key === 'ArrowDown' ? 1 : -1) + currentMatches.length) % currentMatches.length;
          searchResults.querySelectorAll('.search-item').forEach((el, i) => {
            el.classList.toggle('selected', i === activeIndex);
          });
        } else if (e.key === 'Enter') {
          e.preventDefault();
          if (activeIndex >= 0 && currentMatches[activeIndex]) selectCountry(currentMatches[activeIndex]);
        } else if (e.key === 'Escape') {
          closeResults();
        }
      });

      searchInput.addEventListener('blur', () => setTimeout(closeResults, 150));
      searchInput.addEventListener('focus', () => {
        if (searchInput.value.trim()) renderResults(filterCountries(searchInput.value));
      });

      world.controls().autoRotate = true;
      world.controls().autoRotateSpeed = -0.5;

      // Contoarele pentru viză (Reg. (UE) 2018/1806) — afișate în dreapta
      // doar când modul "schengen_viza" este activ.
      const visaCounters = document.getElementById('visa-counters');
      const updateVisaCounters = () => {
        if (!visaCounters) return;
        if (currentOrg === 'schengen_viza') {
          const exemptCount = schengenVisaExempt.length + euNonSchengenNoVisa.length;
          const requiredCount = schengenVisaRequired.length;
          document.getElementById('count-exempt').textContent = exemptCount;
          document.getElementById('count-required').textContent = requiredCount;
          visaCounters.classList.add('visible');
        } else {
          visaCounters.classList.remove('visible');
        }
      };

      const buttons = document.querySelectorAll('#button-group button');
      buttons.forEach(btn => {
        const org = btn.getAttribute('data-org');
        if (org === 'onu') {
           btn.innerHTML += ` <span style="opacity: 0.7; font-size: 0.9em; margin-left: auto; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px;">193 de state</span>`;
        } else if (org === 'interpol') {
           btn.innerHTML += ` <span style="opacity: 0.7; font-size: 0.9em; margin-left: auto; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px;">196 de state</span>`;
        } else if (org === 'oms') {
           btn.innerHTML += ` <span style="opacity: 0.7; font-size: 0.9em; margin-left: auto; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px;">194 de state</span>`;
        } else if (org === 'unhcr') {
           btn.innerHTML += ` <span style="opacity: 0.7; font-size: 0.9em; margin-left: auto; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px;">193 de state</span>`;
        } else if (org === 'fmi') {
           btn.innerHTML += ` <span style="opacity: 0.7; font-size: 0.9em; margin-left: auto; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px;">190 de state</span>`;
        } else if (org === 'unesco') {
           btn.innerHTML += ` <span style="opacity: 0.7; font-size: 0.9em; margin-left: auto; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px;">194 de state</span>`;
        } else if (org === 'schengen_viza') {
                    btn.innerHTML += ` <span style="opacity: 0.7; font-size: 0.9em; margin-left: auto; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px;">Reg. (UE) 2018/1806</span>`;
          
        } else if (org === 'overseas') {
                    btn.innerHTML += ` <span style="opacity: 0.7; font-size: 0.9em; margin-left: auto; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px;">${overseasParents.length} țări</span>`;

        } else if (organizations[org]) {
           const count = Object.keys(organizations[org]).length;
           btn.innerHTML += ` <span style="opacity: 0.7; font-size: 0.9em; margin-left: auto; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px;">${count} de state</span>`;
        }

        btn.addEventListener('click', (e) => {
          const org = e.currentTarget.getAttribute('data-org');

          // Toggle: a doua apăsare pe „Teritoriile de peste mări" închide panoul
          if (org === 'overseas' && currentOrg === 'overseas') {
            currentOrg = 'none';
            buttons.forEach(b => b.classList.remove('active'));
            document.querySelector('#button-group button[data-org="none"]').classList.add('active');
            highlightedFeature = null;
            overseasSelection = null;
            clearTerritoryFocus(false);
            overseasPanel.classList.remove('visible');
            applyOverseas();
            renderOverseasInfo();
            refreshPolygons();
            updateVisaCounters();
            world.controls().autoRotate = true;
            return;
          }

          buttons.forEach(b => b.classList.remove('active'));
          e.currentTarget.classList.add('active');
          
          currentOrg = org;
          if (currentOrg === 'none') highlightedFeature = null;
          if (currentOrg !== 'overseas') overseasSelection = null;
          if (currentOrg !== 'overseas') world.controls().autoRotate = true;
          clearTerritoryFocus(false);
          overseasPanel.classList.toggle('visible', currentOrg === 'overseas');
          renderOverseasPanel();
          applyOverseas();
          renderOverseasInfo();
          refreshPolygons();
          updateVisaCounters();
        });
      });
  });
