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

*/
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


console.timeEnd ('tiempo')