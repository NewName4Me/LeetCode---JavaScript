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
/* console.log(isPalindrome(ejemplo1));
console.log(isPalindrome(ejemplo2));
 */

//region Solucion 1 V2 - One Linel
var isPalindromeV2 = function (s) {
    return s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase() === s.replace(/[^a-zA-Z0-9]/g, '').split("").reverse().join("").toLowerCase("");
}

/* console.log(isPalindromeV2(ejemplo1));
console.log(isPalindromeV2(ejemplo2)); */

//region Solucion 2 Pointers
/* 
Recorrer usando dos punteros que saltan espacios
Revertirlo en el recorrido y comparar
*/
var isPalindromeV3 = function (s) {
    /* s.toLowerCase().replace(/[^a-zA-Z0-9]/g, ''); */ /* supongamos que esto no lo podemos hacer */
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        while (left < right && !isLetterOrNumber(s[left])) {
            left++;
        }
        while (right > left && !isLetterOrNumber(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}
console.log(isPalindromeV3(ejemplo1));
console.log(isPalindromeV3(ejemplo2));