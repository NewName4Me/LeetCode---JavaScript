/*
 2620. Crea una funcion que cuente cuantas veces se invoca una funcion

https://leetcode.com/problems/counter/description/?envType=study-plan-v2&envId=30-days-of-javascript

Es decir, tenemos una funcion que llama a otra funcion interna, cuando la llamamos por primera vez
devuelve n y cada vez que se llama devuelve n+1, es decir si al principio le dimos el valor
10, devolvemos 10, pero si la llamamos por segunda vez devolvemos 10+1=11
*/


//#region SOLUCION

/**
 * 
 * @param {*} n 
 * @return {Function} counter
 */
var createCounter = function (n) {
    return function () { /* esta funcion tiene acceso a variables descritas en createCounter function */
        return n++;
    }
}

const counter = createCounter(10);
counter(); //10
counter(); //11
counter(); //12

//#region PROFUNDIDAD
/* para demostrar que esto es una forma de programación orientda a obejtos POO vamos a ver lo siguiente */

/* esta funcion es axactamente lo mismo que era la anterior para mostrar que la funcion interna puede acceder a la informacion de la funcion que la contiene */
var createCounter2 = function (n) {
    let count = n;
    return function () {
        return count++;
    }
}

class Counter {
    constructor(n) {
        this.n = n;
    }

    increment() { /* esto es una funcion, en javascript no hace falta escribir function para las  clases */
        return this.n++;
    }
}
const counter2 = Counter(10);
counter2.increment();//10
counter2.increment();//11
counter2.increment();//12