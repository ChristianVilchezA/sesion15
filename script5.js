/*     EJERCICIO 5
=======================
*/

var numero = +prompt("Ingrese Numero:")
var resultado = numero

for (var i = 1; i < numero; i++ ) {
    var resultado = resultado * i 
    document.write (i) 
    document.write (" x ") 
}
document.write (i) 
document.write (" = ") 
document.write (resultado) 
alert (`El factorial de ${numero}! es: ${resultado}`)