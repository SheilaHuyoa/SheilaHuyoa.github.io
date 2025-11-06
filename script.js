/* 
  Author: Sheila Huyoa
  Date: 2025-11-05
  Purpose: JS for 4.8 upgrades (modal, tooltip handled by CSS, dark mode persistence)
*/

(function () {
  // ===== Footer year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // ===== Dark Mode persistence
  var root = document.documentElement;
  var darkToggle = document.getElementById('darkToggle');

  try {
    var savedTheme = localStorage.getItem('theme'); // "dark" | "light" | null
    if (savedTheme === 'dark' && darkToggle) darkToggle.checked = true;
  } catch (_) {}

  function setTheme(isDark) {
    root.classList.toggle('dark', isDark);
    try {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
    } catch (_) {}
  }

  if (darkToggle) {
    darkToggle.addEventListener('change', function () {
      setTheme(darkToggle.checked);
    });
  }

  // ===== Welcome Modal (replaces prompt)
  var modal = document.getElementById('welcomeModal');
  var closeBtn = document.getElementById('closeModalBtn');

  function openModal() {
    if (!modal) return;
    modal.hidden = false;
    // focus for accessibility
    if (closeBtn) closeBtn.focus();
  }
  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
  }

  // Show modal on first load each visit (session-based)
  // If you want "only once ever" behavior, store a flag in localStorage instead.
  if (modal) openModal();

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  // close on overlay click (only when clicking backdrop)
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) closeModal();
    });
  }
  // close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });

  // ===== (Optional) fake submit handler so button does nothing for now
  var form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Message sent! (demo)');
    });
  }
})();
