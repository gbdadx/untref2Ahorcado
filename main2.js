const palabras = ['murcielago', 'algebra', 'alfombra', 'independencia'];
const largo = palabras.length;

let aleatorio = palabras[Math.floor(Math.random() * palabras.length)];

const abcd = document.querySelector('.abc');
let teclado = '';

function teclador() {
    for (let i = 97; i <= 122; i++) {
        let letra = String.fromCharCode(i);
        teclado += `<button id='btn_${i}' class='btn_tecla'>${letra}</button>`;
    }
}
teclador();
abcd.innerHTML = teclado;

let guion = [];
let guiones = document.querySelector('.guiones');
let aleatorio2 = aleatorio.split('');

// Crear un nuevo array con guiones basado en la longitud de aleatorio2
guion = aleatorio2.map(() => '_');

console.log(guion);

// Actualizar la cadena de guiones en el elemento HTML
guiones.textContent = guion.join(' ');

/**
 * eventos
 */
let listaOK = [];
listaOK.length = aleatorio.length;
let listaNo = [];
let contador = 0;

const teclado2 = document.querySelectorAll('.btn_tecla');
teclado2.forEach((t) => {
    let letra = t.id;
    letra = letra.slice(4);
    letra = parseInt(letra);
});

teclado2.forEach((t) => t.addEventListener('click', () => {
    //trabajo con la tecla
    var cadenaOK = '';
    let letra = t.id.slice(4);
    letra = parseInt(letra);

    let letra2 = String.fromCharCode(letra);

    // Busca si la letra está en la cadena seleccionada al azar '

