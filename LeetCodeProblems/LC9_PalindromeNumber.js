/*
https://leetcode.com/problems/palindrome-number/description/
Comprobar si un numero es o no palindromo

*/

//#region MI SOLUCION ORIGINAL

/**
 * esta funcion recibe un numero como parametro y debemos indicar si este es un palindromo es decir, se lee igual del derecho que del reves
 * 
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xReversed = 0;
    let xCopy = x; //esta copia es necesaria, para comparar los valores revertidos no queremo utilizar la version que modificamos ahora de x

    while (x > 0) { //el bucle se ejecuta mientras aun haya digitos que procesar de X
        const digit = x % 10;
        xReversed = xReversed * 10 + digit;
        x = ~~(x / 10); //el simbolo de ~~ es lo mismo que usar un parseInt
    }

    return xReversed === xCopy;
};

console.log(isPalindrome(41));
console.log(isPalindrome(757));
console.log(isPalindrome(3993));

//#region REVERSE ARRAY¿¿¿