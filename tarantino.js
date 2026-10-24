document.addEventListener("DOMContentLoaded", () => {
	// 1. Código del botón y galería (funciona sin romperse si estás en otra página)
	const boton = document.querySelector(".tarantino-boton, .concho-boton");
	const photoGallery = document.querySelector("#galeria-fotos");
	const audio = document.querySelector("#tarantino-audio, #dtmf-audio");
	const audioStatus = document.querySelector(".estado-audio");

	if (boton && photoGallery) {
		boton.addEventListener("click", () => {
			photoGallery.hidden = false;
			photoGallery.classList.add("visible");
			boton.setAttribute("aria-expanded", "true");

			if (audio) {
				audio.currentTime = 0;
				audio.play()
					.then(() => {
						if (audioStatus) audioStatus.textContent = "Reproduciendo audio";
					})
					.catch((error) => {
						if (audioStatus) audioStatus.textContent = "No se pudo reproducir el audio.";
						console.error("Error de reproducción:", error);
					});
			}
		});
	}

	// 2. Código de los GIFs (solo se activa en las imágenes que tengan data-gif)
	const imagenesGaleria = document.querySelectorAll("#galeria-fotos img");

	if (imagenesGaleria.length > 0) {
		imagenesGaleria.forEach((img) => {
			// Guardamos la imagen fija original
			const fotoFija = img.getAttribute("src");
			// Buscamos si tiene el atributo data-gif escrito en el HTML
			const rutaGif = img.getAttribute("data-gif");

			// Si NO tiene data-gif en el HTML, lo ignora y no lanza ningún error
			if (!rutaGif) return;

			img.addEventListener("mouseenter", () => {
				img.setAttribute("src", rutaGif);
			});

			img.addEventListener("mouseleave", () => {
				img.setAttribute("src", fotoFija);
			});

			img.addEventListener("click", () => {
				const activo = img.classList.toggle("gif-activo");
				img.setAttribute("src", activo ? rutaGif : fotoFija);
			});
		});
	}
});