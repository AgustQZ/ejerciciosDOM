import scrollTopButton from "./DOM/boton_scroll.js";
import slider from "./DOM/carrousel.js";
import countdown from "./DOM/cuenta_regresiva.js";
import userDevice from "./DOM/deteccion_dispositivo.js";
import networkStatus from "./DOM/deteccion_red.js";
import webcamConnet from "./DOM/deteccion_webcam.js";
import filtroBusquda from "./DOM/filtro_busqueda.js";
import geoLocalizacion from "./DOM/geolocalizacion.js";
import hamburgerMenu from "./DOM/menu_hamburguesa.js";
import responsiveMedia from "./DOM/objeto_responsive.js";
import tester from "./DOM/prueba_responsive.js";
import { digitalCLock, alarm } from "./DOM/reloj.js";
import scrollSpy from "./DOM/scoll_spia.js";
import draw from "./DOM/sorteo.js";
import { moveBall, shortcuts } from "./DOM/teclado.js";
import darkTheme from "./DOM/tema-oscuro.js";
import contactFormValidation from "./DOM/validaciones_formulario.js";
import smartVideo from "./DOM/video_inteligente.js";

const d = document;
// para hacer que la carga de la funcion se haga al documento correctamente
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalCLock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "January 20, 2023 18:30:00", "Happy Birthday");
    scrollTopButton(".scroll-top");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://youtu.be/6e3C_XUKq3E" target="_blank" rel="noopener">Ver video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6e3C_XUKq3E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/kPbVpf3xhfjF2H7L9" target="_blank" rel="noopener">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0520848431884!2d-75.5923186847688!3d6.256869327940242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44290e4f870f69%3A0xf57f97b59ef52c39!2sEstadio%20de%20F%C3%BAtbol%20Atanasio%20Girardot!5e0!3m2!1ses!2sco!4v1645491258619!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );
    tester("responsive-tester");
    userDevice("user-device");
    webcamConnet("webcam");
    geoLocalizacion("geolocation");
    filtroBusquda(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidation();
});

d.addEventListener("keydown", (e) => {
    moveBall(e, ".ball", ".stage");
    shortcuts(e);
});

// no se puede delegar en este archivo porque se hara desde tema-oscuro.js
darkTheme(".dark-theme", "dark-mode");
//no necesita cargar con el documento
networkStatus();
