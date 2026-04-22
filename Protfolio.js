let navbartoggle = document.querySelector('.navbar-toggle');
let navbarmenu = document.querySelector('.navbar-menu');

navbartoggle.addEventListener('click', () => {
    navbartoggle.classList.toggle('active');
    navbarmenu.classList.toggle('active');
});
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

  window.onload = function () {
    window.scrollTo(0, 0);
  };
   window.onload = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
