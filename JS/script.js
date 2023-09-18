document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.getElementById('card-container');

  if (cardContainer) {
    fetch('/JSON/profesionales.json')
      .then(response => response.json())
      .then(data => {
        const profesionalesData = data.profesionales;

        profesionalesData.forEach(profesional => {
          const card = document.createElement('div');
          card.classList.add('col-md-12', 'card');
          card.id = profesional.nombre;

          const cardContent = `
            <div class="d-flex justify-content-between">
              <span>${profesional.nombre}</span>
              <button class="btn btn-success" cardid="${profesional.nombre}">+</button>
            </div>
          `;

          card.innerHTML = cardContent;
          cardContainer.appendChild(card);

          card.querySelector('button').addEventListener('click', (event) => {
            const cardId = event.target.getAttribute('cardid');
            window.location.href = `datos.html?cardid=${cardId}`;
          });
        });
      })
      .catch(error => {
        console.error('Error al cargar los datos desde el JSON:', error);
      });
  } else {
    console.error('No se encontró el contenedor de tarjetas.');
  }
});
