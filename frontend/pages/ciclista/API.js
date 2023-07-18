const urlCiclistas ="http://localhost:4200/tour/ciclista/all";
const urlNuevaCiclistas ="http://localhost:4200/tour/ciclista/insert";
const urlBorrarCiclistas ="http://localhost:4200/tour/ciclista/delete";
const urlOneCiclista ="http://localhost:4200/tour/ciclista/one";
const urlUpdateCiclista ="http://localhost:4200/tour/ciclista/update";


export const getCiclistas = async () => {
  try {
    const ciclista = await fetch(urlCiclistas);
    const datosCiclistas = await ciclista.json();
    return datosCiclistas;
  } catch (error) {
    console.log(error);
  }
};

export const addCiclista = async (registro) => {
  try {
    await fetch(`${urlNuevaCiclistas}/`, {
      method: "POST",
      body: JSON.stringify(registro),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location = "ciclista.html";
  } catch (error) {
      console.log(error);
  }
};


export const deleteCiclista = async (id) => {
  try {
    await fetch(`${urlBorrarCiclistas}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    location.href = 'ciclista.html';
  } catch (error) {
      console.log(error);
  }
};


/* ------------------------------------------------ */
export const getOneCiclista = async (id) => {
  try {
    const ciclista = await fetch(`${urlOneCiclista}/${id}`);
    const datosCiclistas = await ciclista.json();
    return datosCiclistas;
  } catch (error) {
    console.log(error);
  }
}


/* ----------------------------------------------------- */
export const updateCiclistas = async (idUp,id) => {
  try {
    await fetch(`${urlUpdateCiclista}/${id}`,{
      method: 'PATCH',
      body: JSON.stringify(idUp),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    location.href = 'ciclista.html';
  } catch (error) {
    console.log(error);
  }
}
