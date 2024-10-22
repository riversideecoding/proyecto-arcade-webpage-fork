import GameDAO from "../dao/gameDAO.js";

window.onload = ()=>{
    let form = document.querySelector("#agregarJuego");
    form.onsubmit = (e)=>{
        e.preventDefault();
        let nombre = form.nombre.value;
        let descripcion = form.descripcion.value;
        let imagen = form.imagen.files[0];
        agregarJuego(nombre, descripcion, imagen);
    }
    obtenerJuegos();

    let fromedit = document.querySelector("#editarJuego");
    fromedit.onsubmit = (e)=>{
        e.preventDefault();
        let id = fromedit.id.value;
        let nombre = fromedit.nombre.value;
        let descripcion = fromedit.descripcion.value;
        let imagen = fromedit.imagen.files[0];
        editarJuego(id,nombre, descripcion, imagen);
    }

}

async function agregarJuego(nombre,descripcion, imagen){
    let request = await new GameDAO().agregarJuego(nombre, descripcion, imagen);
    console.log(request);
    
}

async function obtenerJuegos() {
    let request = await new GameDAO().obtenerJuegos("fede");
    console.log(request);
    
}

async function editarJuego(id,nombre,descripcion, imagen){
    let request = await new GameDAO().editarJuego(id,nombre, descripcion, imagen);
    console.log(request);
}
    
