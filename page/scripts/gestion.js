import GameDAO from "../../dao/gameDAO.js";

window.onload = async()=>{
let juegos = await obtenerJuegos();
mostrarJuegos (juegos);
agregarEventoform();
}

function agregarEventoform(){
let formRegistrar = document.querySelector("#formRegistrar");
formRegistrar.onsubmit = (e) => {
    e.preventDefault();
    let name = formRegistrar.nombre.value;
    let descripcion = formRegistrar.descripcion.value;
    let img = formRegistrar.urlImagen.value
    agregarJuego(nombre,descripcion,img)
}}

async function agregarJuego(nombre,descripcion,img){
    console.log(nombre,descripcion,img)
}

async function obtenerJuegos(){
    let gameDAO = new GameDAO();
    let respuesta = await gameDAO.obtenerJuegos("fede");
    console.log(respuesta);
    return respuesta.data;
}

function mostrarJuegos(juegos){
    let datosTablaElement = document.querySelector("#datosTabla");
    datosTablaElement.innerHTML = "";
    juegos.forEach( (juego) =>{
        datosTablaElement.innerHTML += `
        <tr>        
          <td>${juego.nombre}</td>
          <td>${juego.descripcion}</td>
        <td> <img class="imgTabla" src="${juego.urlImagen}"></td>
        <td>
           <div>
             <button> Editar </button>
             <button> Eliminar </button>
           </div>
        </td>  
        </tr>    
        `;
        console.log(juego); 
    });

    console.log(juegos);

}





