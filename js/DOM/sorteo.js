const d = document;

export default function draw(btn, selector) {
    // funcion expresada
    const getWinner = (selector) => {
        const $players = d.querySelectorAll(selector),
            random = Math.floor(Math.random() * $players.length),
            winner = $players[random];

        // console.log($players, random, winner);

        return winner.textContent;
    };

    // evento clic con delegacion
    d.addEventListener("click", (e) => {
        if (e.target.matches(btn)) {
            let result = getWinner(selector);
            alert(`El ganador es ${result}`);
            // console.log(result);
        }
    });
}
