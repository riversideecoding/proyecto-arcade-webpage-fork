window.onload = () => {

}

function logIn() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("contraseña").value;

    if (!user || !pass) {
        alert("Faltan datos. Verifique.")
    }
    else if (user === "TestUser" && pass === "123test") {
        if (checkLoggedIn()) {
            alert("Ya estas logeado.");
        } else {
            localStorage.username = user;
            window.location.href = "../gestion/gestion.html";
            console.log(localStorage.username);
        }
    }
    else
        alert("Error al iniciar sesion")
}

function checkLoggedIn() {
    return localStorage.username ? true : false;
}