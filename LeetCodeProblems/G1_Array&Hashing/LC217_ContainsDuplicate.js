/*
https://leetcode.com/problems/contains-duplicate/description/

devolver true si al menos un valor está repetido

nota importante que acabo de aprender, en un forEach un return no interrumpe su ejecucion
por eso usamos un for of

utilizamos un Set como "diccionario " dado que solo contiene valores unicos

La logica de este problema es sencilla, recorremos cada valor de nuestro array y lo añadimos 
a otra lista, en este caso un set porque almacena valores unicos pero tambien podriamos un
array, el set solo añade seguridad de que no repitamos valores,y comprobamos, si 
nuestro diccionario de valores ya contiene algun valor que estemos mirando nos 
devuelve true, si al final de mirar todos no se repite ninguno devolvemos false
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dictionary=new Set();

    for(let item of nums){
        if(dictionary.has(item))return true;
        dictionary.add(item);
    }
    return false;
};
console.log(containsDuplicate([1,2,3,1]));
console.log(containsDuplicate([1,2,3,4]));
console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]));


