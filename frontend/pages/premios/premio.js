import {getPremios,getOnePremio,addPremio,deletePremio,updatePremios} from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargarPremios()
})



async function cargarPremios() {
    const premio = await getPremios()
    const tablaPremio = document.querySelector("#carta")
    premio.forEach(element => {
        const {_id,nombre,categoria} = element
        tablaPremio.innerHTML += `


        <div class="card" style="width: 18rem;">
        <img src="../../img/notfound.png" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">ID: ${_id}</p>
          <p class="card-text"> CATEGORIA: ${categoria}</p>
          <button class="btn btn-danger delete" id="${_id}">eliminar</button></td>
          <button type="button" class="btn btn-primary editar" id="${_id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Editar</button>
          </div>
      </div>
        `
    });
    //console.log(Premio);
} 
/* ---------------------------------------------- */
const formulario = document.querySelector("#formPremio");
formulario.addEventListener("submit", insertPremio);

function insertPremio(e) {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const categoria = document.querySelector("#categoria").value;

  const registro = {
    nombre,
    categoria
  
  };

  alert("Datos guardados correctamente.");
  return addPremio(registro);
};
const eliminar = document.querySelector('#carta')
eliminar.addEventListener('click',borrarEditar)


function borrarEditar(e){
    e.preventDefault();

    if(e.target.classList.contains('delete')){
       const idPremio = e.target.getAttribute('id')
        console.log(idPremio);
        const confir = confirm("desea eliminarlo?")
            if (confir) {
                deletePremio(idPremio)
                
            }          
          }else if(e.target.classList.contains('editar')){
            const idPremio = e.target.getAttribute('id');
            const datoPremio = getOnePremio(idPremio);
            
            datoPremio.then((resultado) => {
              const dataArray = resultado;
              console.log(dataArray);

            
              const modalNombre = document.getElementById("nombreUpdate");    
              modalNombre.value = dataArray.nombre;

              const modalCategoria = document.getElementById("categoriaUpdate");
              modalCategoria.value = dataArray.categoria;


            const editar = document.querySelector('#formUpdatePremio');
            editar.addEventListener('submit', updatePremio);


            function updatePremio(e){
                e.preventDefault();

                const nombre = document.getElementById("nombreUpdate").value
                const categoria = document.getElementById("categoriaUpdate").value

                const arrayUpdate = {
                  nombre,
                  categoria
                
                }

                console.log(arrayUpdate);

                const id = dataArray._id
                console.log(id);
                updatePremios(arrayUpdate,id)

                        }
    
    
            });   
        }   
    }