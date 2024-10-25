import SesionDAO from "../../dao/sesionDAo.js";

window.onload = () => {
    loadEvents();
    getSession();
}

function loadEvents() {
    let form = document.querySelector("#login-form");

    form.onsubmit = (e) => {
        e.preventDefault();
        let user = form.user.value;
        let pass = form.password.value;
        logIn(user, pass);
    }

}

async function logIn(user, pass) {
    let logInDao = new SesionDAO();
    if (!user || !pass) {
        alert("Faltan datos. Verifique.");
        return false;
    }

    if(logInDao.iniciarSesion(user, pass)){

    }

}

async function getSession() {
    return new SesionDAO().obtenerSesion();
}