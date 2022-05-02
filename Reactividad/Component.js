// funcion anonima autoejecutable(no se admiten en arrow function por no sopertar (this))
const Component = (function () {
    // constructor del componente
    const Constructor = function (options) {
        this.element = options.element;
        this.data = options.data;
        this.template = options.template;
    };
    /****** METODOS ******/

    // renderizar interfaz de usuario (UI)
    Constructor.prototype.render = function () {
        // console.log(this.template);
        $element = document.querySelector(this.element);
        if (!$element) return;
        $element.innerHTML = this.template(this.data);

        console.log(this.data);
    };

    // Metodo SET actualizar estado de forma reactiva
    Constructor.prototype.setState = function (object) {
        for (const key in object) {
            if (this.data.hasOwnProperty(key)) {
                this.data[key] = object[key];
            }
        }
        this.render();
    };

    // Metodo GET obtener copia
    Constructor.prototype.getState = function () {
        return JSON.parse(JSON.stringify(this.data));
    };

    return Constructor;
})();
