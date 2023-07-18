import {getCiclistas,getOneCiclista,addCiclista,deleteCiclista,updateCiclistas} from "./API.js";

addEventListener('DOMContentLoaded',()=>{
    cargarCiclistas()
})



async function cargarCiclistas() {
    const ciclista = await getCiclistas()
    const tablaCiclista = document.querySelector("#carta")
    ciclista.forEach(element => {
        const {_id,nombre,nacionalidad,foto} = element
        tablaCiclista.innerHTML += `


        <div class="card" style="width: 18rem;">
        <img src="../../img/notfound.png" class="card-img-top" alt="${foto}">
        <div class="card-body">
          <h5 class="card-title">${nombre}</h5>
          <p class="card-text">ID: ${_id}</p>
          <p class="card-text"> NACIONALIDAD: ${nacionalidad}</p>
          <button class="btn btn-danger delete" id="${_id}">eliminar</button></td>
          <button type="button" class="btn btn-primary editar" id="${_id}" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Editar</button>
          </div>
      </div>
        `
    });
    //console.log(ciclista);
} 
/* ---------------------------------------------- */
const formulario = document.querySelector("#formCiclista");
formulario.addEventListener("submit", insertCiclista);

function insertCiclista(e) {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const nacionalidad = document.querySelector("#nacionalidad").value;
  const foto = document.querySelector("#foto").value;

  const registro = {
    nombre,
    nacionalidad,
    foto
  };

  alert("Datos guardados correctamente.");
  return addCiclista(registro);
};
const eliminar = document.querySelector('#carta')
eliminar.addEventListener('click',borrarEditar)


function borrarEditar(e){
    e.preventDefault();

    if(e.target.classList.contains('delete')){
       const idCiclista = e.target.getAttribute('id')
        console.log(idCiclista);
        const confir = confirm("desea eliminarlo?")
            if (confir) {
                deleteCiclista(idCiclista)
                
            }          
          }else if(e.target.classList.contains('editar')){
            const idCiclista = e.target.getAttribute('id');
            const datoCiclista = getOneCiclista(idCiclista);
            
            datoCiclista.then((resultado) => {
              const dataArray = resultado;
              console.log(dataArray);

            
              const modalNombre = document.getElementById("nombreUpdate");    
              modalNombre.value = dataArray.nombre;

              const modalNacionalidad = document.getElementById("nacionalidadUpdate");
              modalNacionalidad.value = dataArray.nacionalidad;

              const modaFoto = document.getElementById("fotoUpdate")
              modaFoto.value = dataArray.foto;

            const editar = document.querySelector('#formUpdateCiclista');
            editar.addEventListener('submit', updateCiclista);


            function updateCiclista(e){
                e.preventDefault();

                const nombre = document.getElementById("nombreUpdate").value
                const nacionalidad = document.getElementById("nacionalidadUpdate").value
                const foto = document.getElementById("fotoUpdate").value

                const arrayUpdate = {
                  nombre,
                  nacionalidad,
                  foto
                }

                console.log(arrayUpdate);

                const id = dataArray._id
                console.log(id);
                updateCiclistas(arrayUpdate,id)

                        }
    
    
            });   
        }   
    }