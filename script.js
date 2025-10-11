// tiny progressive enhancements
(function () {
  // update year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // reveal on scroll
  var observerSupported = 'IntersectionObserver' in window;
  if (!observerSupported) {
    document.querySelectorAll('[data-reveal]').forEach(function (el) {
      el.classList.add('reveal-visible');
    });
    return;
  }

  var observer = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.08 });

  document.querySelectorAll('[data-reveal]').forEach(function (el) {
    observer.observe(el);
  });
})();
