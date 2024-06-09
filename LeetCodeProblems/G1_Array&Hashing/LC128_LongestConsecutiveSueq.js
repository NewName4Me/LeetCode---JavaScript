/* 
https://leetcode.com/problems/longest-consecutive-sequence/description/

Input: nums = [100,4,200,1,3,2]
Output: 4


Planteamiento : una secuencia se produce cuando tenemos varios numeros seguidos, lo que queremos saber es como de larga
fue la más larga, no cual fue, por tanto lo que necesitamos es un contador...
Primero para hacer todo más sencillo ordenamos los numeros para poder distinguir quien va delante y quien va detras
Miramos todos los numeros uno a uno comprobando si el numero que se encuentra delante del que estamos mirando actualmente
es secuencia de este, si es asi sumamos un contador, si no es así quiere decir que no estamos en secuencia o que esta la 
acabamos de romper
por ultimo hay casos donde tenemos por ejemplo 0,1,1,2... para el codigo que hicimos abajo
el que tengamos un numero repetido en mitad de secuencia nos romperia esta, por tanto hacemos un comprobacion
al principio de si el numero de delante es igual al actual y en caso de ser así lo saltamos

95ms 87.44%beats
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    nums.sort((a, b) => a - b);
    let secuenciaActual = 1;
    let secuenciaMaxima = 0;

    for (let i = 0; i < nums.length; i++) {
        //en caso de que tengamos numeros repetidos, nuestra secuencia seguirá pero como rompe nuestro codigo de debajo
        // lo que hacemos es saltarlo para este caso y que no reinicie nuestro contador
        if (nums[i] === nums[i + 1]) {
            continue;
        }

        //cuando tenemos una secuencia aumentamos el contador
        if (nums[i] + 1 === nums[i + 1]) {
            secuenciaActual++;
        } else {
            //cuando la secuencia se rompe reiniciamos el contador
            secuenciaActual = 1;
        }

        //comprobamos si la nueva secuencia encontrada en más grnade que la que almacenamos anteriormente
        if (secuenciaActual > secuenciaMaxima) secuenciaMaxima = secuenciaActual;
    }

    return secuenciaMaxima;
};

const ejemplo1 = [100, 4, 200, 1, 3, 2];
const ejemplo2 = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1];
const ejemplo3 = [1];
const ejemplo4 = [];
const ejemplo5 = [1, 2, 0, 1]; //caso de salto

console.log(longestConsecutive(ejemplo1)); //4
console.log(longestConsecutive(ejemplo2)); //9
console.log(longestConsecutive(ejemplo3)); //1
console.log(longestConsecutive(ejemplo4)); //0
console.log(longestConsecutive(ejemplo5)); //3