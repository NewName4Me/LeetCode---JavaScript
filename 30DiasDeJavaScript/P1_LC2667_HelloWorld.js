/*
2667. Create Hello World Function

Tenemos que crear una función que nos devuelva otra función distinta que diga Hola Mundo
https://leetcode.com/problems/create-hello-world-function/description/?envType=study-plan-v2&envId=30-days-of-javascript

*/

//#region SOLUCION
let createHelloWorld = function() {
    
    return function(...args) {  
        return "Hello World";
    }
};

// Probar la funcion
const salida=createHelloWorld();
console.log(salida());

/* Para que tener una funcion dentro de otra funcion

    Reutilización de código: Puedes encapsular lógica común en una función externa y luego devolver funciones internas que realicen tareas específicas. Esto te permite escribir menos código y mantenerlo más organizado.

    Flexibilidad: Al devolver una función en lugar de simplemente calcular un valor, puedes crear herramientas que se puedan personalizar según las necesidades. Por ejemplo, puedes crear una función que genere otras funciones para sumar o multiplicar números por un valor específico. Esto te permite adaptar el comportamiento de tus funciones a diferentes situaciones sin tener que reescribir código.
*/

//#region EJEMPLO
/* Ejemplo:  */
function multiplicar(num1){
    return function(num2){
        return num1*num2;
    }
}

let multiplicarPor5=multiplicar(5);
console.log(multiplicarPor5(3));/* por raro que suene esto devuelve el valor 15 */