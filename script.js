const schengen = { AUT: 1997, BEL: 1995, BGR: 2024, HRV: 2023, CZE: 2007, DNK: 2001, EST: 2007, FIN: 2001, FRA: 1995, DEU: 1995, GRC: 2000, HUN: 2007, ISL: 2001, ITA: 1997, LVA: 2007, LIE: 2011, LTU: 2007, LUX: 1995, MLT: 2007, NLD: 1995, NOR: 2001, POL: 2007, PRT: 1995, ROU: 2024, SVK: 2007, SVN: 2007, ESP: 1995, SWE: 2001, CHE: 2008 };
const eu = { AUT: 1995, BEL: 1958, BGR: 2007, HRV: 2013, CYP: 2004, CZE: 2004, DNK: 1973, EST: 2004, FIN: 1995, FRA: 1958, DEU: 1958, GRC: 1981, HUN: 2004, IRL: 1973, ITA: 1958, LVA: 2004, LTU: 2004, LUX: 1958, MLT: 2004, NLD: 1958, POL: 2004, PRT: 1986, ROU: 2007, SVK: 2004, SVN: 2004, ESP: 1986, SWE: 1995 };
const eea = { ...eu, ISL: 1994, LIE: 1995, NOR: 1994, AUT: 1994, FIN: 1994, SWE: 1994 };
const nato = { ALB: 2009, BEL: 1949, BGR: 2004, CAN: 1949, HRV: 2009, CZE: 1999, DNK: 1949, EST: 2004, FIN: 2023, FRA: 1949, DEU: 1955, GRC: 1952, HUN: 1999, ISL: 1949, ITA: 1949, LVA: 2004, LTU: 2004, LUX: 1949, MNE: 2017, NLD: 1949, MKD: 2020, NOR: 1949, POL: 1999, PRT: 1949, ROU: 2004, SVK: 2004, SVN: 2004, ESP: 1982, SWE: 2024, TUR: 1952, GBR: 1949, USA: 1949 };
const osce = { AUT: 1975, BEL: 1975, BGR: 1975, CAN: 1975, CYP: 1975, CZE: 1993, DNK: 1975, FIN: 1975, FRA: 1975, DEU: 1975, GRC: 1975, VAT: 1975, HUN: 1975, ISL: 1975, IRL: 1975, ITA: 1975, LIE: 1975, LUX: 1975, MLT: 1975, MCO: 1975, NLD: 1975, NOR: 1975, POL: 1975, PRT: 1975, ROU: 1975, SMR: 1975, ESP: 1975, SWE: 1975, CHE: 1975, TUR: 1975, GBR: 1975, USA: 1975, ALB: 1991, AND: 1996, ARM: 1992, AZE: 1992, BLR: 1992, BIH: 1992, HRV: 1992, EST: 1991, GEO: 1992, KAZ: 1992, KGZ: 1992, LVA: 1991, LTU: 1991, MDA: 1992, MNG: 2012, MNE: 2006, MKD: 1995, RUS: 1991, SRB: 2000, SVK: 1993, SVN: 1992, TJK: 1992, TKM: 1992, UKR: 1992, UZB: 1992 };

const unNonMembers = ['TWN', 'ESH', 'KOS', 'PSE', 'VAT', 'SXM', 'CUW', 'ABW', 'GRL', 'NCL', 'PYF', 'ATF'];
const interpolNonMembers = ['PRK', 'TWN', 'ESH', 'KOS', 'SXM', 'CUW', 'ABW', 'GRL', 'NCL', 'PYF', 'ATF'];
const onu_founders = ['ARG', 'AUS', 'BEL', 'BOL', 'BRA', 'BLR', 'CAN', 'CHL', 'CHN', 'COL', 'CRI', 'CUB', 'CZE', 'DNK', 'DOM', 'ECU', 'EGY', 'SLV', 'ETH', 'FRA', 'GRC', 'GTM', 'HTI', 'HND', 'IND', 'IRN', 'IRQ', 'LBN', 'LBR', 'LUX', 'MEX', 'NLD', 'NZL', 'NIC', 'NOR', 'PAN', 'PRY', 'PER', 'PHL', 'POL', 'RUS', 'SAU', 'ZAF', 'SYR', 'TUR', 'UKR', 'GBR', 'USA', 'URY', 'VEN', 'YUG'];
const onu_years = { AFG: 1946, ISL: 1946, SWE: 1946, THA: 1946, PAK: 1947, YEM: 1947, MMR: 1948, ISR: 1949, IDN: 1950, ALB: 1955, AUT: 1955, BGR: 1955, KHM: 1955, LKA: 1955, FIN: 1955, HUN: 1955, IRL: 1955, ITA: 1955, JOR: 1955, LAO: 1955, LBY: 1955, NPL: 1955, PRT: 1955, ROU: 1955, ESP: 1955, JPN: 1956, MAR: 1956, SDN: 1956, TUN: 1956, GHA: 1957, MYS: 1957, GIN: 1958, BEN: 1960, BFA: 1960, CMR: 1960, CAF: 1960, TCD: 1960, COG: 1960, CIV: 1960, CYP: 1960, GAB: 1960, MDG: 1960, MLI: 1960, NER: 1960, NGA: 1960, SEN: 1960, SOM: 1960, TGO: 1960, COD: 1960, MRT: 1961, MNG: 1961, SLE: 1961, TZA: 1961, DZA: 1962, BDI: 1962, JAM: 1962, RWA: 1962, TTO: 1962, UGA: 1962, KEN: 1963, KWT: 1963, MWI: 1964, MLT: 1964, ZMB: 1964, GMB: 1965, MDV: 1965, SGP: 1965, BRB: 1966, BWA: 1966, GUY: 1966, LSO: 1966, GNQ: 1968, MUS: 1968, SWZ: 1968, FJI: 1970, BHR: 1971, BTN: 1971, OMN: 1971, QAT: 1971, ARE: 1971, BHS: 1973, DEU: 1973, BGD: 1974, GRD: 1974, GNB: 1974, CPV: 1975, COM: 1975, MOZ: 1975, PNG: 1975, STP: 1975, SUR: 1975, AGO: 1976, WSM: 1976, SYC: 1976, DJI: 1977, VNM: 1977, DMA: 1978, SLB: 1978, LCA: 1979, VCT: 1980, ZWE: 1980, ATG: 1981, BLZ: 1981, VUT: 1981, KNA: 1983, BRN: 1984, LIE: 1990, NAM: 1990, PRK: 1991, KOR: 1991, FSM: 1991, MHL: 1991, EST: 1991, LVA: 1991, LTU: 1991, ARM: 1992, AZE: 1992, BIH: 1992, HRV: 1992, GEO: 1992, KAZ: 1992, KGZ: 1992, MDA: 1992, SMR: 1992, SVN: 1992, TJK: 1992, TKM: 1992, UZB: 1992, AND: 1993, ERI: 1993, MKD: 1993, MCO: 1993, SVK: 1993, PLW: 1994, KIR: 1999, NRU: 1999, TON: 1999, TUV: 2000, SRB: 2000, CHE: 2002, TLS: 2002, MNE: 2006, SSD: 2011 };

const organizations = {
  schengen: schengen,
  eu: eu,
  eea: eea,
  nato: nato,
  osce: osce
};

let currentOrg = 'none';

fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
  .then(res => res.json())
  .then(countries => {
    
    const getIso = (feat) => {
        let iso = feat.properties.ISO_A3;
        if (iso === '-99' || !iso) {
            iso = feat.properties.ADM0_A3;
        }
        return iso;
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
        
        if (organizations[currentOrg] && organizations[currentOrg][iso]) {
            return organizations[currentOrg][iso];
        }
        return false;
    };

    const world = Globe()
      (document.getElementById('globe-container'))
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .backgroundColor('#f8fafc')
      .polygonsData(countries.features)
      .polygonAltitude(0.01)
      .polygonCapColor(feat => {
        if (currentOrg === 'none') {
           return 'rgba(255, 255, 255, 0.6)';
        }
        const iso = getIso(feat);
        return getCountryMemberYear(iso) !== false ? 'rgba(34, 197, 94, 0.9)' : 'rgba(200, 205, 215, 0.6)';
      })
      .polygonSideColor(() => 'rgba(0, 0, 0, 0.1)')
      .polygonStrokeColor(() => '#e2e8f0')
      .polygonLabel(({ properties: d }) => {
          const iso = d.ISO_A3 === '-99' ? d.ADM0_A3 : d.ISO_A3;
          const memberYear = getCountryMemberYear(iso);
          
          let memberBadge = '';
          if (memberYear !== false) {
            const yearText = typeof memberYear === 'number' ? `(din ${memberYear})` : ``;
            memberBadge = `<div style="color: #16a34a; font-size: 12px; margin-top: 4px; display: flex; align-items: center; gap: 4px;">
                 <span style="display:inline-block; width:6px; height:6px; background:#16a34a; border-radius:50%;"></span> Membru ${yearText}
               </div>`;
          }
            
          return `
            <div style="background: rgba(255, 255, 255, 0.95); padding: 10px 14px; border-radius: 8px; border: 1px solid rgba(0,0,0,0.1); box-shadow: 0 4px 15px rgba(0,0,0,0.1); font-family: 'Inter', sans-serif;">
                <b style="color: #1e293b; font-size: 14px;">${d.ADMIN}</b>
                ${memberBadge}
            </div>
          `;
      })
      .onPolygonHover(hoverD => {
        world.polygonAltitude(d => d === hoverD ? 0.08 : 0.01)
          .polygonCapColor(d => {
            if (d === hoverD) return '#60a5fa'; 
            
            if (currentOrg === 'none') {
               return 'rgba(255, 255, 255, 0.6)';
            }
            
            const iso = getIso(d);
            return getCountryMemberYear(iso) !== false ? 'rgba(34, 197, 94, 0.9)' : 'rgba(200, 205, 215, 0.6)';
          });
      })
      .polygonsTransitionDuration(300);

      world.controls().autoRotate = true;
      world.controls().autoRotateSpeed = -0.5;

      const buttons = document.querySelectorAll('#button-group button');
      buttons.forEach(btn => {
        const org = btn.getAttribute('data-org');
        if (org === 'onu') {
           btn.innerHTML += ` <span style="opacity: 0.7; font-size: 0.9em; margin-left: auto; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px;">193 de state</span>`;
        } else if (org === 'interpol') {
           btn.innerHTML += ` <span style="opacity: 0.7; font-size: 0.9em; margin-left: auto; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px;">196 de state</span>`;
        } else if (organizations[org]) {
           const count = Object.keys(organizations[org]).length;
           btn.innerHTML += ` <span style="opacity: 0.7; font-size: 0.9em; margin-left: auto; background: rgba(0,0,0,0.05); padding: 2px 6px; border-radius: 4px;">${count} de state</span>`;
        }

        btn.addEventListener('click', (e) => {
          buttons.forEach(b => b.classList.remove('active'));
          e.currentTarget.classList.add('active');
          
          currentOrg = e.currentTarget.getAttribute('data-org');
          world.polygonCapColor(world.polygonCapColor());
        });
      });
  });
