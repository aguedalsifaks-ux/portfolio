(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var gallery = document.querySelector('.creatives__gallery');
    var lightbox = document.getElementById('lightbox');
    if (!gallery || !lightbox) return;

    function ratioOf(item) {
      var img = item.querySelector('img');
      var w = parseFloat(img.getAttribute('width')) || 1;
      var h = parseFloat(img.getAttribute('height')) || 1;
      return h / w;
    }

    var items = Array.prototype.slice.call(gallery.querySelectorAll('.creatives__item'));

    // Traiter les créatives les plus hautes en premier (bin-packing classique) :
    // ça répartit les grands formats sur des colonnes différentes avant de
    // combler avec les plus petits, pour des colonnes visuellement équilibrées.
    var sortedItems = items.slice().sort(function (a, b) {
      return ratioOf(b) - ratioOf(a);
    });

    function columnCountForViewport() {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 640) return 2;
      return 1;
    }

    function layoutMasonry() {
      var columnCount = columnCountForViewport();
      gallery.innerHTML = '';

      var columns = [];
      var heights = [];
      for (var c = 0; c < columnCount; c++) {
        var column = document.createElement('div');
        column.className = 'creatives__column';
        gallery.appendChild(column);
        columns.push(column);
        heights.push(0);
      }

      sortedItems.forEach(function (item) {
        var shortest = 0;
        for (var c = 1; c < heights.length; c++) {
          if (heights[c] < heights[shortest]) shortest = c;
        }
        columns[shortest].appendChild(item);
        heights[shortest] += ratioOf(item);
      });
    }

    layoutMasonry();

    var resizeTimer;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(layoutMasonry, 150);
    });

    var lightboxImage = document.getElementById('lightbox-image');
    var closeButton = lightbox.querySelector('.lightbox__close');
    var lastTrigger = null;

    function openLightbox(trigger) {
      var img = trigger.querySelector('img');
      if (!img) return;
      lightboxImage.src = img.src;
      lightboxImage.alt = img.alt;
      lastTrigger = trigger;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      closeButton.focus();
      document.addEventListener('keydown', onKeydown);
    }

    function closeLightbox() {
      lightbox.hidden = true;
      lightboxImage.src = '';
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKeydown);
      if (lastTrigger) {
        lastTrigger.focus();
        lastTrigger = null;
      }
    }

    function onKeydown(event) {
      if (event.key === 'Escape') {
        closeLightbox();
      }
    }

    gallery.addEventListener('click', function (event) {
      var trigger = event.target.closest('.creatives__item');
      if (trigger) {
        openLightbox(trigger);
      }
    });

    closeButton.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', function (event) {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  });
})();
