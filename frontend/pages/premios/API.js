const urlPremios ="http://localhost:4200/tour/Premio/all";
const urlNuevaPremios ="http://localhost:4200/tour/Premio/insert";
const urlBorrarPremios ="http://localhost:4200/tour/Premio/delete";
const urlOnePremio ="http://localhost:4200/tour/Premio/one";
const urlUpdatePremio ="http://localhost:4200/tour/Premio/update";


export const getPremios = async () => {
  try {
    const premio = await fetch(urlPremios);
    const datosPremios = await premio.json();
    return datosPremios;
  } catch (error) {
    console.log(error);
  }
};

export const addPremio = async (registro) => {
  try {
    await fetch(`${urlNuevaPremios}/`, {
      method: "POST",
      body: JSON.stringify(registro),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location = "premio.html";
  } catch (error) {
      console.log(error);
  }
};


export const deletePremio = async (id) => {
  try {
    await fetch(`${urlBorrarPremios}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    location.href = 'premio.html';
  } catch (error) {
      console.log(error);
  }
};


/* ------------------------------------------------ */
export const getOnePremio = async (id) => {
  try {
    const premio = await fetch(`${urlOnePremio}/${id}`);
    const datosPremios = await premio.json();
    return datosPremios;
  } catch (error) {
    console.log(error);
  }
}


/* ----------------------------------------------------- */
export const updatePremios = async (idUp,id) => {
  try {
    await fetch(`${urlUpdatePremio}/${id}`,{
      method: 'PATCH',
      body: JSON.stringify(idUp),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    location.href = 'premio.html';
  } catch (error) {
    console.log(error);
  }
}
