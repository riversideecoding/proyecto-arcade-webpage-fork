import GameDAO from "../../dao/gameDAO.js";

window.onload = async()=>{
let juegos = await obtenerJuegos();
mostrarJuegos (juegos);
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
        </tr> <img class="imgTabla" src="${juego.urlImagen}"></td>
        `;
        console.log(juego); 
    });

    console.log(juegos);

}





