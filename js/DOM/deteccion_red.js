const d = document,
    w = window,
    n = navigator;

export default function networkStatus() {
    const isOnLine = () => {
        // crear un elemento dinamico (un div en este caso)
        const $div = d.createElement("div");
        if (n.onLine) {
            // poner texto a la div
            $div.textContent = "Conexion Establecida";
            // agregar la clase a la div
            $div.classList.add("online");
            $div.classList.remove("offline");
        } else {
            $div.textContent = "Conexion Perdida";
            $div.classList.add("offline");
            $div.classList.remove("online");
        }
        d.body.insertAdjacentElement("afterbegin", $div);
        // quitar mensaje tras 2 segundos
        setTimeout(() => d.body.removeChild($div), 2000);
    };

    w.addEventListener("online", (e) => isOnLine());
    w.addEventListener("offline", (e) => isOnLine());
}
