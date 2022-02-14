const d = document;

export function digitalCLock(reloj, play, stop) {
    d.addEventListener("click", e => {
        if(e.target.matches(play)) {
            setInterval(() => {
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(reloj).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);

            e.target.disabled = true;
        }
    })
    d.addEventListener("click", e => {
        e.target.matches(play)
    })
};

export function alarm() {

}