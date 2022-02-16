const d = document;
// ****funcion para el relog digital
export function digitalCLock(reloj, play, stop) {
    let clockTempo;

    // evento click
    d.addEventListener("click", e => {
        // iniciar reloj
        if (e.target.matches(play)) {
            clockTempo = setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(reloj).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);
            e.target.disabled = true;
        }
        // detener reloj
        if(e.target.matches(stop)) {
            clearInterval(clockTempo);
            d.querySelector(reloj).innerHTML = null;
            d.querySelector(play).disabled = false;
        }
    })
};

// ****funcion para la alarma
export function alarm(sound, play, stop) {
    let alarmTempo;
    const $alarm = d.createElement("audio");
    $alarm.src = sound;

    // evento click
    d.addEventListener("click", e => {
        if (e.target.matches(play)) {
            alarmTempo = setTimeout(() => {
                $alarm.play();
            }, 100);
            e.target.disabled = true;
        }
        if (e.target.matches(stop)) {
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime = 0;
            d.querySelector(play).disabled = false;
        }
    })
}