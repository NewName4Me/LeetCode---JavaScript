/*
https://leetcode.com/problems/climbing-stairs/

Tenemos que averiguar el numero de formas distintas que podemos subir unas escaleras,
es decir, nos dicen cuantos escalones tenemos que subir, y teniendo en cuenta
que podemos subir de 1 en 1 o de 2 en 2 o mezclando cada vez, cuantas posibilidades hay

Escalones       Posibilidades
    1               1
    2               2
    3               3
    4               5
    5               8

    Si nos damos cuenta coincide con la sucesion de fibonnaci
*/

//#region RECURSIVIDAD - MALA IDEA
/**
 * esta version esta resuelta por recursividad por lo tanto funciona pero es muy muy lento
 * para mejorarla deberiamos recurrir a "memoization" y "tabulation" para hacerla así más eficiente
 * como si fuera un problema de programacion dinamica, pero para hacerlo más simple vamos a darlo
 * otro enfoque
 * 
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n){
    if(n<=1) return 1;
    return climbStairs(n-1)+climbStairs(n-2);
};

console.log(climbStairs(5)); //8
console.log(climbStairs(7)); //21
console.log(climbStairs(40)); //no da tiempo a que nos de algo, sin memoria antes

//#region PSUDO-POINTERS
/**
 *  la ventaja de este enfoque frente al otro es que solo necesita utilizar tres direcciones de memoria
 * mientras que el otro aumenta de forma exponencial dado que no utilizamos programacion dinamica
 * de manera adecuada
 * @param {number} n 
 * @returns 
 */
var climbStairs2 = function(n){
    if(n<=1) return 1;

    let prev = 1;
    let curr = 1;

    for(let i = 2;i<=n;i++){
        let next =prev+curr;
        prev=curr;
        curr=next;
    }

    return curr;
};

console.log(climbStairs2(5)); //8
console.log(climbStairs2(7)); //21
console.log(climbStairs2(50)); //20365011074