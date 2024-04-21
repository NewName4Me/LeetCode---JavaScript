/*
https://leetcode.com/problems/roman-to-integer/
Crear una funcion donde das como String un numero romano y lo convierte a decimal

*/

/**
 * Esta funcion se encarga de convertir nuestro numero romano en decimal
 * 
 * @param {String} s
 * @returns {Number} 
 */
function romanToInt(s) {
    let sum = 0;
    let charSComp = ''; //esta variable sirve para comparar el caracter que tenemos ahora mismo con el siguiente para las excepciones donde debemos restar

    //recorremos todas las letras de nuestro numero romano
    for (let i = 0; i < s.length; i++) { 
        const charS = s.charAt(i);

        //estas son las situaciones especiales donde en lugar de sumar numeros se restan
        if ((charSComp === 'I') && (charS === 'V' || charS === 'X')) {
            sum -= 2;
        } else if ((charSComp === 'X') && (charS === 'L' || charS === 'C')) {
            sum -= 20;
        } else if ((charSComp === 'C') && (charS === 'D' || charS === 'M')) {
            sum -= 200;
        }

        //todas las posibilidades donde debemos sumar
        switch (charS) {
            case 'I': sum++; break;
            case 'V':sum += 5;break;
            case 'X':sum += 10;break;
            case 'L':sum += 50;break;
            case 'C':sum += 100;break;
            case 'D':sum += 500;break;
            case 'M':sum += 1000;break;
        }

        charSComp = charS; //le digo a el caracter de comparacion que sea igual que el caracter actual para que ahora en la siguiente vuelta siga estando uno por detrás
    }

    return sum;
}

// Ejemplo de uso:
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("IV")); // Output: 4
console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994
