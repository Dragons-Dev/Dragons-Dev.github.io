const ORG_NAME = "Dragons-Dev";

const LANGUAGE_COLORS = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  CSharp: "#178600",
  Go: "#00ADD8",
  Rust: "#dea584"
};

const FALLBACK_REPOS = [
  {
    name: "MainBot",
    description: "The Main Bot from the Dragons Discord",
    html_url: "https://github.com/Dragons-Dev/MainBot",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0
  },
  {
    name: "DTheBotDragon",
    description: "Our Multifunctional Bot used on the Dragons discord",
    html_url: "https://github.com/Dragons-Dev/DTheBotDragon",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0
  },
  {
    name: "Music-Bot",
    description: "A music bot for discord, it's written in python using the py-cord package and pomice",
    html_url: "https://github.com/Dragons-Dev/Music-Bot",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0
  },
  {
    name: "TheDragonsWebV0.3",
    description: "Frontend for DragonsWebV3Backend",
    html_url: "https://github.com/Dragons-Dev/TheDragonsWebV0.3",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0
  },
  {
    name: "DragonsWebV3Backend",
    description: "Backend for TheDragonsWebV0.3",
    html_url: "https://github.com/Dragons-Dev/DragonsWebV3Backend",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0
  },
  {
    name: "redirect-service",
    description: "A little redirect service we built with a CRUD interface",
    html_url: "https://github.com/Dragons-Dev/redirect-service",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0
  },
  {
    name: "Dragons-BotV2",
    description: "Next generation Discord bot project for the Dragons server",
    html_url: "https://github.com/Dragons-Dev/Dragons-BotV2",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0
  },
  {
    name: "FS25-Api",
    description: "API service integration for Farming Simulator 25",
    html_url: "https://github.com/Dragons-Dev/FS25-Api",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0
  }
];

const I18N = {
  de: {
    "nav.about": "Über uns",
    "nav.projects": "Projekte",
    "nav.contact": "Kontakt",
    "hero.badge": "Hobby-Organisation · Germany",
    "hero.subtitle":
      "Wir sind eine reine Hobby-Organisation auf GitHub. Hier bündeln wir unsere Discord-Bots, Web-Services, APIs und kleinen Experimente rund um unseren Dragons Discord-Server an einem zentralen Ort.",
    "hero.ctaPrimary": "Auf GitHub ansehen",
    "hero.ctaSecondary": "Projekte entdecken",
    "stats.repos": "Public Repos",
    "stats.stack": "Haupt-Tech-Stack",
    "stats.founded": "Gegründet",
    "about.tag": "Worum geht's?",
    "about.title": "Aus Spaß am Coden gebaut",
    "about.desc":
      "Kein kommerzielles Produkt, kein Startup – einfach ein gemeinsamer Ort für den Code unserer Discord-Gilde.",
    "about.card1Title": "Discord Bots",
    "about.card1Text":
      "Von unserem multifunktionalen Main-Bot über Musik-Bots (Pycord & Pomice) bis zu spezialisierten Server-Helfern.",
    "about.card2Title": "Web & Microservices",
    "about.card2Text":
      "Kleine Web-Frontends in TypeScript, Python-Backends, Redirect-Services und Game-Server-Integrationen wie unsere FS25-API.",
    "about.card3Title": "Reines Hobbyprojekt",
    "about.card3Text":
      "Wir entwickeln in unserer Freizeit für unsere Community, probieren neue Tools aus und teilen unseren Code offen auf GitHub.",
    "projects.tag": "Repositories",
    "projects.title": "Unsere Projekte auf GitHub",
    "projects.desc":
      "Direkt über die GitHub-API geladen – immer aktuell mit unseren öffentlichen Repositories.",
    "projects.noDesc": "Hobby-Projekt der Dragons Dev Community.",
    "contact.title": "Fragen oder Lust reinzuschauen?",
    "contact.text":
      "Da wir eine reine Hobby-Organisation sind, findest du alle Aktivitäten, Issues und Quellcodes direkt auf unserer GitHub-Seite oder erreichst uns per E-Mail."
  },
  en: {
    "nav.about": "About",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "hero.badge": "Hobby Organization · Germany",
    "hero.subtitle":
      "We are a pure hobby organization on GitHub, keeping all code, Discord bots, web tools, and small experiments belonging to the Dragons Discord guild in one place.",
    "hero.ctaPrimary": "View on GitHub",
    "hero.ctaSecondary": "Explore Projects",
    "stats.repos": "Public Repos",
    "stats.stack": "Main Tech Stack",
    "stats.founded": "Founded",
    "about.tag": "What We Do",
    "about.title": "Built for the Fun of Coding",
    "about.desc":
      "No commercial product, no startup — just a shared home for our Discord guild's code and side projects.",
    "about.card1Title": "Discord Bots",
    "about.card1Text":
      "From our multifunctional MainBot and Music-Bot (Pycord & Pomice) to specialized utilities for our Discord community.",
    "about.card2Title": "Web & Microservices",
    "about.card2Text":
      "Lightweight TypeScript frontends, Python backends, redirect services, and game server tools like our FS25-Api.",
    "about.card3Title": "Pure Hobby Project",
    "about.card3Text":
      "We build in our free time for our community, experiment with new ideas, and share our repositories openly on GitHub.",
    "projects.tag": "Repositories",
    "projects.title": "Our Projects on GitHub",
    "projects.desc":
      "Fetched live via the GitHub API — always up to date with our public repositories.",
    "projects.noDesc": "Community hobby project by Dragons Dev.",
    "contact.title": "Want to check out our code?",
    "contact.text":
      "Since we are a hobby organization, you can find all activity, source code, and repositories directly on our GitHub profile or reach out via email."
  }
};

let currentLang = "de";
let currentRepos = FALLBACK_REPOS;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderRepos(repos) {
  const grid = document.getElementById("repo-grid");
  if (!grid) return;

  const fallbackDesc = I18N[currentLang]["projects.noDesc"];

  grid.innerHTML = repos
    .map((repo) => {
      const lang = repo.language || "Code";
      const color = LANGUAGE_COLORS[lang] || "#9ba3b5";
      const desc = repo.description ? escapeHtml(repo.description) : escapeHtml(fallbackDesc);

      return `
        <a
          href="${escapeHtml(repo.html_url)}"
          target="_blank"
          rel="noopener noreferrer"
          class="repo-card"
        >
          <div class="repo-top">
            <div class="repo-header">
              <span class="repo-name">
                📦 ${escapeHtml(repo.name)}
              </span>
              <span class="repo-arrow" aria-hidden="true">↗</span>
            </div>
            <p class="repo-desc">${desc}</p>
          </div>
          <div class="repo-meta">
            <span class="lang-indicator">
              <span class="lang-dot" style="background-color: ${color}"></span>
              ${escapeHtml(lang)}
            </span>
            ${repo.stargazers_count > 0 ? `<span>★ ${repo.stargazers_count}</span>` : ""}
            ${repo.forks_count > 0 ? `<span>⑂ ${repo.forks_count}</span>` : ""}
          </div>
        </a>
      `;
    })
    .join("");
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;

  const dict = I18N[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.textContent = lang === "de" ? "EN" : "DE";
  }

  renderRepos(currentRepos);
}

async function fetchGitHubData() {
  try {
    const response = await fetch(
      `https://api.github.com/orgs/${ORG_NAME}/repos?sort=updated&per_page=20`
    );
    if (!response.ok) return;

    const repos = await response.json();
    if (!Array.isArray(repos) || repos.length === 0) return;

    const statRepos = document.getElementById("stat-repos");
    if (statRepos) {
      statRepos.textContent = String(repos.length);
    }

    const filtered = repos.filter(
      (r) => !r.archived && r.name.toLowerCase() !== "dragons-dev.github.io"
    );

    if (filtered.length > 0) {
      currentRepos = filtered;
      renderRepos(currentRepos);
    }
  } catch {
    // Fallback data is already rendered
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  const langBtn = document.getElementById("lang-toggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      setLanguage(currentLang === "de" ? "en" : "de");
    });
  }

  renderRepos(currentRepos);
  fetchGitHubData();
});
