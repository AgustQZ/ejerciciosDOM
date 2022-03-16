// ***** OBJETO XMLHttpRequest *****
(() => {
    // 01 instanciar el objeto xmlhttprequest y variables del html
    const xhr = new XMLHttpRequest(),
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

    // 02 asignar evento de la peticion
    xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;

        if (xhr.status >= 200 && xhr.status < 300) {
            // console.log(xhr.responseText);
            // convertir a JSON
            let json = JSON.parse(xhr.responseText);
            // console.log(json);

            // crear el fragmento en el html
            json.forEach((el) => {
                let $li = document.createElement("li");
                $li.innerHTML = `${el.name}, ${el.email}, ${el.phone}`;
                $fragment.appendChild($li);
            });
            // insertar el fragmento en el html
            $xhr.appendChild($fragment);
        } else {
            let mensaje = xhr.statusText || " Ocurrio un error";
            $xhr.innerHTML = `${mensaje}: ${xhr.status}`;
        }
    });

    // 03 abrir la peticion
    xhr.open("GET", "assets/users.json");

    // 04 enviar la peticion
    xhr.send();
})();

//______________________

// ***** API Fetch *****
(() => {
    const $fetch = document.getElementById("fetch"),
        $fragment = document.createDocumentFragment();

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((resp) => (resp.ok ? resp.json() : Promise.reject(resp)))
        .then((json) => {
            // crear el fragmento en el html
            json.forEach((el) => {
                let $li = document.createElement("li");
                $li.innerHTML = `${el.name}, ${el.email}, ${el.phone}`;
                $fragment.appendChild($li);
            });
            // insertar el fragmento en el html
            $fetch.appendChild($fragment);
        })
        .catch((err) => {
            let mensaje = err.statusText || " Ocurrio un error";
            $fetch.innerHTML = `${mensaje}: ${err.status}`;
        });
})();

//______________________________________

// ***** API Fetch + Async-Await *****
(() => {
    const $fetch = document.getElementById("fetch-Async"),
        $fragment = document.createDocumentFragment();

    async function fetchAsync() {
        try {
            //por estar dentro de una funcion asincrona se puede esperar la respuesta de la siguiente linea
            let resp = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                ),
                json = await resp.json();

            if (!resp.ok) {
                throw { status: resp.status, statusText: resp.statusText };
            }

            // crear el fragmento en el html
            json.forEach((el) => {
                let $li = document.createElement("li");
                $li.innerHTML = `${el.name}, ${el.email}, ${el.phone}`;
                $fragment.appendChild($li);
            });
            // insertar el fragmento en el html
            $fetch.appendChild($fragment);

            //console.log(resp, json);
        } catch (err) {
            let mensaje = err.statusText || " Ocurrio un error";
            $fetch.innerHTML = `${mensaje}: ${err.status}`;
        }
    }

    fetchAsync();
})();

//______________________________________

// ***** API externa Axios *****
(() => {
    const $axios = document.getElementById("axios"),
        $fragment = document.createDocumentFragment();

    axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((resp) => {
            // crear el fragmento en el html
            resp.data.forEach((el) => {
                let $li = document.createElement("li");
                $li.innerHTML = `${el.name}, ${el.email}, ${el.phone}`;
                $fragment.appendChild($li);
            });
            // insertar el fragmento en el html
            $axios.appendChild($fragment);
        })
        .catch((err) => {
            let mensaje = err.response.statusText || " Ocurrio un error";
            $axios.innerHTML = `${mensaje}: ${err.response.status}`;
        });
})();

//______________________________________

// ***** API externa Axios + Async *****
(() => {
    const $axiosAsync = document.getElementById("axios-async"),
        $fragment = document.createDocumentFragment();

    async function axiosAsync() {
        try {
            let resp = await axios.get(
                    "https://jsonplaceholder.typicode.com/users"
                ),
                json = await resp.data;
            // crear el fragmento en el html
            json.forEach((el) => {
                let $li = document.createElement("li");
                $li.innerHTML = `${el.name}, ${el.email}, ${el.phone}`;
                $fragment.appendChild($li);
            });
            // insertar el fragmento en el html
            $axiosAsync.appendChild($fragment);
        } catch (err) {
            let mensaje = err.response.statusText || " Ocurrio un error";
            $axiosAsync.innerHTML = `${mensaje}: ${err.response.status}`;
        }
    }
    axiosAsync();
})();
