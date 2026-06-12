(function () {
  'use strict';

  /* ===== 1. Dynamic Article Date — 2 days before today ===== */
  function setArticleDate() {
    var el = document.getElementById('article-date');
    if (!el) return;

    var now = new Date();
    now.setDate(now.getDate() - 2);

    var months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    var day = now.getDate();
    var month = months[now.getMonth()];
    var year = now.getFullYear();

    function ordinal(n) {
      var s = ['th', 'st', 'nd', 'rd'];
      var v = n % 100;
      return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    el.textContent = 'Date: ' + month + ' ' + ordinal(day) + ', ' + year;
  }

  /* ===== 2. Floating Bottom CTA — show after scrolling 30% ===== */
  function initFloatingCta() {
    var cta = document.getElementById('floating-cta');
    if (!cta) return;

    function onScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

      if (scrollPercent >= 0.3) {
        cta.classList.add('visible');
      } else {
        cta.classList.remove('visible');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ===== Init ===== */
  setArticleDate();
  initFloatingCta();
})();
