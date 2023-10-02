document.addEventListener("DOMContentLoaded", () => {

  const detalleProfesional = document.getElementById("detalle-container");

  const urlParams = new URLSearchParams(window.location.search);
  const idProfesional = urlParams.get("id");

  const datosProfesionales = JSON.parse(localStorage.getItem("profesionales"));

  const profesionalSeleccionado = datosProfesionales.profesionales.find(
    (profesional) => profesional.id == idProfesional
  );

  if (profesionalSeleccionado) {
    const contenedorProfesional = document.createElement("div");
    contenedorProfesional.classList.add("contenedor-profesional");
    contenedorProfesional.innerHTML = `<div class="card">
    <div class="row g-0">
      <div class="col-5 col-sm-4">
        <img src="${profesionalSeleccionado.imagen}" class="img-fluid w-100" alt="Primer plano de ${profesionalSeleccionado.nombre}">
      </div>
      <div class="col-4 col-sm-8">
        <div class="card-body">
          <h4 class="card-title">${profesionalSeleccionado.nombre}</h4>
          <h6 class="card-subtitle mb-2">${profesionalSeleccionado.especialidad}</h6>
          <p class="card-text">${profesionalSeleccionado.detalle.replace(/\n/g, "<br/>")}</p>
          <p class="card-text"><small>Contacto: ${profesionalSeleccionado.Contacto}</small></p>
          <button id="volver" class="btn btn-primary">Volver a la lista</button>
        </div>
      </div>
    </div>
  </div>`
    
  contenedorProfesional.querySelector("button").addEventListener("click", () => {
    window.location.href = "index.html";
  });
    
    // `
    // <div>
    // <h2>${profesionalSeleccionado.nombre}</h2>
    // <img src="${profesionalSeleccionado.imagen}" alt="Texto alternativo">
    // </div>
    //   <p>Especialidad: ${profesionalSeleccionado.especialidad}</p>
    //   <p>Detalle: ${profesionalSeleccionado.detalle}</p>
    //   <p>Contacto: ${profesionalSeleccionado.Contacto}</p>
    //   `;
    detalleProfesional.appendChild(contenedorProfesional);
  }
});
