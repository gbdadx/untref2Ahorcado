const palabras = ['murcielago', 'algebra', 'alfombra', 'independencia']
const largo = palabras.length;

let aleatorio = palabras[Math.floor(Math.random() * palabras.length)];

const abcd = document.querySelector('.abc')
let teclado = '';

let contadorErrores = 0;
const imagenes = [
    './imgAhorcado/horca.png',
    './imgAhorcado/horcaCabeza.png',
    './imgAhorcado/horcaCuerpo.png',
    './imgAhorcado/horcaBrI.png',
    './imgAhorcado/horcaBrD.png',
    './imgAhorcado/horcaPiz.png',
    './imgAhorcado/horcaPde.png',
    './imgAhorcado/ahorcado.png'
];


function teclador() {//arma teclado con ascii
    for (let i = 97; i <= 122; i++) {
        let letra = String.fromCharCode(i);
        teclado += `<button id='btn_${i}' class='btn_tecla'>${letra}</button>`

    }
}
teclador()
abcd.innerHTML = teclado; //agrega el teclado a la pagina
let guion = [];
let guiones = document.querySelector('.guiones');
let aleatorio2 = aleatorio.split('');

// Crear un nuevo array con guiones basado en la longitud de aleatorio2
guion = aleatorio2.map(() => ' _ ');

console.log(guion);

// Convertir el array de guiones en una cadena
let guionString = guion.join('');

// Agregar la cadena de guiones al elemento HTML
guiones.textContent = guionString;

/**
 * eventos
 */

let listaOK = []
for (let e of aleatorio) {
    listaOK.push('_');
}

let listaNo = [];
let contador = 0;

const teclado2 = document.querySelectorAll('.btn_tecla');
teclado2.forEach((t) => {
    let letra = t.id;
    letra = letra.slice(4)
    letra = parseInt(letra)
})

teclado2.forEach((t) => t.addEventListener('click', () => {
    //trabajo con la tecla
    var cadena = '';
    let letra = t.id.slice(4); // toma el numero desde el id
    letra = parseInt(letra);//lo convierte en numero

    let letra2 = String.fromCharCode(letra);//ese numero lo convierte en caracter ascii, en letra
    contador++;

    console.log(`contador ${contador}`);
    //busca si la letra esta en la cadena seleccionada al azar 'aleatorio'
    if (aleatorio.includes(letra2)) {

        for (var i = 0; i < aleatorio.length; i++) {
            if (letra2 == aleatorio[i]) {
                listaOK[i] = letra2;
                console.log(`listaOK: ${listaOK}`)
                cadena = listaOK.join(' ');
                guiones.textContent = cadena;
            }
        }
    } else {
        // Incrementa el contador de errores
        contadorErrores++;
        let contImg = document.querySelector('#imagen')
        var im = imagenes[contadorErrores]
        contImg.setAttribute('src', im);

        listaNo.push(letra2);

        console.log(`listaNo: ${listaNo}`)
    }
    console.log(`longitud palabra misteriosa: ${aleatorio.length}`)

    if (!listaOK.includes('_')) {
        // Agregar un retraso al mensaje de confirmación
        setTimeout(function () {
            if (confirm(`¡GANASTE! fueron ${contador} intentos  ¿Quieres reiniciar el juego?`)) {
                location.reload();
            }
        }, 1000);
        // Cambia 1000 a la cantidad de milisegundos que desees de retraso
    }
    if (contadorErrores == imagenes.length - 1) {
        // Agregar un retraso al mensaje de confirmación de derrota
        setTimeout(function () {

            if (confirm(`Has superado los  intentos . ¡Perdiste! ¿Quieres reiniciar el juego?`)) {
                location.reload();
              
            }
        }, 1000);
    }
}));

console.log(`contador: ${contador}`)
console.log(listaOK)

/**
 * boton reset
 */
const reset = document.querySelector('.btn-reset');
reset.addEventListener('click', () => {
    location.reload();
})



