(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var diagram = document.querySelector('.method__diagram');
    if (!diagram) return;

    var hub = diagram.querySelector('.method__hub');
    var stepEl = diagram.querySelector('.method__hub-step');
    var detailEl = diagram.querySelector('.method__hub-detail-text');
    var hits = Array.prototype.slice.call(diagram.querySelectorAll('.method__node-hit'));
    if (!hub || !stepEl || !detailEl || hits.length === 0) return;

    function activate(hit) {
      var label = hit.querySelector('.method__node-label');
      stepEl.textContent = label ? label.textContent : '';
      detailEl.textContent = hit.dataset.detail || '';
      hub.classList.add('method__hub--detail');
    }

    function deactivate() {
      hub.classList.remove('method__hub--detail');
    }

    hits.forEach(function (hit) {
      hit.addEventListener('mouseenter', function () { activate(hit); });
      hit.addEventListener('mouseleave', deactivate);
      hit.addEventListener('focus', function () { activate(hit); });
      hit.addEventListener('blur', deactivate);
    });
  });
})();
