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
    let nombre = formRegistrar.nombre.value;
    let descripcion = formRegistrar.descripcion.value;
    let img = formRegistrar.imagen.files[0];
    agregarJuego(nombre,descripcion,img)
    formRegistrar.reset();
}}

async function agregarJuego(nombre,descripcion,img){
    let gameDAO = new GameDAO();
    let respuesta = await gameDAO.agregarJuego(nombre,descripcion,img);
    console.log(respuesta);
    if(respuesta.status){
        alert("juego agregado");
        let juegos = await obtenerJuegos();
        mostrarJuegos(juegos);
    }else{
        alert(respuesta.message);
    }
}

async function obtenerJuegos(){
    let gameDAO = new GameDAO();
    let respuesta = await gameDAO.obtenerJuegos("TestUser");
    console.log(respuesta);
    return respuesta.data;
}

function mostrarJuegos(juegos){
    let datosTablaElement = document.querySelector("#datosTabla");
    datosTablaElement.innerHTML = "";
    juegos.forEach( (juego) =>{
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let div = document.createElement("div");
        let btnEliminar = document.createElement("button");
      
        datosTablaElement.appendChild(tr);
        tr.innerHTML += 
       
        `
        <td>${juego.nombre}</td>
          <td>${juego.descripcion}</td>
        <td> <img class="imgTabla" src="${juego.urlImagen}"></td>
        `;

        tr.appendChild(td);
        td.appendChild(div);
        div.appendChild(btnEliminar);
        btnEliminar.innerHTML = "Eliminar";
        btnEliminar.onclick = ()=>{
            eliminarJuego(juego.id);
        }

        console.log(juego); 
    });

  async function eliminarJuego (id) {
    let gameDAO = new GameDAO();
    let respuesta = await gameDAO.eliminarJuego(id);
    if(respuesta.status){
        alert("juego eliminado");
        let juegos = await obtenerJuegos();
        mostrarJuegos(juegos);
    }else{
        alert(respuesta.message);
    }
    
  }

    console.log(juegos);

}





