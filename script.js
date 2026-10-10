const cards = [
  {
    number: "01",
    title: "Fabric Integrity",
    subtitle: "",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Textile fabric inspection in a garment production setting",
    badge: "shield",
    challenge: "White/delicate garment stains & crumpling.",
    fix: "Touchless Material Movement Systems that eliminate physical handling damage."
  },
  {
    number: "02",
    title: "Needle-Time Maximisation",
    subtitle: "",
    image: "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Industrial sewing machine in operation",
    badge: "clock",
    challenge: "Very low value-add sewing time.",
    fix: "Automatic piece delivery directly to operators to eliminate manual handling."
  },
  {
    number: "03",
    title: "Lean Cost Control",
    subtitle: "",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Production team reviewing process and performance data",
    badge: "chart",
    challenge: "High production costs & low efficiency.",
    fix: "TOC buffer control and digital tracking to wipe out floor waste."
  },
  {
    number: "04",
    title: "Global Compliance",
    subtitle: "",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Apparel and textile products ready for quality checks",
    badge: "globe",
    challenge: "Difficulty securing high-value orders.",
    fix: "Paperless Digitisation that creates instant audit trails for premium brands."
  },
  {
    number: "05",
    title: "Quality Standardisation",
    subtitle: "",
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Garment quality checking and production",
    badge: "shield",
    challenge: "Inconsistent operator quality.",
    fix: "Digital workstation SOPs paired with mechanically paced workflows."
  },
  {
    number: "06",
    title: "Autonomous Engineering",
    subtitle: "",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=85",
    imageAlt: "Engineer monitoring production information on a computer",
    badge: "gear",
    challenge: "Severe shortage of skilled EEs & operators.",
    fix: "Smart systems that automate routing and balancing logic out-of-the-box."
  }
];

const icons = {
  shield: '<path d="M12 2.5 20 5.7v5.8c0 5-3.4 8.5-8 10.2-4.6-1.7-8-5.2-8-10.2V5.7L12 2.5Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/>',
  clock: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2"/><path d="M9 2h6M12 2v3M19 5l1.5-1.5"/>',
  chart: '<path d="M4 20V11M10 20V7M16 20v-5M22 20H2"/><path d="m3 7 5-3 4 3 7-5"/><path d="M17 2h2v2"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18M5 6h14M5 18h14"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="m19.4 15 .1.1 1.4 1.1-1.4 2.4-1.7-.6a8 8 0 0 1-1.7 1l-.3 1.8h-2.8l-.3-1.8a8 8 0 0 1-1.7-1l-1.7.6-1.4-2.4 1.4-1.1a7 7 0 0 1 0-2l-1.4-1.1 1.4-2.4 1.7.6a8 8 0 0 1 1.7-1l.3-1.8h2.8l.3 1.8a8 8 0 0 1 1.7 1l1.7-.6 1.4 2.4-1.4 1.1a7 7 0 0 1 0 2Z"/>'
};

const warningIcon = '<path d="M12 3 22 21H2L12 3Z"/><path d="M12 9v5M12 17h.01"/>';
const bulbIcon = '<path d="M9 18h6M10 21h4"/><path d="M8.2 14.5a7 7 0 1 1 7.6 0c-.9.6-1.3 1.5-1.3 2.5h-5c0-1-.4-1.9-1.3-2.5Z"/><path d="M12 6v4M9.5 8.5h5"/>';

function svgIcon(path) {
  return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${path}</svg>`;
}

const grid = document.getElementById("bottleneckCards");

grid.innerHTML = cards.map(card => `
  <article class="bottleneck-card">
    <div class="card-visual">
      <img src="${card.image}" alt="${card.imageAlt}" loading="lazy"
        onerror="this.style.display='none'; this.parentElement.classList.add('image-fallback');">
      <div class="card-number">${card.number}</div>
      <div class="visual-badge">${svgIcon(icons[card.badge])}</div>
    </div>
    <div class="card-copy">
      <h2>${card.title}</h2>
      <p>${card.subtitle}</p>
    </div>
    <div class="challenge-fix">
      <div class="info-box challenge">
        <div class="info-icon">${svgIcon(warningIcon)}</div>
        <div class="info-content">
          <h3>Challenge:</h3>
          <p>${card.challenge}</p>
        </div>
      </div>
      <div class="flow-arrow" aria-hidden="true">›</div>
      <div class="info-box fix">
        <div class="info-icon">${svgIcon(bulbIcon)}</div>
        <div class="info-content">
          <h3>Fix:</h3>
          <p>${card.fix}</p>
        </div>
      </div>
    </div>
  </article>
`).join("");

/* Give the section a subtle reveal animation when it enters the viewport. */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

document.querySelectorAll(".bottleneck-card").forEach((card, index) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(14px)";
  card.style.transition = `opacity .45s ease ${index * 70}ms, transform .45s ease ${index * 70}ms, box-shadow .25s ease`;
  observer.observe(card);
});

const revealStyle = document.createElement("style");
revealStyle.textContent = `
  .bottleneck-card.is-visible { opacity: 1 !important; transform: translateY(0) !important; }
  .bottleneck-card:hover { transform: translateY(-4px) !important; }
  .card-visual.image-fallback { background: linear-gradient(135deg, #d9e9f5, #829fb8); }
`;
document.head.appendChild(revealStyle);
