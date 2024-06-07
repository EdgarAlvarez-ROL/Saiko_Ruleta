document.addEventListener("DOMContentLoaded", function() {
  // Configuración del carrusel
  const carousel = document.querySelector(".carousel1");
  const images = document.querySelectorAll(".carousel-image");

  let currentIndex = images.length - 1; // Comenzamos desde la última imagen
  const totalImages = images.length;

  // Desactivar la transición temporalmente
  carousel.style.transition = "none";

  // Establecer la posición inicial del carrusel en la última imagen
  carousel.style.transform = `translateX(${-currentIndex * 100}%)`;

  // Permitir que el navegador aplique la transformación antes de restaurar la transición
  setTimeout(() => {
    carousel.style.transition = ""; // Restaurar la transición
  });

  // Función para pasar a la imagen anterior
  function prevImage() {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalImages - 1;
    }
    updateCarousel();
  }

  // Función para actualizar la posición del carrusel
  function updateCarousel() {
    carousel.style.transform = `translateX(${currentIndex * -100}%)`; // Invierte el desplazamiento para ir hacia la derecha
  }

  // Configura el intervalo para cambiar automáticamente las imágenes cada 3 segundos (ajusta según sea necesario)
  setInterval(prevImage, 6000);
});
