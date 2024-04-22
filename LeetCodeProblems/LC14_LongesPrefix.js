/*
https://leetcode.com/problems/longest-common-prefix/description/

Crear una funcion que dado un array de palabras nos diga el pregijo mas comun a estas, por ejemplo
['perro','pelo','flow'] -> el prefijo mas comun es pe

  metodologia: creo que lo más sencillo sera la mirar la primera letra del primero de todos
    guardarla, y ver si coincide con todas las siguientes, en caso de ser así guardarla, luego mirar la segunda
    y ver que se repita en todos, cuando en alguna no se repita algo romper
*/

//#region MI SOLUCION ORIGINAL

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length <= 0) return null;//en caso de que nos den un array vacio devolvemos null

    //iteramos sobre las letras de la primera palabra
    for(let i=0;i<strs[0].length;i++){
        const charFirstWord = strs[0][i]; //sirve para comparar el caracter de cada palabra con el de la primera

        for(let j=1;j<strs.length;j++){ //recorremos todas las palabras salvo la priemra
            if(i >=strs[j].length || strs[j][i]!==charFirstWord){ //si nos quedamos sin letras a analizar o alguna de estas no coincide con la de la primera palabra 

                return strs[0].substring(0,i); //devolvemos el string mas largo
            }
        }

    }//fin del for principal

    return strs[0]; //en caso de que hayamos llegado al final del bucle la primera palabra es el prefijo mas largo
};

const strs = ["flower", "flow", "flight"];
const solucion = longestCommonPrefix(strs);
console.log(solucion);

//#region SOLUCION LAMBDA creo
var longestCommonPrefix2 = function(strs){
    if(!strs.length) return ''; //si no tiene longitud lo devolvemos -- INTERESANTE

    //revisamos las letras de la primera palabra 
    for(let i=0;i<=strs[0].length;i++){
        //chequeamos que el caracter esta presente en la misma posicion del string
        if(!strs.every((string) => string[i] === strs[0][i])){
            return strs[0].slice(0,i); //devolvemos los caracteres que correspondan como prefijo
        }

    }

    return strs[0];//en caso de que lleguemos al final quiere decir que la primera palabra es el prefijo mas largo
}

/* 
EXPLICACION DE LA FUNCION LAMBDA

every() -> sirve para verificar que todos los elementos en la misma poscion i son iguales a los de strs
(string) =>string[i]===strs[0][i] se ejecuta en cada elemento del array strs comparando el caracter en poscion 0,i con el del la palabra que estamos mirando ahora mismo string[i] ... si son diferentes
entra al condicional y devuelve el prefijo mas largo
*/