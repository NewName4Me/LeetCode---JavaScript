/* 
https://leetcode.com/problems/generate-parentheses/description/

Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]

Example 2:

Input: n = 1
Output: ["()"]

*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];

    function backtrack(open, close, current) {
        //base case (comprobar si hemos añadido el numer necesario de parentesis para terminar)
        if (current.length === 2 * n) {
            result.push(current);
            return;
        }

        if (open < n) {
            backtrack(open + 1, close, current + '(');
        }

        if (close < open) {
            backtrack(open, close + 1, current + ')');
        }
    }

    backtrack(0, 0, '');

    return result;
};

console.log(generateParenthesis(3));

//45ms => beats 92,29%