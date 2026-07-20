document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('navtoggle');
  var links = document.getElementById('navlinks');
  if (btn && links) {
    btn.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }
});
