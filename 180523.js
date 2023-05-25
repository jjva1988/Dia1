// Este es el primer comentario
// Este es el segundo comentario
// Soy un comentario de una sola línea

/* Este es un comentario de varias líneas.

Los comentarios multilínea pueden tomar múltiples líneas.

JavaScript es el lenguaje de la web
*/

var text = "Hola, me llamo Manz";
var number = 42;
var boolean = true;
var notDefined;   // undefined
let array = [];

console.log(typeof text);       // "String"
console.log(typeof number);     // "Number"
console.log(typeof boolean);    // "Boolean"
console.log(typeof notDefined); // undefined
console.log(typeof array);

// DECLARACION
function saludar() {
    return console.log("Hola-informativo");
    console.warn("Hola - advertencia");
    console.error("Hola - error");
    //console.clear();  // borrar o limpiar

  }
  let saludos = function (){
    return console.info("saludos.");

  }

  let saludosequivalente = () => {
    return console.log("saludo por arrow function");
   }
  saludar();
  saludos();
  saludosequivalente();

  // Función autoejecutable
(function () {
    console.log("Función autoejecutable");
  })();

  console.log('Hola', 'Mundo', '!')
console.log('FELIZ', 'AÑO', 'NUEVO', 2020)
console.log('Bienvenido', 'a', 30, 'Días', 'de', 'JavaScript')

console.log("¡Hola, Mundo!")
console.log('¡Hola, Mundo!')
console.log(`Hola, Mundo!`)

console.log(2 + 3) // Adición
console.log(3 - 2) // Sustracción
console.log(2 * 3) // Multiplicación
console.log(3 / 2) // División
console.log(3 % 2) // Módulo - encontrar el resto
console.log(3 ** 2) // Exponencial

// Declarando diferentes variables de diferentes tipos de datos
let nombre = 'walker' // nombre de una persona
let apellido = 'robben' // apellido de una persona
let país = 'Finland' // país
let ciudad = 'Helsinki' // ciudad capital
let edad = 100 // edad en años
let estaCasado = true
let conjuntoDatos = [nombre, apellido, país, ciudad, edad, estaCasado];

console.log(nombre, apellido, país, ciudad, edad, estaCasado)
console.warn(conjuntoDatos);


// Las variables también pueden ser declaradas en una línea separada por una coma
let nombre2 = 'Asabeneh', // nombre de una persona
trabajo = 'profesor',
viveEn = 'Finlandia';
console.log(nombre, trabajo, viveEn);


