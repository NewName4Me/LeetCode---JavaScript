/* 
https://leetcode.com/problems/car-fleet/description/

Hay n coches a una distancia dada desde el punto de partida 0, viajando para alcanzar el objetivo en la milla target.

Se te dan dos arreglos de enteros, position y speed, ambos de longitud n, donde position[i] es la milla de partida del i-ésimo coche y speed[i] es la velocidad del i-ésimo coche en millas por hora.

Un coche no puede adelantar a otro coche, pero puede alcanzarlo y luego viajar junto a él a la velocidad del coche más lento.

Una flota de coches es un coche o coches viajando juntos. La velocidad de la flota de coches es la velocidad mínima de cualquier coche en la flota.

Si un coche alcanza una flota de coches en el objetivo, todavía se considerará parte de la flota de coches.

Devuelve el número de flotas de coches que llegarán al destino.

Planteamiento de la solución:
1. Combinar las posiciones y velocidades en un solo array de pares [posición, velocidad].
2. Ordenar los coches por sus posiciones en orden descendente (del más cercano al objetivo al más lejano).
3. Calcular el tiempo de llegada al objetivo para cada coche.
4. Utilizar una pila para mantener los tiempos de llegada de las flotas:
   - Si la pila está vacía o el tiempo de llegada del coche actual es mayor que el tiempo en la cima de la pila, 
     significa que este coche no alcanza a la flota delante de él y forma una nueva flota.
   - Si el tiempo de llegada del coche actual es menor o igual al tiempo en la cima de la pila, 
     significa que este coche se une a la flota representada por el tiempo en la cima de la pila.
5. El número de flotas es el tamaño de la pila.

Ejemplo:
Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
Explicación:
- Los coches que comienzan en las posiciones 10 (velocidad 2) y 8 (velocidad 4) se convierten en una flota, 
  reuniéndose en la posición 12. La flota se forma en el objetivo.
- El coche que comienza en la posición 0 (velocidad 1) no alcanza a ningún otro coche, por lo que es una flota por sí mismo.
- Los coches que comienzan en las posiciones 5 (velocidad 1) y 3 (velocidad 3) se convierten en una flota, 
  reuniéndose en la posición 6. La flota se mueve a una velocidad de 1 hasta llegar al objetivo.
*/

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    const stack = [];
    const positionSpeedCombined = position.map((key, index) => [key, speed[index]]);
    positionSpeedCombined.sort((a, b) => b[0] - a[0]);

    for (let momento of positionSpeedCombined) {
        let tiempoLlegada = (target - momento[0]) / momento[1];
        if (tiempoLlegada > stack[stack.length - 1] || stack.length === 0) {
            stack.push(tiempoLlegada);
        }
    }

    return stack.length;
};

const target1 = 12;
const position1 = [10, 8, 0, 5, 3];
const speed1 = [2, 4, 1, 1, 3];

console.log(carFleet(target1, position1, speed1)); //3