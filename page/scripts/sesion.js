function loguear() {

    let user = document.getElementById("usuario").value;
    let pass = document.getElementById("contraseña").value;

    if (user === "TestUser" && pass === "123test") {
        localStorage.setItem("username", user);
        localStorage.setItem("password", pass);
        window.location.href = "../inicio/inicio.html";

        console.log(localStorage.getItem("username"));
    }
    else
        alert("Error al iniciar sesion")
}