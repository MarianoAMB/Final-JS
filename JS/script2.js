document.addEventListener('DOMContentLoaded', () => {
    const volverButton = document.getElementById('volverButton');

    if (volverButton) {
      volverButton.addEventListener('click', () => {
        window.location.href = 'index.html';
      });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const cardId = urlParams.get('cardid');

    if (!cardId) {
      console.error('No se proporcionó un ID de tarjeta.');
      return;
    }

    fetch('/JSON/profesionales.json')
      .then(response => response.json())
      .then(data => {
        const profesional = data.profesionales.find(prof => prof.nombre === cardId);

        if (profesional) {
          almacenarEnLocalStorage('profesionalSeleccionado', profesional);
          cargarDatosEnPagina(profesional);
        } else {
          console.error('No se encontró el profesional con el ID proporcionado.');
        }
      })
      .catch(error => {
        console.error('Error al cargar los datos desde el JSON:', error);
      });
  });

function almacenarEnLocalStorage(valor, data) {
    localStorage.setItem(valor, JSON.stringify(data));
}

function cargarDatosEnPagina(datos) {
    const container = document.getElementById('detalle-container');
    if (!container) {
      console.error('No se pudo encontrar el contenedor de detalles.');
      return;
    }
  
    container.innerHTML = '';
  
    const nombre = document.createElement('h2');
    nombre.textContent = datos.nombre;
  
    const especialidad = document.createElement('p');
    especialidad.textContent = 'Descripción: ' + datos.especialidad;
  
    const imagen = document.createElement('img');
    imagen.src = datos.imagen;
    imagen.alt = 'Imagen del Profesional';
  
    const detalle = document.createElement('p');
    detalle.textContent = 'Detalle: ' + datos.detalle;
  
    const Contacto = document.createElement('p');
    Contacto.textContent = 'Contacto: ' + datos.Contacto;
  
    container.appendChild(nombre);
    container.appendChild(especialidad);
    container.appendChild(imagen);
    container.appendChild(detalle);
    container.appendChild(Contacto);
}
