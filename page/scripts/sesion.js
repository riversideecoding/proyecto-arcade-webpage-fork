function loguear()
{

let user=document.getElementById("usuario").value
let pass=document.getElementById("contraseña").value

if(user=="Kevin" && pass=="1234"){

    window.location.href ="../inicio/inicio.html";

}else{

    alert("Error al iniciar sesion")
}
}