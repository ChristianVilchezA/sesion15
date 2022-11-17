/*     EJERCICIO 2 
=======================
*/

let alumno = prompt("Ingrese Nombre del Alumno:")
let notaParcial = +prompt("Ingrese Nota de Examen Parcial:")
let examenFinal = +prompt("Ingrese Nota de Examen Final:")
let promedioPrac = +prompt("Ingrese Nota de Promedio de Practicas:")

let Promedio = (notaParcial + examenFinal + examenFinal + promedioPrac) / 4

if (Promedio >= 11){
    document.write ("Nombre del Alumno: ")
    document.write (alumno)
    document.write ("<br>")
    document.write ("Nota de Examen Parcial: ")
    document.write (notaParcial)
    document.write ("<br>")
    document.write ("Nota de Examen Final: ")
    document.write (examenFinal)
    document.write ("<br>")
    document.write ("Nota de Promedio de Practicas: ")
    document.write (promedioPrac)
    document.write ("<br>")
    alert (`Promedio Final del Alumno: ${Promedio} , Aprobado`)
    document.write ("Promedio Final: ")
    document.write (Promedio)
} else {
    alert (`El alumno no se encuentra aprobado`)
}
