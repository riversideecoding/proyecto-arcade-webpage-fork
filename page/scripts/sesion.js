import SesionDAO from "../../dao/sesionDAo.js";

window.onload = () => {
    loadEvents();
    getSession();
    document.getElementById("login-btn").addEventListener("click", logIn);
}

function loadEvents() {
    let form = document.querySelector("#login-form");

    form.onsubmit = (e) => {
        e.preventDefault();
        let user = form.user.value;
        let pass = form.password.value;
        logInData(user, pass);
    }
}

async function logInData(user, pass) {
    let logInDao = new SesionDAO();
    if (!user || !pass) {
        alert("Faltan datos. Verifique.");
        return false;
    }

    const response = await logInDao.iniciarSesion(user, pass);
    if (response.status) {
        window.location.href = "../en/gestion/gestion.html";
    } else {
        alert("Error al realizar login.");
    }
}

async function logIn() {
    let form = document.querySelector("#login-form");
    let user = form.user.value;
    let pass = form.password.value;
    let logInDao = new SesionDAO();
    if (!user || !pass) {
        alert("Faltan datos. Verifique.");
        return false;
    }

    const response = await logInDao.iniciarSesion(user, pass); // Asegúrate de esperar la respuesta
    if (response.status) {
        window.location.href = "../gestion/gestion.html";
    } else {
        alert("Error al realizar login.");
    }
}

async function getSession() {
    return new SesionDAO().obtenerSesion();
}
