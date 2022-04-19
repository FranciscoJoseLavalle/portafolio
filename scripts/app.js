// Variables
const contenedor = document.querySelector('.main__proyectos-listado');
const boton = document.querySelector('.btnVisible');

// Array de proyectos
let proyectosMostrados = [];

const proyectos = [
    { nombre: 'Finanzas', lenguajes: 'HTML5, CSS3, GIT, JavaScript', enlace: 'https://finanzaspersonales.netlify.app/', imagen: './img/finanzas.webp'},
    { nombre: 'Blog de cubos', lenguajes: 'HTML5, CSS3, SASS, GIT, Bootstrap5 y JavaScript', enlace: 'https://cubosveloces.netlify.app/', imagen: './img/cubo.webp' }
];

const proyectitosOcultos = [
    { nombre: 'Wordle', lenguajes: 'HTML5, CSS3 y JavaScript', enlace: 'https://franciscojoselavalle.github.io/wordlefran/', imagen: './img/wordle.webp' },
    { nombre: 'Blog de café', lenguajes: 'Incluye HTML5 y CSS3', enlace: 'https://cafeblogterminado.netlify.app/', imagen: './img/cafe.webp'}
];

// Eventos

// Evento para mostrar los proyectos ocultos
document.addEventListener('DOMContentLoaded', () => {
    proyectosMostrados = [...proyectos];
    escribirHTML();
})

boton.addEventListener('click', () => {
    mostrarProyectos();
});

function escribirHTML() {
    contenedor.textContent = '';
    proyectosMostrados.forEach(element => {
        // Crear los elementos
        const div = document.createElement('div');
        const separador = document.createElement('div');
        const img = document.createElement('img');
        const button = document.createElement('button');
        const a = document.createElement('a');
        const p = document.createElement('p');
        
        // Asignar propiedades
        div.classList.add('main__proyectos-cont');
        div.setAttribute('data-aos', "fade-up");
        div.append(separador);
        img.src = element.imagen;
        separador.append(img);
        button.classList.add('boton', 'botonProyectos');
        separador.append(button);
        a.textContent = element.nombre;
        a.href = element.enlace;
        a.target = '_blank'
        button.append(a);
        p.textContent = element.lenguajes;
        div.append(p);

        // Asignarlos al contenedor
        contenedor.append(div);
    })
};

function mostrarProyectos() {
    if (proyectosMostrados.length == 2) {
        proyectosMostrados = [...proyectos, ...proyectitosOcultos];
        boton.textContent = 'Ver menos';
    } else if (proyectosMostrados.length != 2) {
        proyectosMostrados = [...proyectos];
        boton.textContent = 'Ver más'
    }
    escribirHTML();
}