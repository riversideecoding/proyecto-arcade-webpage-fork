import Origen from "./origen.js";

export default class SesionDAO {
    async iniciarSesion(usuario, password) {
        let url = Origen + "controller/sesionController.php?request=iniciarSesion";
        let data = new FormData();
        data.append("usuario", usuario);
        data.append("password", password);
        let config = {
            method: "POST",
            body: data
        }
        let response = await fetch(url, config);
        let json = await response.json();
        if (json.status) {
            window.localStorage.setItem("sesion", JSON.stringify({ usuario: usuario, apikey: json.data }));
        }
        return json;
    }

    obtenerSesion() {
        let sesion = window.localStorage.getItem("sesion");
        console.log(sesion);
        if (sesion) {
            return JSON.parse(sesion);
        } else {
            return null;
        }


    }
}