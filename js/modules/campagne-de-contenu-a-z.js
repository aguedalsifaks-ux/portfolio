(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var production = document.querySelector('.campaign__production');
    var modal = document.getElementById('publication-modal');
    if (!production || !modal) return;

    var modalImg = document.getElementById('publication-modal-img');
    var modalTitle = document.getElementById('publication-modal-title');
    var modalText = document.getElementById('publication-modal-text');
    var closeButton = modal.querySelector('.lightbox__close');
    // Élément à re-focuser à la fermeture (le bouton « Lire la publication »
    // de la publication ouverte), pour un retour de focus accessible.
    var lastTrigger = null;

    // Ouvre le modal avec le visuel, le titre et le texte complet d'une
    // publication. Le texte provient du conteneur masqué .campaign__pub-full
    // (embarqué dans le HTML depuis le fichier .txt associé) : pas de fetch,
    // donc fonctionne aussi en ouverture directe du fichier (file://).
    function openModal(pub) {
      var img = pub.querySelector('.campaign__pub-img');
      var full = pub.querySelector('.campaign__pub-full');
      if (!img || !full) return;

      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modalTitle.textContent = pub.getAttribute('data-pub-title') || '';
      modalText.innerHTML = full.innerHTML;

      lastTrigger = pub.querySelector('.campaign__pub-read');
      modal.hidden = false;
      document.body.style.overflow = 'hidden';
      closeButton.focus();
      document.addEventListener('keydown', onKeydown);
    }

    function closeModal() {
      modal.hidden = true;
      modalImg.src = '';
      modalText.innerHTML = '';
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeydown);
      if (lastTrigger) {
        lastTrigger.focus();
        lastTrigger = null;
      }
    }

    function onKeydown(event) {
      if (event.key === 'Escape') {
        closeModal();
      }
    }

    // Le bouton « Lire la publication » ou le visuel ouvrent la même publication.
    production.addEventListener('click', function (event) {
      var trigger = event.target.closest('.campaign__pub-read, .campaign__pub-img');
      if (!trigger) return;
      var pub = trigger.closest('.campaign__pub');
      if (pub) openModal(pub);
    });

    closeButton.addEventListener('click', closeModal);

    // Clic sur le fond sombre (hors panneau) = fermeture, comme la lightbox des créatives.
    modal.addEventListener('click', function (event) {
      if (event.target === modal) {
        closeModal();
      }
    });
  });
})();
