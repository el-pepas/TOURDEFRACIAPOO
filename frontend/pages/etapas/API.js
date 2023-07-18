const urlEtapas ="http://localhost:4200/tour/Etapa/all";
const urlNuevaEtapas ="http://localhost:4200/tour/Etapa/insert";
const urlBorrarEtapas ="http://localhost:4200/tour/Etapa/delete";
const urlOneEtapa ="http://localhost:4200/tour/Etapa/one";
const urlUpdateEtapa ="http://localhost:4200/tour/Etapa/update";


export const getEtapas = async () => {
  try {
    const etapa = await fetch(urlEtapas);
    const datosEtapas = await etapa.json();
    return datosEtapas;
  } catch (error) {
    console.log(error);
  }
};

export const addEtapa = async (registro) => {
  try {
    await fetch(`${urlNuevaEtapas}/`, {
      method: "POST",
      body: JSON.stringify(registro),
      headers: {
        "Content-Type": "application/json",
      },
    });
    window.location = "etapa.html";
  } catch (error) {
      console.log(error);
  }
};


export const deleteEtapa = async (id) => {
  try {
    await fetch(`${urlBorrarEtapas}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    location.href = 'etapa.html';
  } catch (error) {
      console.log(error);
  }
};


/* ------------------------------------------------ */
export const getOneEtapa = async (id) => {
  try {
    const etapa = await fetch(`${urlOneEtapa}/${id}`);
    const datosEtapas = await etapa.json();
    return datosEtapas;
  } catch (error) {
    console.log(error);
  }
}


/* ----------------------------------------------------- */
export const updateEtapas = async (idUp,id) => {
  try {
    await fetch(`${urlUpdateEtapa}/${id}`,{
      method: 'PATCH',
      body: JSON.stringify(idUp),
      headers:{
        'Content-Type': 'application/json'
      }
    });
    location.href = 'etapa.html';
  } catch (error) {
    console.log(error);
  }
}
