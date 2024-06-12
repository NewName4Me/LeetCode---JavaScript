/* 
https://leetcode.com/problems/container-with-most-water/


You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const currentArea = Math.min(height[left], height[right]) * (right - left);
        maxArea = Math.max(maxArea, currentArea);

        //aumentamos el más pequeño de los dos sentido
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};



const ejemplo1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const ejemplo2 = [1, 1];
const ejemplo3 = [2, 3, 10, 5, 7, 8, 9];
console.log(maxArea(ejemplo1));
console.log(maxArea(ejemplo2));
console.log(maxArea(ejemplo3));