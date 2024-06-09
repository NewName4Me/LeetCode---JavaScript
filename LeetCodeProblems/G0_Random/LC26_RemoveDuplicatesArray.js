/*
https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/

Eliminar los numeros repetidos de un array ordenado
*/

//#region MI SOLUCION ORIGINAL

/**
 * basicamente para resolverlo vamos a crear otro array donde iremos metiendo los numeros de nuestro array uno a uno, pero antes 
 * comprobamos si este los contiene ya, si ya lo contiene no lo metemos , si no lo metemos
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let numsFinal=[];

    nums.forEach(num=>{
        //comprobamos si hemos añadido ya este numero o no
        if(!numsFinal.includes(num)){
            numsFinal.push(num);
        }
    });

    return numsFinal;
};

//EJEMPLOS:
const nums1 = [1, 1, 2, 2, 3, 3, 4, 5, 5];
const nums2 = [2, 3, 4, 5, 6, 6, 7, 8, 8, 9];

console.log(removeDuplicates(nums1)); // Salida esperada: [1, 2, 3, 4, 5]
console.log(removeDuplicates(nums2)); // Salida esperada: [2, 3, 4, 5, 6, 7, 8, 9]

//#region CORRECION
/**
 * el problema quiere que eliminemos los duplicados en el propio array no en la copia y que devolvamos la longitud del nuevo array
 */

/**
 * COMO FUNCIONA: 
 * recorremos todo nuestro array, y dado que estamos trabajando en una lista ordenada
 * los valores repetidos apareceran uno al lado del otro, por tanto comprobamos una posicion con su 
 * anterior, y en caso de que sean la misma lo que hacemos es solamente escribir o mejor dicho
 * sobreescribir el mismo valor en la misma posicion, de esta forma no hace falta 
 * que eliminemos este valor como tal y el resultado es el mismo, esto se puede hacer porque 
 * loos array en javascript no tienen un tamaño fijo(como en lenguajes como java),
 *  si no que es dinamico
 * @param {*} nums 
 * @returns 
 */
var removeDuplicatesCorreccion = function (nums){
    if(nums.lenght ===0) return 0; //si el array nos lo dan vacio devolvemos 0

    //este indice controla que no se repita ninguna valor
    let index = 1; 

    for(let i = 1;i<nums.lenght;i++){
        //comprobamos que el numero que estamos viendo ahora es igual o no al anterior (esto funciona porque estmaos trabajando sobre un array ordenado)
        if(nums[i]!==nums[i-1]){
            //sobreescrivimmos el valor
            nums[index]=nums[i];
            //cambiamos de posicion
            index++;
        }
    }

    return index;
};