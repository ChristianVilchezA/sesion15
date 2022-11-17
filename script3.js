/*     EJERCICIO 3 
=======================
*/


let trabajador = prompt("Ingrese Nombre del Trabajador:")
let sueldo = +prompt("Ingrese Sueldo Básico:")
let Nhijos = +prompt("N° de Hijos:")

if (Nhijos >= 1){
    let bonificacion = sueldo * 0.07
    alert (`El trabajador si recibe Bonificación`) 
    document.write ("Nombre del Trabajador: ")
    document.write (trabajador)
    document.write ("<br>")
    document.write ("Sueldo Base:")
    document.write (sueldo)
    document.write ("<br>")
    document.write ("N° de Hijos: ")
    document.write (Nhijos)
    document.write ("<br>")
    document.write ("Bonificación: ")
    document.write (bonificacion)
    document.write ("<br>")
} else {
    alert (`El trabajador no recibe Bonificación`)
    document.write ("Nombre del Trabajador: ")
    document.write (trabajador)
    document.write ("<br>")
    document.write ("Sueldo Base:")
    document.write (sueldo)
    document.write ("<br>")
    document.write ("N° de Hijos: ")
    document.write (Nhijos)
    document.write ("<br>")
    document.write ("Bonificación: ")
    document.write (bonificacion)
    document.write ("<br>")
}
