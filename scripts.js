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

    nameInput.addEventListener("input", function() {
        if (nameInput.value.trim() !== "") {
            submitBtn.classList.remove("d-none");
        } else {
            submitBtn.classList.add("d-none");
        }
    });

    submitBtn.addEventListener("click", function() {
        const name = nameInput.value.trim();
        if (name !== "") {
            greetingMessage.textContent = `Hola ${name}, ¿quieres casarte conmigo?`;
            responseArea.classList.remove("d-none");
            document.getElementById("message-area").classList.add("d-none");
        }
    });

    yesBtn.addEventListener("click", function() {
        happyIcon.classList.remove("d-none");
        resultArea.classList.remove("d-none");
        document.getElementById("response-area").classList.add("d-none");
    });

    noBtn.addEventListener("click", function() {
        hangmanIcon.classList.remove("d-none");
        resultArea.classList.remove("d-none");
        document.getElementById("response-area").classList.add("d-none");
    });
});
