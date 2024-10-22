window.onload = () => {
    
}

function logIn() {
    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("contraseña").value;

    if (checkLoggedIn()) {
        alert("Ya estas logeado.");
    }
    else if (user === "TestUser" && pass === "123test") {
        localStorage.username = user;
        window.location.href = "../gestion/gestion.html";
        console.log(localStorage.username);
    }
    else
        alert("Error al iniciar sesion")
}

function checkLoggedIn() {
    return localStorage.username ? true : false;
}