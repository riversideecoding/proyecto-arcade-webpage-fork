import GameDAO from "../../dao/gameDAO.js";

window.onload = async()=>{
    let juegos = await obtenerJuegos();
    mostrarJuegos (juegos);
    agregarEventoform();
    }

    async function obtenerJuegos(){
        let gameDAO = new GameDAO();
        let respuesta = await gameDAO.obtenerJuegos("TestUser");
        console.log(respuesta);
        return respuesta.data;
    }
    
    function mostrarJuegos(juegos){
        let datosTablaElement = document.querySelector("#listaJuego");
        datosTablaElement.innerHTML = "";
        juegos.forEach( (juego) =>{
            datosTablaElement.innerHTML += 
           
            `
            <div class="juego">
            <p>${juego.nombre}</p>
              <p>${juego.descripcion}</p>
            <img class="imgTabla" src="${juego.urlImagen}">
            </div>
            `;
    
            });
        }