(function () {
  'use strict';

  /*
    Page 4 — Carrousels. Navigation par flèches de la bande de slides.
    La bande (.carousel-card__strip) reste un conteneur de défilement (sa barre
    est masquée en CSS) : les flèches déplacent scrollLeft d'un arrêt à l'autre,
    en défilement fluide, et le swipe tactile natif continue de fonctionner.
    Les flèches sont désactivées aux extrémités (premier / dernier arrêt).
    Chaque carte reste cliquable pour ouvrir le PDF ; les flèches interceptent
    leur propre clic (stopPropagation) et ne déclenchent donc pas le lien.

    « Arrêts » : la bande montre plusieurs slides à la fois, et sa dernière
    position utile est le bout du défilement (pas forcément un début de slide).
    On calcule donc la liste des positions de repos — une par pas de slide,
    plus la fin — pour que « précédent » et « suivant » soient symétriques.
  */

  document.addEventListener('DOMContentLoaded', function () {
    var viewports = document.querySelectorAll('.carousel-card__viewport');

    Array.prototype.forEach.call(viewports, function (viewport) {
      var strip = viewport.querySelector('.carousel-card__strip');
      var prev = viewport.querySelector('.carousel-card__nav--prev');
      var next = viewport.querySelector('.carousel-card__nav--next');
      if (!strip || !prev || !next) return;

      // Distance entre deux slides consécutives (gère les paliers de largeur
      // sans valeur codée en dur).
      function slideStep() {
        var slides = strip.querySelectorAll('.carousel-card__slide');
        if (slides.length < 2) return strip.clientWidth;
        return slides[1].offsetLeft - slides[0].offsetLeft;
      }

      // Positions de repos : la 1re slide repose à scrollLeft = padding gauche
      // (le scroll-snap aligne la slide, pas le bord du padding), puis un arrêt
      // par pas de slide, et enfin le bout du défilement.
      function stops() {
        var padLeft = parseFloat(window.getComputedStyle(strip).paddingLeft) || 0;
        var maxScroll = strip.scrollWidth - strip.clientWidth;
        var step = slideStep();
        var list = [];
        var pos = padLeft;
        while (pos < maxScroll - 1) {
          list.push(pos);
          pos += step;
        }
        if (list.length === 0 || maxScroll - list[list.length - 1] > 1) {
          list.push(maxScroll);
        }
        return list;
      }

      function currentIndex(list) {
        var best = 0;
        var bestDist = Infinity;
        for (var i = 0; i < list.length; i++) {
          var d = Math.abs(strip.scrollLeft - list[i]);
          if (d < bestDist) { bestDist = d; best = i; }
        }
        return best;
      }

      function updateArrows() {
        var list = stops();
        var i = currentIndex(list);
        prev.disabled = i <= 0;
        next.disabled = i >= list.length - 1;
      }

      function move(direction) {
        var list = stops();
        var target = currentIndex(list) + direction;
        target = Math.max(0, Math.min(target, list.length - 1));
        strip.scrollTo({ left: list[target], behavior: 'smooth' });
      }

      prev.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        move(-1);
      });

      next.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        move(1);
      });

      // Le swipe tactile natif (comme les flèches) met à jour l'état désactivé.
      strip.addEventListener('scroll', function () {
        window.requestAnimationFrame(updateArrows);
      });
      window.addEventListener('resize', updateArrows);

      updateArrows();
    });
  });
})();
