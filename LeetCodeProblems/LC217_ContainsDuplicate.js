/*
https://leetcode.com/problems/contains-duplicate/description/

devolver true si al menos un valor está repetido

nota importante que acabo de aprender, en un forEach un return no interrumpe su ejecucion
por eso usamos un for of

utilizamos un Set como "diccionario " dado que solo contiene valores unicos
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


