(function () {
  'use strict';

  /*
    Portfolio one-page — révélation des sections au défilement.
    Chaque <section> directe de <main> porte des éléments .reveal, masqués tant
    que la section n'est pas entrée dans le viewport (voir utilities.css). Ici :
      - les sections déjà visibles au chargement sont révélées immédiatement
        (synchrone, sans attendre le premier callback de l'observer) — le haut de
        page ne peut donc jamais rester masqué ;
      - les sections situées plus bas sont observées et révélées quand elles
        entrent dans le viewport (IntersectionObserver), une seule fois.
    Le défilement fluide des ancres est natif (scroll-behavior dans reset.css).
  */

  document.addEventListener('DOMContentLoaded', function () {
    var sections = document.querySelectorAll('main > section');
    if (!sections.length) return;

    function reveal(section) {
      section.classList.add('is-inview');
    }

    var hasObserver = 'IntersectionObserver' in window;
    var observer = hasObserver
      ? new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              reveal(entry.target);
              observer.unobserve(entry.target);
            }
          });
        }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0 })
      : null;

    var viewportH = window.innerHeight || document.documentElement.clientHeight;

    Array.prototype.forEach.call(sections, function (section) {
      var rect = section.getBoundingClientRect();
      var alreadyVisible = rect.top < viewportH && rect.bottom > 0;
      if (alreadyVisible || !observer) {
        reveal(section);
      } else {
        observer.observe(section);
      }
    });
  });
})();
