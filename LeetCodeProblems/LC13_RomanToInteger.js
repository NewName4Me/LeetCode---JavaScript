/*
https://leetcode.com/problems/roman-to-integer/
Crear una funcion donde das como String un numero romano y lo convierte a decimal

*/

//#region MI SOLUCION ORIGINAL

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


//#region SOLUCION HASH TABLE
/*
solucion proporcionada por : https://leetcode.com/problems/roman-to-integer/solutions/2706813/js-hash-table-with-exlanation/


*/
let romantoIntHashTable=function(s){
    let resultado=0;

    //creamos un objeto que contiene el valor de nuestros letras
    const simbolo={
        'I':1,
        'V':5,
        'X':10,
        'L':50,
        'C':100,
        'D':500,
        'M':1000
    }

    for(let i = 0; i < s.length; i++){
        //asignamos a dos variables una posicion de caracter en nuestro numero romano y le indicamos que pertenecen al objeto simbolo para que sepan su valor
        const actual=simbolo[s[i]];
        const siguiente=simbolo[s[i+1]];

        //segun cual de los dos sea más alto nos suma o nos resta, le verdad mas simple que lo mio
        if(actual<siguiente){
            resultado+=siguiente-actual;
            i++;
        }else{
            resultado+=actual;
        }
    }

    return resultado;
};

//probar si funciona
console.log(romanToInt("III")); // Output: 3
console.log(romanToInt("IV")); // Output: 4
console.log(romanToInt("IX")); // Output: 9
console.log(romanToInt("LVIII")); // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994