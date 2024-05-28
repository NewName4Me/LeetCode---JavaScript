/*
https://leetcode.com/problems/two-sum/

nos dan un array y un objetivo, tenemos que buscar que dos numeros sumados del array
dan ese objetivo y devolver sus posiciones asumiendo
que hay solo una posciion posible para cada array
*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //un mapa almacena tanto el numero como su posicion
    const numIndices = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const complemento = target - nums[i];
        
        //si el complemento ya esta en el mapa tenemos la solucion
        if (numIndices.has(complemento)) {
            return [numIndices.get(complemento), i];
        }
        
        //si no esta complemento lo agregaomos
        numIndices.set(nums[i], i);
    }
    
    return [];
};


let numsIn=[3,2,4];
let targetIn=6;
console.log(twoSum(numsIn,targetIn));