/*
  src/js/script.js
  ----------------
  Usage global pour toutes les pages :
  - index.html      : menu mobile + bouton accueil + animation cards (service section)
  - src/pages/service.html : menu mobile + bouton accueil + animation cards
  - src/pages/apropos.html : menu mobile + animation reveal zigzag + animation cards (si présents)
  - src/pages/contact.html : menu mobile + bouton accueil

  > Si vous ajoutez une nouvelle page avec .menu_mob ou .btn, ces comportements sont automatiques.
*/

// Menu mobile (toutes pages qui ont .menu_mob et nav ul)
const btn = document.querySelector(".menu_mob"),
  nav = document.querySelector("nav ul");
if (btn && nav) {
<<<<<<< HEAD
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("open");
  });
}

=======
  const setMenu = (open) => {
    btn.classList.toggle("open", open);
    nav.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", String(open));
    btn.setAttribute("aria-label", open ? "Fermer le menu" : "Ouvrir le menu");
  };
  btn.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      setMenu(false);
      btn.focus();
    }
  });
}

// Suivi des clics WhatsApp / téléphone (Google Analytics)
document.querySelectorAll("[data-track]").forEach((el) => {
  el.addEventListener("click", () => {
    if (typeof gtag === "function") {
      gtag("event", el.dataset.track, { page_path: location.pathname });
    }
  });
});

>>>>>>> master
// Effet hover pour bouton principal (index / service / apropos etc.)
const boutt = document.querySelector(".btn");
if (boutt) {
  boutt.addEventListener("mouseover", () => {
    boutt.classList.add("stop");
  });
  boutt.addEventListener("mouseout", () => {
    boutt.classList.remove("stop");
  });
}

// Animation d'apparition pour sections fleuries sur apropos (et autres pages si .reveal existe)
const revealEls = document.querySelectorAll(".reveal");
if (revealEls.length) {
  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -20% 0px" },
    );
    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    // Fallback pour vieux navigateurs
    revealEls.forEach((el) => el.classList.add("active"));
  }
}

// Animation cards (section services dans index + service.html)
const cardEls = document.querySelectorAll(".card");
if (cardEls.length) {
  if ("IntersectionObserver" in window) {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            cardObserver.unobserve(entry.target);
          }
        });
      },
<<<<<<< HEAD
      { threshold: 0.5, rootMargin: "0px 0px -15% 0px" },
=======
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
>>>>>>> master
    );
    cardEls.forEach((card) => cardObserver.observe(card));
  } else {
    cardEls.forEach((card) => card.classList.add("visible"));
  }
}
<<<<<<< HEAD
=======


// ---------------------------------------------------------------------
// Animations : barre de nav « verre » + parallaxe hero + apparition au scroll
// ---------------------------------------------------------------------
(() => {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const topbar = document.querySelector(".topbar");
  const hero = document.querySelector(".hero");
  let ticking = false;

  const onScroll = () => {
    const y = window.scrollY;
    if (topbar) topbar.classList.toggle("scrolled", y > 24);
    if (hero && !reduce && y < window.innerHeight * 1.2) {
      hero.style.setProperty("--py", Math.round(y * 0.18) + "px");
    }
    ticking = false;
  };
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(onScroll);
      }
    },
    { passive: true },
  );
  onScroll();

  if (reduce || !("IntersectionObserver" in window)) return;

  const selector = [
    "main > section > h2",
    "main .grid > a.card",
    ".why-card",
    ".steps li",
    ".about-text",
    ".section-cta",
    ".cta-box",
    ".contact-form",
    ".contact-info",
    ".intro-text > h3",
    ".intro-text > p",
    ".intro-text > .about-img",
  ].join(",");
  const targets = document.querySelectorAll(selector);
  const groups = new Map();
  targets.forEach((el) => {
    const list = groups.get(el.parentElement) || [];
    list.push(el);
    groups.set(el.parentElement, list);
  });
  groups.forEach((list) =>
    list.forEach((el, i) => el.style.setProperty("--i", Math.min(i % 4, 3))),
  );

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        el.classList.add("in");
        io.unobserve(el);
        // Une fois l'animation terminée, on retire les classes pour ne pas
        // garder le délai d'apparition sur les effets de survol.
        setTimeout(() => el.classList.remove("rv", "in"), 1400);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
  );
  targets.forEach((el) => {
    el.classList.add("rv");
    io.observe(el);
  });
})();


// Formulaire : état « envoi en cours » (après validation du navigateur)
document.querySelectorAll('form[action*="formsubmit"]').forEach((form) => {
  form.addEventListener("submit", () => {
    const btn = form.querySelector(".contact-btn");
    if (!btn) return;
    btn.classList.add("is-loading");
    btn.setAttribute("aria-busy", "true");
    const label = btn.querySelector(".btn-label");
    if (label) label.textContent = "Envoi en cours…";
  });
});
>>>>>>> master
