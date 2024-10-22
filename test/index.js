import SesionDAO from "../dao/sesionDAo.js";

window.onload = ()=>{
    agregarEventos();
    obtenerSesion();
}

function agregarEventos(){
    let formulario =document.querySelector("#iniciarSesion");

    formulario.onsubmit = (e)=>{
        e.preventDefault();
        let usuario = formulario.usuario.value;
        let password = formulario.password.value;
        iniciarSesion(usuario,password);
       
    }
}

async function iniciarSesion(usuario,password){
    let sesionDAO = new SesionDAO();

    let requetSesion = await sesionDAO.iniciarSesion(usuario,password);
    window.location.href = "form.html";
    console.log(requetSesion);
}

async function obtenerSesion(){
    let sesion = await new SesionDAO().obtenerSesion("fede");
    console.log(sesion);
}