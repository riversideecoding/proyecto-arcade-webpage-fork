import Origen from "./origen.js";
import SesionDAO from "./sesionDAo.js";

export default class GameDAO {
    async obtenerJuegos(usuario) {
        let url = Origen + "controller/sitioController.php?request=obtenerJuegos&usuario=" + usuario;
        let consulta = await fetch(url);
        let response = await consulta.json();
        return response;
    }

    async agregarJuego(nombre, descipcion, imagen) {
        let usuario = new SesionDAO().obtenerSesion();
        console.log(usuario);
        if (usuario) {

            let url = Origen + `controller/gameController.php?request=agregarJuego&usuario=${usuario.usuario}&key=${usuario.apikey}`;
            console.log(url);

            let data = new FormData();
            data.append("nombre", nombre);
            data.append("descripcion", descipcion);
            data.append("imagen", imagen);
            console.log(imagen);
            let config = {
                method: "POST",
                body: data
            };
            let response = await fetch(url, config);
            let json = await response.json();
            return json;
        } else {
            return { status: false, message: "No hay una sesion activa" };
        }
    }

    async editarJuego(id, nombre, descipcion, imagen) {
        let usuario = new SesionDAO().obtenerSesion();
        if (usuario) {
            let url = Origen + `controller/gameController.php?request=modificarJuego&usuario=${usuario.usuario}&key=${usuario.apikey}`;
            let data = new FormData();
            data.append("id", id);
            data.append("nombre", nombre);
            data.append("descripcion", descipcion);
            data.append("imagen", imagen);
            let config = {
                method: "POST",
                body: data
            };
            console.log(id, nombre, descipcion, imagen);
            let response = await fetch(url, config);
            let json = await response.json();
            return json;
        } else {
            return { status: false, message: "No hay una sesion activa" };
        }
    }

    async eliminarJuego(id) {
        let usuario = new SesionDAO().obtenerSesion();
        if (usuario) {
            let url = Origen + `controller/gameController.php?request=eliminarJuego&usuario=${usuario.usuario}&key=${usuario.apikey}`;
            let data = new FormData();
            data.append("id", id);
            let config = {
                method: "POST",
                body: data
            };
            let response = await fetch(url, config);
            let json = await response.json();
            return json;
        } else {
            return { status: false, message: "No hay una sesion activa" };
        }
    }

}
