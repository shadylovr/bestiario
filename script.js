
const listaTops = [
  "assets/top1.jpg",
  "assets/top2.jpg",
  "assets/top3.jpg",
  "assets/top4.jpg",
  "assets/top5.jpg",
];
const listaTorsos = [
  "assets/torsok.jpg",
  "assets/torsopulp.jpg",
  "assets/torsodjango.jpg",
  "assets/torsoi.jpg",
  "assets/torsoh.jpg",
];
const listaAbajos = [
  "assets/abajok.jpg",
  "assets/abajopulp.jpg",
  "assets/abajodjango.jpg",
  "assets/abajoi.jpg",
  "assets/abajoh.jpg",
];
const listaPosters = [
  "assets/posterk.jpg",
  "assets/Pulp Fiction.jpg",
  "assets/Django Unchained poster.jpg",
  "assets/posteri.jpg",
  "assets/posterh.jpg",
];

// Obtenemos los contenedores de las imágenes del HTML usando los IDs
// (no usamos "top" como nombre porque el navegador ya lo tiene reservado)
const imagenTop = document.getElementById("top");
const imagenTorso = document.getElementById("torso");
const imagenAbajo = document.getElementById("abajo");
const imagenPoster = document.getElementById("poster");
const boton = document.getElementById("boton");

// Inicializamos las variables de los números aleatorios
let topAleatorio = 0;
let torsoAleatorio = 0;
let abajoAleatorio = 0;
let posterAleatorio = 0;

// Función para generar un número aleatorio entre dos valores
function numeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// Función para crear una nueva bestia con tres partes y un póster al azar
function generarBestia() {
  topAleatorio = numeroAleatorio(0, listaTops.length);
  torsoAleatorio = numeroAleatorio(0, listaTorsos.length);
  abajoAleatorio = numeroAleatorio(0, listaAbajos.length);
  posterAleatorio = numeroAleatorio(0, listaPosters.length);

  // Asignamos la nueva fuente (source) a cada imagen
  imagenTop.src = listaTops[topAleatorio];
  imagenTorso.src = listaTorsos[torsoAleatorio];
  imagenAbajo.src = listaAbajos[abajoAleatorio];
  imagenPoster.src = listaPosters[posterAleatorio];

  console.log(topAleatorio, torsoAleatorio, abajoAleatorio, posterAleatorio);
}

// Generamos un nuevo collage cada vez que hacemos click en el botón "mezclar"
boton.addEventListener("click", function () {
  generarBestia();
});

generarBestia();
