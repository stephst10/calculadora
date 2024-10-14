function igual() {
    const numero = getElementById('numero');
    const resultado = document.getElementById('resultado')

    resultado.textContent += numero;
}
igual()

const somar = document.getElementById('somar');

somar.addEventListener('click', async () => {

})

function somar(a, b) {
    return a + b;
}

function diminuir(a, b) {
    return a - b
}

function multiplicar(a, b) {
    return a * b
}

function dividir(a, b) {
    return a / b
}
