
const content = document.getElementById("content");
const counter = document.getElementById("counter");

content.addEventListener("input", () => {

const text = content.value;

const words =
text.trim() === ""
? 0
: text.trim().split(/\s+/).length;

const chars = text.length;

counter.innerHTML =
`शब्द: ${words} | अक्षर: ${chars}`;

});

document
.getElementById("generateBtn")
.addEventListener("click", () => {

const type =
document.getElementById("literaryType").value;

alert(
`Audio Generation जल्द जोड़ा जाएगा.\n\nसाहित्य प्रकार: ${type}`
);

});
।function generateAudio() {

const text =
document.getElementById("content").value;

if(text.trim()===""){
alert("कृपया सामग्री लिखें");
return;
}

const speech =
new SpeechSynthesisUtterance(text);

speech.lang="hi-IN";

window.speechSynthesis.speak(speech);

}
