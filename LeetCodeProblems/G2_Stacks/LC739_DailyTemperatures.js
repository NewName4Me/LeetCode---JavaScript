/* 
https://leetcode.com/problems/daily-temperatures/description/


Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

 

Example 1:

Input: temperatures = [73,74,75,71,69,72,76,73]
Output: [1,1,4,2,1,1,0,0]

Example 2:

Input: temperatures = [30,40,50,60]
Output: [1,1,1,0]

*/

import { Stack } from './Stack.js';

//region BruteForce 
/* funciona correctamente pero es un metodo muy lento por lo que solo pasamos 47/48 O(n^2) */
/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let distancia = 0;
    let intervalosTemperaturaCreciente = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        for (let j = i; j < temperatures.length; j++) {
            if (temperatures[j] > temperatures[i]) {
                intervalosTemperaturaCreciente[i] = distancia;
                break;
            }
            distancia++;
        }
        distancia = 0;
    }

    return intervalosTemperaturaCreciente;
};

const ejemplo1 = [73, 74, 75, 71, 69, 72, 76, 73];
const ejemplo2 = [30, 40, 50, 60];
const ejemplo3 = [30, 60, 90];
const ejemplo4 = [55, 38, 53, 81, 61, 93, 97, 32, 43, 78];

/* console.log(dailyTemperatures(ejemplo1)); //[1,1,4,2,1,1,0,0] bien
console.log(dailyTemperatures(ejemplo2)); //[1,1,1,0]   bien 
console.log(dailyTemperatures(ejemplo3)); //[1,1,0] bien 
console.log(dailyTemperatures(ejemplo4)); //[3,1,1,2,1,1,0,1,1,0] bien  */


//region Intento Version Mejorada
/**
 * 
 * @param {number[]} temperatures 
 */
function dailyTemperaturesV2(temperatures) {
    let stack = [];
    let intervalosTemperaturaCreciente = new Array(temperatures.length).fill(0);

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let idx = stack.pop();
            intervalosTemperaturaCreciente[idx] = i - idx;
        }
        stack.push(i);
    }
    return intervalosTemperaturaCreciente;
}

console.log(dailyTemperaturesV2(ejemplo1));