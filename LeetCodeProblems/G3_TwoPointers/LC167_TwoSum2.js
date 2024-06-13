/* 
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/
*/

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
//region Passed But Too Long
var twoSum = function (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    let salida = [];
    while (left < right) {
        const complemento = target - numbers[left];

        if (numbers.includes(complemento)) {
            while (numbers[right] !== complemento) {
                right--;
            }
            salida.push(left + 1);
            salida.push(right + 1);
            return salida;
        }

        left++;
    }
};

const numb1 = [2, 7, 11, 15];
const target1 = 9;
const numb2 = [2, 3, 4];
const target2 = 6;
const numb3 = [0, 0, 3, 4];
const target3 = 0;

/* console.log(twoSum(numb1, target1));
console.log(twoSum(numb2, target2)); */
//region Solucion Pointers 
//49 ms beats 88.93%
function twoSumV2(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        const suma = numbers[left] + numbers[right];

        if (suma > target) {
            right--;
        } else if (suma < target) {
            left++;
        } else {
            return [left + 1, right + 1];
        }
    }
}

console.log(twoSumV2(numb1, target1));
console.log(twoSumV2(numb2, target2));
console.log(twoSumV2(numb3, target3));