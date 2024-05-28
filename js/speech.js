

var num = 0;
const fraseRec2 = "ACTUALIZAR A DOS";
const fraseRec2_2 = "ACTUALIZAR A 2";
const fraseRec3 = "ACTUALIZAR A TRES";
const fraseRec3_2 = "ACTUALIZAR A 3";
const fraseRec4 = "ACTUALIZAR A CUATRO";
const fraseRec4_2 = "ACTUALIZAR A 4";
const fraseRec5 = "ACTUALIZAR A 5";
const fraseRec5_2 = "ACTUALIZAR A CINCO";
const fraseRec6 = "ACTUALIZAR A SEIS";
const fraseRec6_2 = "ACTUALIZAR A 6";
const fraseRec7 = "ACTUALIZAR A 7";
const fraseRec7_2 = "ACTUALIZAR A SIETE";
const fraseRec8 = "ACTUALIZAR A 8";
const fraseRec8_2 = "ACTUALIZAR A OCHO";

const fraseGirar = "JARVIS GIRALA";


// Comprobar si el navegador soporta la API de reconocimiento de voz
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
if (!SpeechRecognition) {
    alert("Tu navegador no soporta la API de reconocimiento de voz");
} else {
    const recognition = new SpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.continuous = true;
    recognition.interimResults = false; // Solo queremos resultados finales

    // Evento que se activa cuando se recibe una transcripción
    recognition.onresult = (event) => {
        // Obtener el último resultado
        const lastResultIndex = event.results.length - 1;
        const transcript = event.results[lastResultIndex][0].transcript.trim().toUpperCase();
        // Imprimir la transcripción para depuración
        console.log("Transcripción recibida: ", transcript);

        if (transcript === 'JARVIS GÍRALA' || transcript === 'TANIA GÍRALA') {
            console.log("¡Función GIRAR activada!");
            num += 1;
            console.log(num);
            spin();
            setTimeout(() => {
                spin();
            }, 1000);
            setTimeout(() => {
                spin();
            }, 1500);
            setTimeout(() => {
                spin();
            }, 1600);
            setTimeout(() => {
                spin();
            }, 2000);
            setTimeout(() => {
                spin();
            }, 2400);
        // } else if (transcript === 'ACTUALIZAR') {
        //     updateOptions();
        } else if (transcript === 'JARVIS PONELE PLAY') {
            playVideo();
        // NOTA
        // Cambiar por Switch
        } else if (transcript.includes(fraseRec2)) {
            console.log("frase 2");
            document.getElementById("numOptions").value = "2";
            var numOptions = parseInt(document.getElementById("numOptions").value);
            updateOptions();
        } else if (transcript.includes(fraseRec3) || transcript.includes(fraseRec3_2)) {
            console.log("frase 3");
            document.getElementById("numOptions").value = "3";
            updateOptions();
        } else if (transcript.includes(fraseRec4) || transcript.includes(fraseRec4_2)) {
            console.log("frase 4");
            document.getElementById("numOptions").value = "4";
            updateOptions();
        } else if (transcript.includes(fraseRec5) || transcript.includes(fraseRec5_2)) {
            console.log("frase 5");
            document.getElementById("numOptions").value = "5";
            updateOptions();
        } else if (transcript.includes(fraseRec6) || (transcript.includes(fraseRec6_2))) {
            console.log("frase 6");
            document.getElementById("numOptions").value = "6";
            updateOptions();
        } else if (transcript.includes(fraseRec7) || transcript.includes(fraseRec7_2)) {
            console.log("frase 7");
            document.getElementById("numOptions").value = "7";
            updateOptions();
        } else if (transcript.includes(fraseRec8) || transcript.includes(fraseRec8_2)) {
            console.log("frase 8");
            document.getElementById("numOptions").value = "8";
            updateOptions();
        }
    };

    // Manejar errores
    recognition.onerror = (event) => {
        console.error('Error de reconocimiento de voz:', event.error);
    };

    recognition.onend = () => {
        // Reiniciar el reconocimiento de voz al finalizar
        recognition.start();
    };

    // Iniciar el reconocimiento de voz al cargar la página
    recognition.start();
}
