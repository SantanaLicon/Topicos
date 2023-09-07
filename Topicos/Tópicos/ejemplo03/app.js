const estudiantes = ['Ricardo', 'Julio', 'Daniela', 'Arlete'];
const titulo = document.createElement('h1');
titulo.innerHTML = 'FUNCIONES';

const borrar = document.createElement('h1');
borrar.innerHTML = 'BORRAR ESTUDIANTES';

document.body.appendChild(titulo);
document.body.appendChild(borrar);

const contenedorEstudiantes = document.createElement('div'); // Creamos un contenedor para los estudiantes
document.body.appendChild(contenedorEstudiantes);

titulo.addEventListener('click', () => {
  for (let estudiante of estudiantes) {
    const p = document.createElement('p');
    p.innerHTML = estudiante;
    contenedorEstudiantes.appendChild(p);
  }
});

borrar.addEventListener('click', () => {
  const estudiantesParaBorrar = contenedorEstudiantes.querySelectorAll('p');
  estudiantesParaBorrar.forEach(estudiante => {
    estudiante.remove(); // Eliminamos cada elemento <p> de la lista
  });
});