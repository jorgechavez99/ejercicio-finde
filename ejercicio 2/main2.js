
/*2º Se solicita al usuario el nombre y 2 notas de x alumnos:
Los almacenaremos en un array.
Sacaremos la media de cada alumno.
Mostraremos por pantalla la media más alta y el nombre del alumno que tenga dicha media.*/


//Necesito  tener una base de datos (Alumnos)

let arrayAlumnos = [];
let cantAlumnos = 3;

//Dentro de esa base tiene que estar clasificado cada alumno (en un array) con nota1, nota2 y media notas.

let nota1;
let nota2;
let resultado;
let arrayResultados=[];
let mostrarResultado;
//pedir un nombre

const nombreAlumno = () => {
    let nombre;
    nombre = prompt("ingrese nombre del Alumno")
    while (!isNaN(nombre)) {
        nombre = prompt("dato no valido, ingrese nombre del Alumno")
    }
    return nombre
}

//pedir nota 1
let primeraNota = () => {
    
    nota1 = parseFloat(prompt("ingrese la Primera Nota"));
    while (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
        nota1 = parseFloat(prompt("Dato no valido, ingrese la primera nota"));
    }
    return nota1
}

// pedir nota 2

let segundaNota = () => {
    
    nota2 = parseFloat(prompt("ingrese la Segunda Nota"));
    while (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
        nota2 = parseFloat(prompt("Dato no valido, ingrese la segunda nota"));
    }
    return nota2
}

// sacar la media 

const mediaNotas=()=>{

let notas=nota1+nota2;
media=notas/2;

return media
}
//console.log(mediaNotas())

//Elevar nombre nota1 nota2 y media a un array alumno

const totalAlumno = () => {
    for (let i = 0; i < cantAlumnos; i++) {
    arrayAlumnos.push([nombreAlumno(), primeraNota(), segundaNota(),mediaNotas()]);

    
    arrayAlumnos.forEach((item)=>{
        resultado=item[3]+" "+item.slice(0,1)     
    })
    arrayResultados.push(resultado)

    //console.log("resultado",arrayResultados)

 }
    return arrayAlumnos

}
console.log("ArraydatosAlumno",totalAlumno())

let pusheado=()=>{

}

const mediaAlta=()=>{
    
    mostrarResultado=arrayResultados.sort().reverse().slice(0,1)
    return mostrarResultado
}
console.log("Media mas Alta: ",mediaAlta())


document.write("Media mas Alta y Nombre del Alumno: ",mostrarResultado);

//Mostrar en Pantalla



/*
const mediaAlta=()=>{

    let resultado
    arrayAlumnos.forEach((item)=>{
        resultado=item[0]+item[3]        
    })
    console.log("resultado",resultado)
    return resultado


}
console.log("media alta: ",mediaAlta())

console.log(...arrayAlumnos)*/





/*
const itemAlto=document.querySelectorAll('#arrayAlumnos')

itemAlto.document

console.log(itemAlto)

*/



//Mostraremos en pantalla la media mas alta con el nombre del alumno.

