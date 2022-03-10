const d = document;

export default function contactFormValidation() {
    const $form = d.querySelector(".contact-form"),
        $inputs = d.querySelectorAll(".contact-form [required]");

    // crear los span para mostrar el mensaje emergente en los iputs
    $inputs.forEach((input) => {
        const $span = d.createElement("span"); // con este la creamos
        $span.id = input.name; //con este se asigna un id con el valor que viene en el name del input
        $span.textContent = input.title; // agregar el texto que se creo en title html
        $span.classList.add("contact-form-error", "none"); //añadir estilos definidos en el css y ocultarlo
        input.insertAdjacentElement("afterend", $span); // insertar el span despues del input como hermano posterior
    });

    // validar el formulario a medida que se van introduciendo caracteres
    d.addEventListener("keyup", (ke) => {
        if (ke.target.matches(".contact-form [required]")) {
            const pattern = ke.target.pattern || ke.target.dataset.pattern;

            if (pattern && ke.target.value !== "") {
                let expresionReg = new RegExp(pattern);
                return !expresionReg.exec(ke.target.value)
                    ? d
                          .getElementById(ke.target.name)
                          .classList.add("is-active")
                    : d
                          .getElementById(ke.target.name)
                          .classList.remove("is-active");
            }
            if (!pattern) {
                return ke.target.value === ""
                    ? d
                          .getElementById(ke.target.name)
                          .classList.add("is-active")
                    : d
                          .getElementById(ke.target.name)
                          .classList.remove("is-active");
            }
        }
    });

    // envio del formulario
    d.addEventListener("submit", (enviar) => {
        enviar.preventDefault();
        alert("Formulario enviado");

        let $loader = d.querySelector(".contact-form-loader"),
            $response = d.querySelector(".contact-form-response");

        $loader.classList.remove("none");
        $form.reset();

        setTimeout((e) => {
            $loader.classList.add("none");
            $response.classList.remove("none");
            setTimeout(() => {
                $response.classList.add("none");
            }, 2000);
        }, 2000);
    });
}
