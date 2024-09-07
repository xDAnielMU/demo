document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("nameInput");
    const submitBtn = document.getElementById("submitBtn");
    const responseArea = document.getElementById("response-area");
    const greetingMessage = document.getElementById("greeting-message");
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const resultArea = document.getElementById("result-area");
    const happyIcon = document.getElementById("happy-icon");
    const hangmanIcon = document.getElementById("hangman-icon");

    // Mostrar el botón de enviar si se ingresa texto
    nameInput.addEventListener("input", function() {
        if (nameInput.value.trim() !== "") {
            submitBtn.classList.remove("d-none");
        } else {
            submitBtn.classList.add("d-none");
        }
    });

    // Al enviar el nombre, mostrar la pregunta
    submitBtn.addEventListener("click", function() {
        const name = nameInput.value.trim();
        if (name !== "") {
            greetingMessage.textContent = `Hola ${name}, ¿quieres casarte conmigo?`;
            responseArea.classList.remove("d-none");
            resultArea.classList.add("d-none");  // Ocultar resultado previo
        }
    });

    // Si responde "Sí", mostrar la imagen feliz
    yesBtn.addEventListener("click", function() {
        happyIcon.classList.remove("d-none");
        hangmanIcon.classList.add("d-none");
        resultArea.classList.remove("d-none");
        responseArea.classList.add("d-none");
    });

    // Si responde "No", mostrar la imagen triste
    noBtn.addEventListener("click", function() {
        happyIcon.classList.add("d-none");
        hangmanIcon.classList.remove("d-none");
        resultArea.classList.remove("d-none");
        responseArea.classList.add("d-none");
    });
});
