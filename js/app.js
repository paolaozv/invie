let consulta = window.matchMedia('(max-width: 500px)');
let burguerButton = document.getElementById('burguer-button');
let menu = document.getElementById('menu');
let body = document.body;

consulta.addListener(mediaQuery);

function toggleMenu() {
  menu.classList.toggle('active');
  body.classList.toggle('opened');
};

function showMenu() {
  menu.classList.add('active');
  body.classList.add('opened');
};

function hideMenu() {
  menu.classList.remove('active');
  body.classList.remove('opened');
};

function mediaQuery() {
  if (consulta.matches) {
    burguerButton.addEventListener('touchstart', toggleMenu);
    
  } else {
    burguerButton.removeEventListener('touchstart', toggleMenu);
  }
};

mediaQuery();

var bLazy = new Blazy({
  selector: 'img'
});

let gestos = new Hammer(body);

gestos.on('swipeleft', hideMenu);
gestos.on('swiperight', showMenu);