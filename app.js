// =========================
// GBSB Literary Audio Studio
// Sprint-2 Audio Engine
// =========================

// Counter System

const content = document.getElementById("content");
const counter = document.getElementById("counter");

content.addEventListener("input", updateCounter);

function updateCounter() {

    const text = content.value;

    const words =
        text.trim() === ""
            ? 0
            : text.trim().split(/\s+/).length;

    const chars = text.length;

    counter.innerHTML =
        `शब्द: ${words} | अक्षर: ${chars}`;
}

// Audio Engine

document
    .getElementById("generateBtn")
    .addEventListener("click", generateAudio);

function generateAudio() {

    const text =
        document.getElementById("content").value;

    if (text.trim() === "") {
        alert("कृपया सामग्री लिखें");
        return;
    }

    // पहले से चल रहा वाचन रोकें
    window.speechSynthesis.cancel();

    const speech =
        new SpeechSynthesisUtterance(text);

    speech.lang = "hi-IN";

    // Voice Style

    const voiceStyle =
        document.getElementById("voiceSelect").value;

    switch (voiceStyle) {

        case "अजय कथावाचक":
            speech.rate = 0.95;
            break;

        case "महिला कथावाचक":
            speech.rate = 1.0;
            break;

        case "युवा पुरुष":
            speech.rate = 1.1;
            break;

        case "समाचार वाचक":
            speech.rate = 0.9;
            break;

        case "आध्यात्मिक वाचक":
            speech.rate = 0.8;
            break;

        default:
            speech.rate = 1;
    }
    const btn = document.getElementById("generateBtn");

btn.addEventListener("click", () => {
    alert("Button Working");
});

    window.speechSynthesis.speak(speech);
}

console.log("App Loaded");
