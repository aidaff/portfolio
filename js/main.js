/* =========================================================
   Portfolio — interaksi & rendering
   Tanpa dependency. Semua konten berasal dari js/data.js.
   ========================================================= */

(function () {
  "use strict";

  var STORAGE_KEY = "portfolio-lang";
  var DEFAULT_LANG = "id";
  var lang = DEFAULT_LANG;

  var root = document.documentElement;
  var header = document.getElementById("site-header");
  var menuToggle = document.getElementById("menu-toggle");

  /* ---------- Utilitas ---------- */

  function t(key) {
    var dict = translations[lang] || translations[DEFAULT_LANG];
    if (dict && dict[key] != null) return dict[key];
    var fallback = translations[DEFAULT_LANG];
    return fallback && fallback[key] != null ? fallback[key] : "";
  }

  function pick(value) {
    if (value && typeof value === "object") {
      return value[lang] || value[DEFAULT_LANG] || "";
    }
    return value == null ? "" : String(value);
  }

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text != null) node.textContent = text;
    return node;
  }

  /* ---------- Terjemahan teks statis ---------- */

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(function (node) {
      var value = t(node.getAttribute("data-i18n"));
      if (value) node.textContent = value;
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach(function (node) {
      var value = t(node.getAttribute("data-i18n-aria-label"));
      if (value) node.setAttribute("aria-label", value);
    });

    root.lang = lang;
    document.querySelectorAll("[data-lang]").forEach(function (button) {
      button.setAttribute("aria-pressed", String(button.getAttribute("data-lang") === lang));
    });
  }

  /* ---------- Render: proyek ---------- */

  function renderProjects() {
    var grid = document.getElementById("projects-grid");
    if (!grid) return;

    var fragment = document.createDocumentFragment();

    portfolioData.projects.forEach(function (project, index) {
      var card = el("article", "project-card reveal");
      card.style.setProperty("--i", index);

      var top = el("div", "project-top");
      top.appendChild(el("span", "project-num mono", project.num));
      top.appendChild(el("span", "project-year mono", project.year));
      card.appendChild(top);

      card.appendChild(el("h3", "project-title", project.title));
      card.appendChild(el("p", "project-desc", pick(project.desc)));

      var tags = el("ul", "tags");
      project.tags.forEach(function (tag) {
        tags.appendChild(el("li", "tag mono", tag));
      });
      card.appendChild(tags);

      var link = el("a", "project-link mono");
      link.href = project.link || "#";
      link.setAttribute("aria-label", t("project.view") + ": " + project.title);
      link.appendChild(document.createTextNode(t("project.view")));
      link.appendChild(el("span", "arrow", " ↗"));
      card.appendChild(link);

      fragment.appendChild(card);
    });

    grid.replaceChildren(fragment);
  }

  /* ---------- Render: keahlian ---------- */

  function renderSkills() {
    var grid = document.getElementById("skills-grid");
    if (!grid) return;

    var fragment = document.createDocumentFragment();

    portfolioData.skills.forEach(function (group) {
      var wrapper = el("div", "skill-group reveal");
      wrapper.appendChild(el("h3", "skill-title", pick(group.title)));

      var list = el("ul", "skill-list");
      group.items.forEach(function (item) {
        list.appendChild(el("li", "skill-item", item));
      });

      wrapper.appendChild(list);
      fragment.appendChild(wrapper);
    });

    grid.replaceChildren(fragment);
  }

  /* ---------- Render: pengalaman ---------- */

  function renderExperience() {
    var timeline = document.getElementById("timeline");
    if (!timeline) return;

    var fragment = document.createDocumentFragment();

    portfolioData.experience.forEach(function (item) {
      var entry = el("li", "timeline-item reveal");

      entry.appendChild(el("span", "timeline-period mono", pick(item.period)));

      var body = el("div", "timeline-body");
      var heading = el("h3", "timeline-role", pick(item.role));
      heading.appendChild(el("span", "timeline-org", " · " + pick(item.org)));
      body.appendChild(heading);
      body.appendChild(el("p", "timeline-desc", pick(item.desc)));

      entry.appendChild(body);
      fragment.appendChild(entry);
    });

    timeline.replaceChildren(fragment);
  }

  /* ---------- Render: sosial ---------- */

  function renderSocials() {
    var container = document.getElementById("socials");
    if (!container) return;

    var fragment = document.createDocumentFragment();

    portfolioData.socials.forEach(function (social) {
      var link = el("a", "social-link");
      link.href = social.href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.appendChild(el("span", "social-label", social.label));
      link.appendChild(el("span", "social-handle mono", social.handle));
      fragment.appendChild(link);
    });

    container.replaceChildren(fragment);
  }

  function renderAll() {
    renderProjects();
    renderSkills();
    renderExperience();
    renderSocials();
    observeReveals();
  }

  /* ---------- Animasi masuk ---------- */

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var observer = null;

  if ("IntersectionObserver" in window && !reduceMotion) {
    observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
  }

  function observeReveals() {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach(function (node) {
      if (observer) {
        observer.observe(node);
      } else {
        node.classList.add("is-visible");
      }
    });
  }

  /* ---------- Bahasa ---------- */

  function setLanguage(next, persist) {
    lang = next === "en" ? "en" : "id";

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch (error) {
        /* localStorage bisa diblokir — abaikan. */
      }
    }

    applyTranslations();
    renderAll();
  }

  function initLanguage() {
    var stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch (error) {
      /* abaikan */
    }

    var queryLang = null;
    try {
      queryLang = new URLSearchParams(window.location.search).get("lang");
    } catch (error) {
      /* abaikan */
    }

    /* Urutan prioritas: ?lang=… → pilihan tersimpan → bahasa browser. */
    var initial = null;
    if (queryLang === "id" || queryLang === "en") {
      initial = queryLang;
    } else if (stored === "id" || stored === "en") {
      initial = stored;
    } else {
      initial = (navigator.language || DEFAULT_LANG).toLowerCase().indexOf("id") === 0 ? "id" : "en";
    }

    setLanguage(initial, false);

    document.querySelectorAll("[data-lang]").forEach(function (button) {
      button.addEventListener("click", function () {
        setLanguage(button.getAttribute("data-lang"), true);
      });
    });
  }

  /* ---------- Menu mobile ---------- */

  function setMenu(open) {
    if (!header || !menuToggle) return;
    header.classList.toggle("nav-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
  }

  function initMenu() {
    if (!header || !menuToggle) return;

    menuToggle.addEventListener("click", function () {
      setMenu(!header.classList.contains("nav-open"));
    });

    document.querySelectorAll(".site-nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenu(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && header.classList.contains("nav-open")) {
        setMenu(false);
        menuToggle.focus();
      }
    });

    document.addEventListener("click", function (event) {
      if (!header.classList.contains("nav-open")) return;
      if (!header.contains(event.target)) setMenu(false);
    });
  }

  /* ---------- Tahun ---------- */

  function initYear() {
    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  /* ---------- Mulai ---------- */

  initYear();
  initLanguage();
  initMenu();
})();
