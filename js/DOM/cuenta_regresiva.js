const d = document;

export default function countdown(id, limitTime, finalMessage) {
    const $countdown = d.getElementById(id),
    countdownDate = new Date(limitTime).getTime();

    let countdownTempo = setInterval(() => {
        let now = new Date().getTime(),
        limitTime = countdownDate - now,
        days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
        horas = Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutos = Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60)),
        segundos = Math.floor((limitTime % (1000 * 60)) / 1000);

        $countdown.innerHTML = `<h3>Faltan ${days} dias, ${horas} horas, ${minutos} minutos y ${segundos} segundos</h3>`;

        //console.log(limitTime);

        if (limitTime < 0) {
            clearInterval(countdownTempo);
            $countdown.innerHTML = `<h3>${finalMessage}</h3>`;
        }
    }, 1000);
}
