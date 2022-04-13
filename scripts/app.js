// Variables
const contenedor = document.querySelector('.main__proyectos-listado');
const btnVisible = document.querySelector('.btnVisible');
const btnOculto = document.querySelector('.btnOculto');
const proyectosOcultos = document.querySelector('.main__proyectos-listadoOculto')

// Array de proyectos
const proyectos = [
    { nombre: 'Blog de cubos', lenguajes: 'HTML5, CSS3, SASS, GIT, Bootstrap5 y JavaScript', enlace: 'https://cubosveloces.netlify.app/' },
    { nombre: 'Worlde', lenguajes: 'HTML5, CSS3 y JavaScript', enlace: 'https://franacho.github.io/wordlefran/' }
];

// Eventos

// Evento para mostrar los proyectos ocultos
btnVisible.addEventListener('click', () => {
    btnVisible.classList.add('btnVisibleOculto');
    btnOculto.classList.add('btnOcultoVisible');
    proyectosOcultos.classList.remove('main__proyectos-listadoOculto');
});

// Evento para ocultar los proyectos
btnOculto.addEventListener('click', () => {
    btnVisible.classList.remove('btnVisibleOculto');
    btnOculto.classList.remove('btnOcultoVisible');
    proyectosOcultos.classList.add('main__proyectos-listadoOculto');

});

// Bucle para crear los proyectos
for (let proyecto in proyectos) {
    const proyectosNombre = proyectos[proyecto].nombre;

    const div = document.createElement('div');

    for (let i = 0; i < proyectos.length; i++) {
        div.innerHTML = `
        <div class="main__proyectos-cont" data-aos="fade-up">
            <div>
            <img src="./img/code.png" alt="Icono Proyecto">
            <button class="boton botonProyectos"><a href="${proyectos[proyecto].enlace}" target="_blank">${proyectosNombre}</a></button>
            </div>
            <p>Incluye ${proyectos[proyecto].lenguajes}</p>
        </div>`;
        contenedor.append(div);
    };
};