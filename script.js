/* =========================================================
   MOBILE NAV
========================================================= */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => {
  navLinks.classList.toggle('is-open');
});
navLinks?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('is-open'));
});

/* =========================================================
   FOOTER YEAR
========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();

/* =========================================================
   HERO FLOW FIELD
   Generates a set of gently drifting streamlines to evoke
   MHD / fluid turbulence — the subject's own research area.
========================================================= */
(function drawFlowField(){
  const container = document.getElementById('flowField');
  if (!container) return;

  const NS = 'http://www.w3.org/2000/svg';
  const width = 1200, height = 800;
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');

  const lineCount = 14;
  for (let i = 0; i < lineCount; i++) {
    const y = (height / lineCount) * i + (Math.random() * 30 - 15);
    const amp = 40 + Math.random() * 60;
    const freq = 0.5 + Math.random() * 0.6;
    const phase = Math.random() * Math.PI * 2;

    let d = `M -50 ${y}`;
    const steps = 24;
    for (let s = 1; s <= steps; s++) {
      const x = (width + 100) * (s / steps) - 50;
      const wave = Math.sin((s / steps) * Math.PI * freq * 2 + phase) * amp;
      d += ` L ${x.toFixed(1)} ${(y + wave).toFixed(1)}`;
    }

    const path = document.createElementNS(NS, 'path');
    path.setAttribute('d', d);
    path.setAttribute('fill', 'none');
    path.setAttribute('stroke', i % 3 === 0 ? '#c9a227' : '#2a6f77');
    path.setAttribute('stroke-width', i % 3 === 0 ? '1.1' : '0.7');
    path.setAttribute('stroke-opacity', (0.12 + Math.random() * 0.18).toFixed(2));
    path.setAttribute('stroke-linecap', 'round');

    const dur = (18 + Math.random() * 14).toFixed(1);
    const dx = (30 + Math.random() * 40).toFixed(0);
    const animate = document.createElementNS(NS, 'animateTransform');
    animate.setAttribute('attributeName', 'transform');
    animate.setAttribute('type', 'translate');
    animate.setAttribute('values', `0 0; ${dx} 0; 0 0`);
    animate.setAttribute('dur', `${dur}s`);
    animate.setAttribute('repeatCount', 'indefinite');
    path.appendChild(animate);

    svg.appendChild(path);
  }

  container.appendChild(svg);
})();

/* =========================================================
   PUBLICATIONS DATA
========================================================= */
const PUBLICATIONS = [
  { title: "Homotopy Perturbation Approach to Fractional-Order CAR T-Cell Therapy with Cytokines in Leukemia", meta: "Rajshahi University Journal of Science and Engineering, Vol. 46–53 (2018–2025), pp. 27–49" },
  { title: "Soliton solutions, chaotic dynamics, and stability analysis of the (2+1)-dimensional time-space fractional nonlinear Schrödinger equation", meta: "Optical and Quantum Electronics, 58(382), 2026", link: "https://link.springer.com/article/10.1007/s11082-026-08978-y" },
  { title: "A study on numerical solutions of a fractional-order model for CAR T-cell therapy in leukemia using the Laplace–Adomian decomposition method", meta: "Sigma Journal of Engineering and Natural Sciences, 44(2), Apr 2026, pp. 954–969 · DOI: 10.14744/sigma.2025.00053" },
  { title: "Fractional-Order Approach to Modeling and Parameter Study of Leukemia Using the Laplace–Adomian Decomposition Method", meta: "Vol. 14, March 2026, 100528" },
  { title: "Mathematical insights into the comparative effectiveness of chemotherapy and T-cell therapy of leukemia", meta: "Discover Data, 4(2), pp. 1–23", link: "https://doi.org/10.1007/s44248-026-00102-5" },
  { title: "A study on fractional-order mathematical analysis for inspecting the spread of the leukemia virus", meta: "Partial Differential Equations in Applied Mathematics" },
  { title: "A study on fractional-order mathematical and parameter analysis for CAR T-cell therapy for leukemia using homotopy perturbation method", meta: "Partial Differential Equations in Applied Mathematics, 14, pp. 101152" },
  { title: "Exploration and prediction of COVID-19 pandemic in Bangladesh using numerical approach", meta: "Discover Data" },
  { title: "Mathematical analysis of chimeric antigen receptor T-cell therapy for leukaemia using optimal control approach", meta: "Journal of Umm Al-Qura University for Applied Sciences, pp. 1–18" },
  { title: "A study about the prediction of population growth and demographic transition in Bangladesh", meta: "pp. 1–13" },
  { title: "Investigation on predicting family planning and women's and children's health effects on Bangladesh by conducting age structure population model", meta: "p. 19" },
  { title: "Effects of Thermal Radiation and Variable Porosity on Unsteady Magnetoconvective Heat-mass Transport Past a Vertical Perforated Sheet", meta: "Journal of Engineering, Vol. 2024, Article ID 8866265, 13 pages" },
  { title: "Effect of Prandtl Number on Deissler's Decay Law of MHD Turbulence at Four-point Correlations", meta: "Asian Research Journal of Mathematics, 19(12), pp. 32–48" },
  { title: "Effects of Heat Generation and Chemical Reaction on Time-dependent MHD Natural Convective Transport Past a Vertical Perforated Sheet", meta: "Journal of Engineering Science, 14(2), pp. 137–144" },
  { title: "Water Wave Solutions Using Lagrangian Function from Hamilton's Principle", meta: "Journal of Advances in Mathematics and Computer Science, 38(12), pp. 12–19" },
  { title: "First Order Reactant of Dusty Fluid MHD Turbulence Prior to the Ultimate Phase of Decay for Four-Point Correlation in a Rotating System", meta: "Global Journal of Science Frontier Research: F, 18(1), pp. 85–98" },
  { title: "Temperature Fluctuations in Dusty Fluid Homogeneous Turbulence at Four Point Correlations", meta: "American Journal of Applied Mathematics, 5(5), pp. 132–144" },
  { title: "Temperature Fluctuations in Homogeneous Turbulence at Four Point Correlations with Variable Prandtl Number", meta: "IOSR Journal of Mathematics, 13(2), pp. 93–104" },
  { title: "Effect of First Order Chemical Reaction for Coriolis Force and Dust Particles for Small Reynolds Number in the Atmosphere Over Territory", meta: "Research Journal of Mathematics and Statistics, 16(1), pp. 39–50" },
  { title: "Numerical Representation of MHD Turbulence Prior to the Ultimate Phase of Decay", meta: "IOSR Journal of Mathematics, 5(2), pp. 32–38" },
  { title: "Statistical Theory for Three-Point Distribution Functions of Certain Variables in MHD Turbulent Flow in Existence of Coriolis Force in a First Order Reaction", meta: "International Journal of Engineering Research & Technology, 15(2), pp. 55–90" },
  { title: "Statistical Theory of Three-Point Distribution Functions in MHD Turbulent Flow for Velocity, Magnetic Temperature and Concentration in a Rotating System in Presence of Dust Particles", meta: "International Journal of Scholarly Research Gate, 3(3), pp. 91–142" },
  { title: "Decay of Energy of MHD Turbulence before the Final Period for Four-point Correlation in a Rotating System Undergoing a First Order Chemical Reaction", meta: "International Journal of Scholarly Research Gate, 3(4), pp. 143–160" },
  { title: "4-Point Correlations of Dusty Fluid MHD Turbulent Flow in a 1st Order Chemical Reaction", meta: "Global Journal of Science Frontier Research: F, 15(2), pp. 53–69" },
  { title: "3-Point Distribution Functions in the Statistical Theory in MHD Turbulent Flow for Velocity, Magnetic Temperature and Concentration Undergoing a First Order Reaction", meta: "Global Journal of Science Frontier Research: A, 15(2), pp. 13–45" },
  { title: "Effect of Chemical Reaction on Statistical Theory of Dusty Fluid MHD Turbulent Flow for Certain Variables at Three-Point Distribution Functions", meta: "Science Journal of Applied Mathematics and Statistics, 3(3), pp. 75–98" },
  { title: "Effects of First-order Reactant on MHD Turbulence at Four-point Correlation", meta: "Applied and Computational Mathematics, 4(1), pp. 11–19" },
  { title: "Transport Equation for the Joint Distribution Functions of Certain Variables in Convective Dusty Fluid Turbulent Flow in a Rotating System Undergoing a First Order Reaction", meta: "American Journal of Applied Mathematics, 3(1), pp. 21–30" },
  { title: "First-order Reactant of Homogeneous Dusty Fluid Turbulence Prior to the Final Period of Decay in a Rotating System for the Case of Multi-point and Multi-time at Four-point Correlation", meta: "Pure and Applied Mathematics Journal, 3(4), pp. 78–86" },
  { title: "Homogeneous Fluid Turbulence before the Final Period of Decay for Four Point Correlation in a Rotating System for First-order Reactant", meta: "American Journal of Theoretical and Applied Statistics, 3(4), pp. 81–89" },
  { title: "Decay of Dusty Fluid MHD Turbulence for Four-point Correlation in a Rotating System", meta: "Journal of Scientific Research, 5(1), pp. 77–90" },
  { title: "Decay of MHD Turbulence before the Final Period for Four-point Correlation in a Rotating System", meta: "Research Journal of Applied Sciences, Engineering and Technology, 6(15), pp. 2789–2798" },
  { title: "Homogeneous Turbulence in a First-order Reactant for the Case of Multi-point and Multi-time Prior to the Final Period of Decay in a Rotating System", meta: "Research Journal of Applied Sciences, Engineering and Technology, 6(10), pp. 1749–1756" },
  { title: "Decay of MHD Turbulence Prior to the Ultimate Phase in Presence of Dust Particle for Four-point Correlation", meta: "International Journal of Applied Mathematics and Mechanics, 9(10), pp. 34–57" },
  { title: "First-Order Reactant in Homogeneous Turbulence Prior to the Ultimate Phase of Decay for Four-Point Correlation in Presence of Dust Particle", meta: "Research Journal of Applied Sciences, Engineering and Technology, 5(2), pp. 585–595" },
  { title: "Decay of Energy of MHD Turbulence for Four-Point Correlation", meta: "International Journal of Engineering Research & Technology, 1(9), pp. 1–13" },
  { title: "First-order Reactant in Homogeneous Dusty Fluid Turbulence Prior to the Ultimate Phase of Decay for Four-Point Correlation in a Rotating System", meta: "Research Journal of Mathematics and Statistics, 4(2), pp. 30–38" },
  { title: "First-order Reactant in Homogeneous Dusty Fluid Turbulence Prior to the Ultimate Phase of Decay for Four-Point Correlation in a Rotating System (II)", meta: "Research Journal of Mathematics and Statistics, 4(2), pp. 30–38" }
];

/* =========================================================
   RENDER + SEARCH PUBLICATIONS
========================================================= */
const pubList = document.getElementById('pubList');
const pubSearch = document.getElementById('pubSearch');
const pubCount = document.getElementById('pubCount');

function renderPublications(filter = '') {
  const q = filter.trim().toLowerCase();
  const filtered = PUBLICATIONS
    .map((p, i) => ({ ...p, num: i + 1 }))
    .filter(p => !q || p.title.toLowerCase().includes(q) || p.meta.toLowerCase().includes(q));

  pubCount.textContent = `${filtered.length} / ${PUBLICATIONS.length}`;

  if (filtered.length === 0) {
    pubList.innerHTML = `<li class="pub-empty">No publications match “${filter}”. Try another keyword.</li>`;
    return;
  }

  pubList.innerHTML = filtered.map(p => `
    <li class="pub-item">
      <span class="pub-item__num">${String(p.num).padStart(2, '0')}</span>
      <div>
        <p class="pub-item__title">${
          p.link
            ? `<a href="${p.link}" target="_blank" rel="noopener noreferrer">${p.title}</a>`
            : p.title
        }</p>
        <p class="pub-item__meta">${p.meta}</p>
      </div>
    </li>
  `).join('');
}

renderPublications();
pubSearch?.addEventListener('input', (e) => renderPublications(e.target.value));

/* =========================================================
   NAV BACKGROUND ON SCROLL (subtle)
========================================================= */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) nav.style.borderBottomColor = 'rgba(255,255,255,0.24)';
  else nav.style.borderBottomColor = 'rgba(255,255,255,0.14)';
});
