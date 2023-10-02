fetch('./JSON/profesionales.json')
  .then(respuesta => respuesta.json())
  .then(datos => localStorage.setItem('profesionales', JSON.stringify(datos)))

  document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('card-container');
    const datosProfesionales = JSON.parse(localStorage.getItem('profesionales'));

    if (datosProfesionales){
      datosProfesionales.profesionales.forEach(profesional => {
        const card = document.createElement('div');
        card.classList.add('col-md-12', 'card');	
        card.innerHTML = `<h2>${profesional.nombre}</h2>
            <div class="d-flex">
            <span>${profesional.especialidad}</span>
            <button class="btn btn-success"}">Más info</button>
            </div>`;

        const boton = card.querySelector('.btn-success');
        boton.addEventListener("click",() => {
          detallesProfesional(profesional);
        })

        cardContainer.appendChild(card);
      })}
  })

  function detallesProfesional(profesional) {
    window.location.href = `datos.html?id=${profesional.id}`;
  }
