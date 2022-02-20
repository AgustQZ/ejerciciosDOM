import scrollTopButton from "./DOM/boton_scroll.js";
import countdown from "./DOM/cuenta_regresiva.js";
import hamburgerMenu from "./DOM/menu_hamburguesa.js";
import { digitalCLock, alarm } from "./DOM/reloj.js";
import { moveBall, shortcuts } from "./DOM/teclado.js";
import darkTheme from "./DOM/tema-oscuro.js";

const d = document;
// para hacer que la carga de la funcion se haga al documento correctamente
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalCLock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/alarm.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "January 20, 2023 18:30:00", "Happy Birthday");
    scrollTopButton(".scroll-top");
});

d.addEventListener("keydown", (e) => {
    moveBall(e, ".ball", ".stage");
    shortcuts(e);
});

// no se puede delegar en este archivo porque se hara desde tema-oscuro.js
darkTheme(".dark-theme", "dark-mode");