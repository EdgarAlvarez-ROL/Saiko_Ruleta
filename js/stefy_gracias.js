let flag = 0;

// Función para mostrar el modal
function showModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';

    if (flag === 0) {
        // Mostrar el modal y cambiar la bandera a 1
        modal.style.display = 'block';
        flag = 1;
    } else {
        // Si la bandera es 1, cambiarla a 0 y asegurarse de que el modal esté oculto
        flag = 0;
        modal.style.display = 'none';
    }

    // Después de 8 segundos, ocultamos el modal
    // setTimeout(() => {
    //     modal.style.display = 'none';
    // }, 8000);
}

// Llama a la función showModal cuando la página haya cargado
// window.onload = showModal;