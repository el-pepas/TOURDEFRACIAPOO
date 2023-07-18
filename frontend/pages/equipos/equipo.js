import {getEquipos,getOneEquipo,addEquipo,deleteEquipo,updateEquipos} from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargarEquipos()
})



async function cargarEquipos() {
    const equipo = await getEquipos()
    const tablaEquipo = document.querySelector("#carta")
    equipo.forEach(element => {
        const {_id,equipo,directores,pais} = element
        tablaEquipo.innerHTML += `


        <div class="card" style="width: 18rem;">
        <img src="../../img/notfound.png" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${equipo}</h5>
          <p class="card-text">ID: ${_id}</p>
          <p class="card-text"> DIRECTORES: ${directores}</p>
          <p class="card-text"> PAIS: ${pais}</p>
          <button class="btn btn-danger delete" id="${_id}">eliminar</button></td>
          <button type="button" class="btn btn-primary editar" id="${_id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Editar</button>
          </div>
      </div>
        `
    });
    //console.log(Equipo);
} 
/* ---------------------------------------------- */
const formulario = document.querySelector("#formEquipo");
formulario.addEventListener("submit", insertEquipo);

function insertEquipo(e) {
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
  return addEquipo(registro);
};
const eliminar = document.querySelector('#carta')
eliminar.addEventListener('click',borrarEditar)


function borrarEditar(e){
    e.preventDefault();

    if(e.target.classList.contains('delete')){
       const idEquipo = e.target.getAttribute('id')
        console.log(idEquipo);
        const confir = confirm("desea eliminarlo?")
            if (confir) {
                deleteEquipo(idEquipo)
                
            }          
          }else if(e.target.classList.contains('editar')){
            const idEquipo = e.target.getAttribute('id');
            const datoEquipo = getOneEquipo(idEquipo);
            
            datoEquipo.then((resultado) => {
              const dataArray = resultado;
              console.log(dataArray);

            
              const modalEquipo= document.getElementById("equipoUpdate");    
              modalEquipo.value = dataArray.equipo;

              const modalDirectores  = document.getElementById("directoresUpdate");
              modalDirectores.value = dataArray.directores;

              const modalPais = document.getElementById("paisUpdate")
              modalPais.value = dataArray.pais;

            const editar = document.querySelector('#formUpdateEquipo');
            editar.addEventListener('submit', updateEquipo);


            function updateEquipo(e){
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
                updateEquipos(arrayUpdate,id)

                        }
    
    
            });   
        }   
    }