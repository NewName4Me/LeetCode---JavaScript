/*
https://leetcode.com/problems/group-anagrams/description/

agrupar anagramas de un array
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

para que una palarba sea anagrama de otroa todas sus letras ordenadas son las mismas
asi que las ordeno una a una, los pongo en un map, poniendo como key 
las letras ordenadas y como value las palabras que tienen solo esas letras 
y las inserto en un array
*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const resultado = [];
    const grupos = new Map();

    for(let word of strs){
        let palabraOrdenadaPorLetras = word.split("").sort().join("");

        if(!grupos.has(palabraOrdenadaPorLetras)){
            grupos.set(palabraOrdenadaPorLetras,[]);
        }

        grupos.get(palabraOrdenadaPorLetras).push(word);
    }

    grupos.forEach(grupo=>resultado.push(grupo));

    return resultado;
};

let strs=["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));