const urlEquipos ="http://localhost:4200/tour/equipo/all";
const urlNuevoEquipos ="http://localhost:4200/tour/equipo/insert";
const urlBorrarEquipos ="http://localhost:4200/tour/equipo/delete";
const urlOneEquipo ="http://localhost:4200/tour/equipo/one";
const urlUpdateEquipo ="http://localhost:4200/tour/equipo/update";


export const getEquipos = async () => {
  try {
    const equipo = await fetch(urlEquipos);
    const datosEquipos = await equipo.json();
    return datosEquipos;
  } catch (error) {
    console.log(error);
  }
};

export const addEquipo = async (registro) => {
  try {
    await fetch(`${urlNuevoEquipos}/`, {
      method: "POST",
      body: JSON.stringify(registro),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location = "equipo.html";
  } catch (error) {
      console.log(error);
  }
};


export const deleteEquipo = async (id) => {
  try {
    await fetch(`${urlBorrarEquipos}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    location.href = 'equipo.html';
  } catch (error) {
      console.log(error);
  }
};


/* ------------------------------------------------ */
export const getOneEquipo = async (id) => {
  try {
    const equipo = await fetch(`${urlOneEquipo}/${id}`);
    const datosEquipos = await equipo.json();
    return datosEquipos;
  } catch (error) {
    console.log(error);
  }
}


/* ----------------------------------------------------- */
export const updateEquipos = async (idUp,id) => {
  try {
    await fetch(`${urlUpdateEquipo}/${id}`,{
      method: 'PATCH',
      body: JSON.stringify(idUp),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    location.href = 'equipo.html';
  } catch (error) {
    console.log(error);
  }
}
