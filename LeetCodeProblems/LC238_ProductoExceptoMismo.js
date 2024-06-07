/* 
https://leetcode.com/problems/product-of-array-except-self/description/

Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]


//region FUNCIONA A MEDIAS
el problema de esta solucion inicial es que es muy muy ineficiente por lo que para arrays grandes excedemos el limite de tiempo
y pasamos 19 de 24 test
*/
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const answer = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            answer[i] = nums.reduce((total, numero) => total * numero, 1) / nums[i];
        } else {
            answer[i] = productoDeTodosMenosUnoMismo(nums, i);
        }

    }

    return answer;
};
//esta funcion previene que si algun numero de nuestra lista es 0 no falle
function productoDeTodosMenosUnoMismo(nums, targetIndex) {
    let productoDeTodos = 1;
    nums.forEach((element, index) => {
        if (index != targetIndex) productoDeTodos *= element;
    });
    return productoDeTodos;
}
console.log(productExceptSelf([1, 2, 3, 4]))
console.log(productExceptSelf([1, 2, 3, 0]))
console.log('----------------------')

//region SEGUNDA SOLUCION
/* la idea de esta solucion es para cada numero resolver
primero los valroes de un lado y luego el del otro */

//solucion 86ms vence al 97%
var productoDeTodosV2 = function (nums) {
    const productoTotalArray = nums.reduce((total, numero) => total * numero, 1);
    let arraySalida = [];


    for (let i = 0; i < nums.length; i++) {

        if (nums[i] !== 0) { //en caso de que el numero no sea ceero podemos simplemente devolver al calculo del total entre ese numero
            arraySalida.push(productoTotalArray / nums[i]);
            
        } else {
            //si el numero es cero damos el producto de los numeros de la izquierda por la derecha
            let productoPorLaDerecha = 1;
            let productoPorLaIzquierda = 1;

            for(let j = 0;j<i;j++){
                productoPorLaIzquierda *= nums[j];
            }
            for(let j = i+1;j<nums.length;j++){
                productoPorLaDerecha *= nums[j];
            }
            arraySalida.push(productoPorLaDerecha * productoPorLaIzquierda);
        }
    }

    return arraySalida;
}


console.log(productoDeTodosV2([1, 2, 3, 4]));
console.log(productoDeTodosV2([1, 2, 0, 4]));