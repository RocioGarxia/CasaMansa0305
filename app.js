/*let confidencialidad = prompt("Ingrese nivel de confidencialidad del email")

 if (confidencialidad === 'Alta') {
     document.write ("<p>Este email es extremadamente confidencial. No reenviar. </p>")
}

else if (confidencialidad === "Media") {
    document.write ("<p>Este email es confidencial. Sólo reenviar a destinatarios dentro de la organización.</p>")
}

else if (confidencialidad === "Baja") {
    document.write ("<p>Este email no contiene contenido sensiblemente confidencial.</p>")
}

else {
    document.write ("<p>Este email no es confidencial y puede ser reenviado según sea la necesidad.</p>")
} 


console.time ('tiempo')

let confidencialidad = prompt('Ingrese nivel de confidencialidad del email')

while (confidencialidad !== 'ESC') {
    switch (confidencialidad) {

    case 'alta':
    alert('Este email es extremadamente confidencial. No reenviar.');
    break;

case 'media':
    alert('Este email es confidencial. Sólo reenviar a destinatarios dentro de la organización.');
    break;

case'baja':
    alert("Este email no contiene contenido sensiblemente confidencial.");
    break;

case "ninguna":
    alert("Este email no es confidencial y puede ser reenviado según sea la necesidad.")
    break;

default:
    alert("Ingresa un nivel de confidencialidad para este mail")
    break;

}

confidencialidad = prompt ("Ingresar nivel de confidencialidad del email")
}

let metodoPago = prompt('efectivo | cheque | tarjeta')
switch (metodoPago) {

    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`)
        break;

    case 'cheque':
        console.log(`Pagaste con ${metodoPago}`)
        break;

    default:
        console.log(`Metodo de pago invalido`)
        break;
}


console.timeEnd ('tiempo') */
/*
function calculadora(num1, num2, operacion) {
    switch (operacion) {

        case "+":
            return num1 + num2;
            break;

        case "-":
            return num1 - num2;
            break;


        default:
            return 0;
            break;

    }
}

console.log(calculadora(10, 5, "*"));


function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
let resultado = sumar(5, 8);

/*
const suma = (a, b) => { return a + b };
const resta = (a, b) => a - b;
console.log(suma(15, 20));
console.log(resta(20, 5));
*/

/* Calcular costo total de productos y/o servicios seleccionados por el usuario. */

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

const iva = x => x * 0.21;
let precioProducto = 1790;
let precioOfertaLanzamiento = 48;
let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), precioOfertaLanzamiento);
console.log(nuevoPrecio);

/* Calcular valor final de un producto seleccionado en función de impuestos (IVA) y descuentos (oferta lanzamiento)*/

let resultado = 0
function sumar(primerNumero, segundoNumero) {
    resultado = primerNumero + segundoNumero;
}
sumar(1500,450);
console.log(resultado);

/* DESAFIO COMPLEMENTARIO 

let num1 = prompt("ingrese un numero")
let num2 = prompt("ingrese un numero")
let op = prompt("Querés quitar este nuevo artículo a tu carrito?")


function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "-":
            return primerNumero - segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}

console.log(num1)
console.log(num2)
console.log(op)

console.log(calculadora(num1, num2, op));

let result = (calculadora(num1, num2, op));

document.write (result)
*/