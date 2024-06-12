/* 
https://leetcode.com/problems/valid-palindrome/description/

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

*/

//region Solucion 1
/* 
Eliminar espacios del texto
Convertirlo a array
Usar reverse
Comparar reverse con original
*/

//region Solucion 2 Pointers
/* 
Recorrer usando dos punteros que saltan espacios
Revertirlo en el recorrido y comparar
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    let newString = '';

    //obtenemos el string sin espacios ni simbolos, solo caracteres
    for (let i = 0; i < s.length; i++) {
        if (isLetterOrNumber(s[i])) {
            newString += s[i];
        }
    }

    return newString.split("").reverse().join("").toLowerCase() === newString.toLowerCase();

};

function isLetterOrNumber(char) {
    return /^[a-zA-Z0-9]$/.test(char);
}

const ejemplo1 = 'A man, a plan, a canal: Panama';
const ejemplo2 = 'a.';
console.log(isPalindrome(ejemplo1));
console.log(isPalindrome(ejemplo2));

