const $form = document.querySelector('form');
const messageDiv = document.querySelector('.messageDiv');

$form.addEventListener('submit', handbleSubmit);

async function handbleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept' : 'application/json'
        }
    })
    if (response.ok) {
        this.reset();
        crearTexto();
        function crearTexto() {
            const p = document.createElement('p');
            p.classList.add('mensajeEnviado')
            p.textContent = 'Mensaje enviado satisfactoriamente';
            messageDiv.appendChild(p);
            setTimeout(() => {
                p.remove();
            }, 3000)
        }
    }
}