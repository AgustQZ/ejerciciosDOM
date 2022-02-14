import hamburgerMenu from "./DOM/menu_hamburguesa.js";
import {digitalCLock, alarm} from "./DOM/reloj.js"

const d = document;
// para hacer que la carga de la funcion se haga al documento correctamente
d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalCLock("#reloj", "#activar-reloj", "#detener-reloj");
});
