// ===== POPUPS =====
// Any button with data-open="some-id" opens the <dialog id="some-id">.
// If a popup is already open, it closes first (used for links between jobs and projects).
document.addEventListener('click', function (e) {
  var opener = e.target.closest('[data-open]');
  if (opener) {
    var target = document.getElementById(opener.getAttribute('data-open'));
    document.querySelectorAll('dialog[open]').forEach(function (d) { d.close(); });
    if (target) target.showModal();
    return;
  }
  // Any element with data-close closes its popup.
  var closer = e.target.closest('[data-close]');
  if (closer) {
    var dlg = closer.closest('dialog');
    if (dlg) dlg.close();
    return;
  }
  // Clicking the dark area outside a popup closes it.
  if (e.target.tagName === 'DIALOG') e.target.close();
});

// ===== MOBILE MENU =====
var btn = document.getElementById('menuBtn');
var links = document.getElementById('navLinks');
if (btn && links) {
  btn.addEventListener('click', function () {
    var open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  // Close the menu after choosing a link.
  links.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      links.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
  });
}

// Close the mobile menu with Escape, or when the window becomes wide enough to show the full bar.
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && links && links.classList.contains('open')) {
    links.classList.remove('open');
    btn.setAttribute('aria-expanded', 'false');
  }
});
window.addEventListener('resize', function () {
  if (links && window.innerWidth > 820) {
    links.classList.remove('open');
    if (btn) btn.setAttribute('aria-expanded', 'false');
  }
});
