import {getEtapas,getOneEtapa,addEtapa,deleteEtapa,updateEtapas} from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargarEtapas()
})



async function cargarEtapas() {
    const etapa = await getEtapas()
    const tablaEtapa = document.querySelector("#carta")
    etapa.forEach(element => {
        const {_id,nombre,distancia,clasificaciones} = element
        tablaEtapa.innerHTML += `


        <div class="card" style="width: 18rem;">
        <img src="../../img/notfound.png" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">ID: ${_id}</p>
          <p class="card-text"> DISTANCIA: ${distancia}</p>
          <p class="card-text"> CLASIFICACIONES: ${clasificaciones}</p>
          <button class="btn btn-danger delete" id="${_id}">eliminar</button></td>
          <button type="button" class="btn btn-primary editar" id="${_id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Editar</button>
          </div>
      </div>
        `
    });
    //console.log(Etapa);
} 
/* ---------------------------------------------- */
const formulario = document.querySelector("#formEtapa");
formulario.addEventListener("submit", insertEtapa);

function insertEtapa(e) {
  e.preventDefault();
  const equipo = document.querySelector("#equipo").value;
  const directores = document.querySelector("#directores").value;
  const pais = document.querySelector("#pais").value;

  const registro = {
    equipo,
    directores,
    pais
  };

  alert("Datos guardados correctamente.");
  return addEtapa(registro);
};
const eliminar = document.querySelector('#carta')
eliminar.addEventListener('click',borrarEditar)


function borrarEditar(e){
    e.preventDefault();

    if(e.target.classList.contains('delete')){
       const idEtapa = e.target.getAttribute('id')
        console.log(idEtapa);
        const confir = confirm("desea eliminarlo?")
            if (confir) {
                deleteEtapa(idEtapa)
                
            }          
          }else if(e.target.classList.contains('editar')){
            const idEtapa = e.target.getAttribute('id');
            const datoEtapa = getOneEtapa(idEtapa);
            
            datoEtapa.then((resultado) => {
              const dataArray = resultado;
              console.log(dataArray);

            
              const modalEquipo = document.getElementById("equipoUpdate");    
              modalEquipo.value = dataArray.equipo;

              const modalDirectores = document.getElementById("directoresUpdate");
              modalDirectores.value = dataArray.directores;

              const modalPais = document.getElementById("paisUpdate")
              modalPais.value = dataArray.pais;

            const editar = document.querySelector('#formUpdateEtapa');
            editar.addEventListener('submit', updateEtapa);


            function updateEtapa(e){
                e.preventDefault();

                const equipo = document.getElementById("equipoUpdate").value
                const directores = document.getElementById("directoresUpdate").value
                const pais = document.getElementById("paisUpdate").value

                const arrayUpdate = {
                  equipo,
                  directores,
                  pais
                }

                console.log(arrayUpdate);

                const id = dataArray._id
                console.log(id);
                updateEtapas(arrayUpdate,id)

                        }
    
    
            });   
        }   
    }