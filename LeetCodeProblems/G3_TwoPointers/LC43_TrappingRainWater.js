/* 
https://leetcode.com/problems/trapping-rain-water/description/

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (height.length === 0) return 0;

    let left = 0;
    let right = height.length - 1;
    let maxLeft = height[left];
    let maxRight = height[right];
    let rainTrap = 0;

    while (left < right) {
        if (maxLeft < maxRight) {
            left++;
            maxLeft = Math.max(maxLeft, height[left]);
            rainTrap += maxLeft - height[left]
        } else {
            right--;
            maxRight = Math.max(maxRight, height[right]);
            rainTrap += maxRight - height[right];
        }
    }

    return rainTrap;
};

const ejemplo1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const ejemplo2 = [4, 2, 0, 3, 2, 5];
const ejemplo3 = [];
console.log(trap(ejemplo1));
/* console.log(trap(ejemplo2));
console.log(trap(ejemplo3)); */