/*1º Se solicitan 10 números enteros comprendidos entre 1 y 500, estos números se almacenarán en un array.
• Almacenar todos los números en un array
• Almacenar en otro array los números comprendidos entre el 1 y 250
• Almacenar en otro array los números comprendidos entre el 251 y 500*/


//solicitar numeros enteros comprendidos entre 1 y 500

let arrayNumeros=[];
let cantNumeroSolicitados=4;

let arrayDel251al500=[];

const solicitarNumeros = () => {

        let numeros = parseInt(prompt("Ingrese 10 numeros (comprendidos entre 1 y 500"))
while (isNaN(numeros)|| numeros === 0 || numeros > 500 || numeros < 0){
            numeros = parseInt(prompt("Dato erroneo Ingrese 10 numeros (comprendidos entre 1 y 500"))
            //console.log('while',numeros)
            }

  return numeros          
       
}

//almacenarlos en un array

const arrayAlmacen=()=>{

   
    for (let i=0;i<cantNumeroSolicitados;i++){
        let vuelta=solicitarNumeros()
        arrayNumeros.push(vuelta)
    }

return arrayNumeros

}
console.log("Array almacen",arrayAlmacen())

//almacenar del 1 al 250 en un array

const comprensionNumeros250=()=>{
    let arrayDel1al250=[];
        arrayNumeros.forEach((item)=>{
            if(item<=250){
            arrayDel1al250.push(item); 
            }
        })
return arrayDel1al250
}
console.log("Array del 1 al 250",comprensionNumeros250())

//almacenar del 252 al 500 en otro array 

const comprensionNumeros500=()=>{
    let arrayDel251al500=[];
        arrayNumeros.forEach((item)=>{
            if(item>250){
            arrayDel251al500.push(item); 
            }
        })
return arrayDel251al500
}
console.log("Array del 251 al 500",comprensionNumeros500())


