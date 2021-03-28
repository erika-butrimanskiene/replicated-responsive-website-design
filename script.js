document.getElementById('burger-btn').addEventListener('click', function () {
  document.querySelector('.nav-bar__container').classList.toggle('active');
});

window.onscroll = function () {
  myFunction();
};

let headerBottom = document.getElementById('mainMenu');
let sticky = headerBottom.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    headerBottom.classList.add('fixed-header');
  } else {
    headerBottom.classList.remove('fixed-header');
  }
}
