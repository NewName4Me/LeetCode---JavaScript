/**
https://leetcode.com/problems/valid-anagram/description/

comprobar si dos palabras dadas son o no un anagrama, es decir, una palabra se 
puede formar usando las mismas letras que la anterior

el planteamiento es sencillo:
    si una palabra es una anagrama de otro, cuando ordenas por letras estas palabras
    deben tener exactamente las mismas letras en el mismo orden,
    por lo que si ordenamos las letras ylas comparamos sabremo si es o no un anagrama
    pero para ordenarlas quiero usar el metodo sort() y no hacer yo mi propio metodo
    por eso antes convierto ambas palabras a array y luegos las vuelvo a juntar
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.split("").sort().join("")==t.split("").sort().join("");
};
console.log(isAnagram('cat','atc'));