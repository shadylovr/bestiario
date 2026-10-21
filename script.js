// Listas de imágenes
const listaTops = [
  "assets/img/top1.jpg",
  "assets/img/top2.jpg",
  "assets/img/top3.jpg",// Listas de imágenes
const listaTops = [
  "assets/img/top1.jpg",
  "assets/img/top2.jpg",
  "assets/img/top3.jpg",
];
const listaTorsos = [
  "assets/img/torso1.jpg",
  "assets/img/torso2.jpg",
  "assets/img/torso3.jpg",
];
const listaAbajos = [
  "assets/img/abajo1.jpg",
  "assets/img/abajo2.jpg",
  "assets/img/abajo3.jpg",
];

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const top = document.getElementById("top");
const torso = document.getElementById("torso");
const abajo = document.getElementById("abajo");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let topAleatorio = 0;
let torsoAleatorio = 0;
let abajoAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  topAleatorio = numeroAleatorio(0, listaTops.length);
  torsoAleatorio = numeroAleatorio(0, listaTorsos.length);
  abajoAleatorio = numeroAleatorio(0, listaAbajos.length);

  // Asignamos la nueva fuente (source) a cada imagen
  top.src = `${listaTops[topAleatorio]}`;
  torso.src = `${listaTorsos[torsoAleatorio]}`;
  abajo.src = `${listaAbajos[abajoAleatorio]}`;

  console.log(topAleatorio, torsoAleatorio, abajoAleatorio);
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();
];
const listaTorsos = [
  "assets/img/torso1.jpg",
  "assets/img/torso2.jpg",
  "assets/img/torso3.jpg",
];
const listaAbajos = [
  "assets/img/abajo1.jpg",
  "assets/img/abajo2.jpg",
  "assets/img/abajo3.jpg",
];

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
const top = document.getElementById("top");
const torso = document.getElementById("torso");
const abajo = document.getElementById("abajo");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let topAleatorio = 0;
let torsoAleatorio = 0;
let abajoAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres imágenes elegidas aleatoriamente
function generarBestia() {
  topAleatorio = numeroAleatorio(0, listaTops.length);
  torsoAleatorio = numeroAleatorio(0, listaTorsos.length);
  abajoAleatorio = numeroAleatorio(0, listaAbajos.length);

  // Asignamos la nueva fuente (source) a cada imagen
  top.src = `${listaTops[topAleatorio]}`;
  torso.src = `${listaTorsos[torsoAleatorio]}`;
  abajo.src = `${listaAbajos[abajoAleatorio]}`;

  console.log(topAleatorio, torsoAleatorio, abajoAleatorio);
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();