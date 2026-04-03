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
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
    nav.classList.toggle("open");
  });
}

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
      { threshold: 0.5, rootMargin: "0px 0px -15% 0px" },
    );
    cardEls.forEach((card) => cardObserver.observe(card));
  } else {
    cardEls.forEach((card) => card.classList.add("visible"));
  }
}
