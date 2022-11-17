/*     EJERCICIO 1 
=======================
*/

let importe = +prompt("Ingresa el Importe de Compra:")

if (importe >= 150){
    let descuento = importe * 0.12 
    let nuevoImporte = importe - descuento
    alert (`Descuento Otorgado: S/.${descuento} , El Importe a Pagar es: S/.${nuevoImporte}`)
} else {
    alert (`No tiene Descuento, El Importe a Pagar es: S/.${importe}`)
}