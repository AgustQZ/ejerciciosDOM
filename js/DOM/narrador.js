const d = document,
    w = window;

export default function speechReader() {
    let $select = d.getElementById("speech-select"),
        $text = d.getElementById("speech-text"),
        $btn = d.getElementById("speech-btn"),
        // variable api para leer
        speechMessage = new SpeechSynthesisUtterance();

    let voices = [];

    d.addEventListener("DOMContentLoaded", (e) => {
        speechSynthesis.addEventListener("voiceschanged", (e) => {
            voices = speechSynthesis.getVoices();
            console.log(voices);

            voices.forEach((element) => {
                let $opcion = d.createElement("option");
                $opcion.value = element.name;
                $opcion.textContent = element.name;
                $select.appendChild($opcion);
            });
        });
    });
    d.addEventListener("change", (e) => {
        if (e.target === $select) {
            speechMessage.voice = voices.find(
                (element) => element.name === e.target.value
            );
        }
    });
    d.addEventListener("click", (e) => {
        if (e.target === $btn) {
            speechMessage.text = $text.value;
            speechSynthesis.speak(speechMessage);
        }
    });
}
