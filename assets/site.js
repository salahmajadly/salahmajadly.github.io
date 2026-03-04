/* site.js – progressive-enhancement scripts */
(function () {
  'use strict';

  /* ── Mobile nav toggle ── */
  var toggle = document.querySelector('.nav-toggle');
  var nav    = document.querySelector('.site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    /* Close nav when a link is activated */
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Active TOC highlight on scroll ── */
  var tocLinks = document.querySelectorAll('.toc a[href^="#"]');

  if (tocLinks.length > 0) {
    var sectionIds = Array.from(tocLinks).map(function (a) {
      return a.getAttribute('href').slice(1);
    });

    var sections = sectionIds.map(function (id) {
      return document.getElementById(id);
    }).filter(Boolean);

    function onScroll () {
      var scrollY = window.scrollY + 80; /* offset for sticky nav */
      var current = '';

      sections.forEach(function (section) {
        if (section.offsetTop <= scrollY) {
          current = section.id;
        }
      });

      tocLinks.forEach(function (a) {
        a.classList.toggle('toc-active', a.getAttribute('href') === '#' + current);
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); /* run once on load */
  }
})();
