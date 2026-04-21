let navbartoggle = document.querySelector('.navbar-toggle');
let navbarmenu = document.querySelector('.navbar-menu');

navbartoggle.addEventListener('click', () => {
    navbartoggle.classList.toggle('active');
    navbarmenu.classList.toggle('active');
})

  window.onload = function () {
    window.scrollTo(0, 0);
  };