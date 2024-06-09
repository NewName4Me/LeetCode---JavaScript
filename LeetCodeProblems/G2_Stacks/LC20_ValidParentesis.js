/* 
https://leetcode.com/problems/valid-parentheses/description/

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

 

Example 1:

Input: s = "()"
Output: true

Example 2:

Input: s = "()[]{}"
Output: true

Example 3:

Input: s = "(]"
Output: false

*/

import { Stack } from "../G2_Stacks/Stack.js";

/**
 * @param {string} s 
 * @return {boolean} 
 */
var isValid = function(s) {
    // Crear una instancia de la clase Stack
    const stack = new Stack();
    
    // Mapear los caracteres de cierre a sus correspondientes caracteres de apertura
    const closeToOpen = new Map([
        [")", "("],
        ["]", "["],
        ["}", "{"],
    ]);

    // Iterar sobre cada caracter de la cadena de entrada
    for (let character of s) {
        // Verificar si el caracter es un caracter de cierre
        if (closeToOpen.has(character)) {
            // Si el stack no está vacío y el caracter en la parte superior del stack es el paréntesis de apertura correspondiente
            if (!stack.isEmpty() && stack.peek() === closeToOpen.get(character)) {
                // Sacar el paréntesis de apertura del stack
                stack.pop();
            } else {
                // Si el stack está vacío o el paréntesis de apertura correspondiente no está en la parte superior del stack, la cadena es inválida
                return false;
            }
        } else {
            // Si el caracter es un paréntesis de apertura, agregarlo al stack
            stack.push(character);
        }
    }

    // La cadena es válida si el stack está vacío al final de la iteración
    return stack.isEmpty();
}

// Ejemplos de cadenas de entrada
const ejemplo1 = "()";
const ejemplo2 = "()[]{}";
const ejemplo3 = "(]";

// Pruebas de la función isValid con los ejemplos
console.log(isValid(ejemplo1)); // true
console.log('-------------------');
console.log(isValid(ejemplo2)); // true
console.log('-------------------');
console.log(isValid(ejemplo3)); // false

/*
Explicación detallada:
El problema implica determinar si una cadena de paréntesis está bien formada. Para hacer esto, iteramos a través de la cadena de entrada y usamos un stack para realizar un seguimiento de los paréntesis de apertura que encontramos. Cuando encontramos un paréntesis de cierre, verificamos si el paréntesis de apertura correspondiente está en la parte superior del stack. Si no está allí o si el stack está vacío, la cadena es inválida. Si coincide, retiramos el paréntesis de apertura del stack y continuamos. Al final, la cadena es válida si y solo si el stack está vacío.
*/ 
