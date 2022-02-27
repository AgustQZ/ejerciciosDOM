const d = document,
    n = navigator;

export default function geoLocalizacion(id) {
    const $id = d.getElementById(id),
        opc = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

    const success = (position) => {
        console.log(position);

        let coordenadas = position.coords;
        $id.innerHTML = `<p>Tu posicion actual es:</p>
        <ul>
        <li>Latitud: ${coordenadas.latitude}</li>
        <li>Longitud: ${coordenadas.longitude}</li>
        <li>Precision: ${coordenadas.accuracy} metros</li>
        </ul>
        <a href="https://www.google.com./maps/@${coordenadas.latitude}, ${coordenadas.longitude}, z1" target= "_blank" rel= "noopener">Ver en google maps</a>`;
    };
    const error = (err) => {
        console.log(err);
    };

    n.geolocation.getCurrentPosition(success, error, opc);
}
