function loguear()
{

let user=document.getElementById("usuario").value
let pass=document.getElementById("contraseña").value

if(user=="TestUser" && pass=="123test"){

    window.location.href ="../inicio/inicio.html";

}else{

    alert("Error al iniciar sesion")
}
}