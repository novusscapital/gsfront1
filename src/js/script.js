
let imagens = [
    'src/assets/imagemslideshow1.jpg',
    'src/assets/imagemslideshow2.jpg',
    'src/assets/imagemslideshow3.jpg',
    'src/assets/imagemslideshow4.jpg',
];

let i = 0;
let tempo = 5000;

function slideShow() {
  const img = document.getElementById("image");
  if (img) {
    img.src = imagens[i];
    i = (i + 1) % imagens.length;
    setTimeout(slideShow, tempo);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const btnEsq = document.getElementById("esquerda");
  const btnDir = document.getElementById("direita");

  if (btnEsq && btnDir) {
    btnEsq.addEventListener("click", () => {
      i = (i - 1 + imagens.length) % imagens.length;
      document.getElementById("image").src = imagens[i];
    });

    btnDir.addEventListener("click", () => {
      i = (i + 1) % imagens.length;
      document.getElementById("image").src = imagens[i];
    });
  }

  if (document.getElementById("image")) {
    slideShow();
  }
});

  document.addEventListener('DOMContentLoaded', function() {
  const hamburguer = document.querySelector('.hamburguer');
  const navMenu = document.querySelector('nav ul');

  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburguer.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });

  hamburguer.addEventListener('click', function() {
    this.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
});

  document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const menuLinks = document.querySelectorAll('nav ul li a');
  
  menuLinks.forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    
    if (linkPage === currentPage) {
      link.classList.add('current-page');
    }
  });
});