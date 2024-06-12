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
console.log(twoSum(numb1, target1));

const numb2 = [2, 3, 4];
const target2 = 6;
console.log(twoSum(numb2, target2));