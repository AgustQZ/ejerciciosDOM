const d = document,
w = window;

export default function scrollTopButton(b) {
    const $scrollBtn = d.querySelector(b);
    // hacer que el boton se muestre a cierta distancia al desplazarse verticalmente
    w.addEventListener("scroll", (e) => {
        let scrollUp = w.pageYOffset || d.documentElement.scrollTop;

        if (scrollUp > 500 ) {
            $scrollBtn.classList.remove("hidden");
        }else {
            $scrollBtn.classList.add("hidden");
        }
        // mostrar valor de barra de desplazamiento vertical en window y en el documento
        //console.log(w.pageYOffset, d.documentElement.scrollTop);
    });

    // darle funcionabilidad para volver al inicio vertical
    d.addEventListener("click", (e) => {
        if(e.target.matches(b)) {
            w.scrollTo({
                behavior: "smooth",
                top: 0,
                //left: 0
            });
        }
    });
}