/* 
https://leetcode.com/problems/valid-sudoku/description/

Explicacion: un sudoku es valido cuando sus filas y columnas no tienen ningun valor repetido ni tampoco en sus 9
cuadrados de 3x3, para las filas y columnas es sencilla:
    meto cada fila y columna en un array y en cada una compruebo si hay algun valor repetido 
    utilizando un Set() para asegurarme de que no se repite nada
    y devuelvo true o false en funcion de este
ahora solo falta la parte más complicada, meter en un array los 9 grupo de 3

65ms vence al 70%
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {

    //FILAS
    for (let i = 0; i < board.length; i++) {
        if (!comprobarArray(board[i])) {
            return false;
        }
    }


    //COLUMNAS
    for (let j = 0; j < board[0].length; j++) {
        let columnaArray = [];
        for (let i = 0; i < board.length; i++) {
            //crear Array con la columna
            columnaArray.push(board[i][j]);
        }

        if (!comprobarArray(columnaArray)) {
            return false;
        }
    }

    //VERIFICAR CUADRADO 3x3
    for (let i = 0; i < 9; i += 3) {
        for (let j = 0; j < 9; j += 3) {
            let cuadradoArray = [];
            for (let k = i; k < i + 3; k++) {
                for (let l = j; l < j + 3; l++) {
                    cuadradoArray.push(board[k][l]);
                }
            }
            if (!comprobarArray(cuadradoArray)) {
                return false;
            }
        }
    }

    return true;
};

//mira los arrays dados y comprueba si existe algun valor repetido en estos
function comprobarArray(arrayDado) {
    let miSetComprobador = new Set();

    for (let numero of arrayDado) {
        if (numero !== '.' && miSetComprobador.has(numero)) return false;
        if (numero !== '.') miSetComprobador.add(numero);
    }

    return true;
}


const sudoku = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]];

console.log(isValidSudoku(sudoku));