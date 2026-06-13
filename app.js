alert("app.js loaded");

document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("generateBtn");

    if (!btn) {
        alert("generateBtn नहीं मिला");
        return;
    }

    btn.addEventListener("click", () => {
        alert("Button Working");
    });

});
