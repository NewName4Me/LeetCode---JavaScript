/* 
Problema:
    nos dan un array
    nos dan un rango
    Tenemos que decir dentro de ese array, que rango de numeros consecutivos suma mas

Ejemplo:
    [1, 4, 2, 10, 2, 3, 1, 0, 20]  
    rango : 4

    output 24 => 20+0+1+3 es la mayor suma posible de todas

Esta tecnica es para sliding window de tamaño fijo
*/

function maxSum(array, k) {

    if (array.length < k) return null;

    let maxSum = 0;

    // iteramos dentro de nuestra ventana
    for (let i = 0; i < k; i++) {
        maxSum += array[i];
    }

    let windowSum = maxSum;

    //deslizar la ventana
    for (let i = k; i < array.length; i++) {
        windowSum = windowSum + array[i] - array[i - k]; //añadir casilla siguiente eliminar casilla anterior
        maxSum = Math.max(windowSum, maxSum);
    }

    return maxSum;
}
const array = [1, 4, 2, 10, 2, 3, 1, 0, 20];
const k = 4;
console.log(maxSum(array, k)); //24