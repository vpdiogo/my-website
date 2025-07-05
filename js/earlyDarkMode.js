(function () {
  try {
    const isDark = localStorage.getItem('dark-mode') === 'true';
    if (isDark) {
      document.documentElement.classList.add('dark-mode');
    }
  } catch (_) {}
})();