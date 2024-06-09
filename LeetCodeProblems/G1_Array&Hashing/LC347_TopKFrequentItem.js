/* 

https://leetcode.com/problems/top-k-frequent-elements/description/

Tienes dos entradas:

    Un array de números enteros llamado nums.
    Un número entero llamado k.

El objetivo es devolver los k elementos más frecuentes del array nums. Los elementos más frecuentes son aquellos que aparecen 
más veces en el array. El resultado puede estar en cualquier orden, no es necesario que sigan un orden específico.

Ejemplos:

    Ejemplo 1:
        Entrada: nums = [1,1,1,2,2,3], k = 2
        Salida: [1, 2]

    En este ejemplo, el número 1 aparece tres veces, el número 2 aparece dos veces y el número 3 aparece una vez. Los dos 
    números que más frecuentemente aparecen son 1 y 2.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const mapa= new Map();

    //añado al mapa cuantas veces aparece cada numero
    nums.forEach(numero=>{
        if(mapa.has(numero)){
            mapa.set(numero,mapa.get(numero)+1);
        } else{
            mapa.set(numero,1);
        }
    });

    //los convierte a un array àra ordenarolos
    const arrayDeFrecuencias = Array.from(mapa.entries());
    arrayDeFrecuencias.sort((a,b)=>b[1]-a[1]);
    //una vez ordenados tomo los que me dan como parametro, pero solo las claves sin el valor
    const salida = arrayDeFrecuencias.slice(0,k).map(keys=>keys[0]);

    return salida;
};


let nums = [1,1,1,2,2,3];
let k=2;
console.log(topKFrequent(nums,k));