/**UNDERSTAND: TWO SUM (LEETCODE)
    Input : array of integers, and a single integer (target)
    Output : the indices of two numbers such as they add up to a specific target.
    Find two numbers in the list that add up to the target and return the indicies of those numbers
PLAN: 
     loop through both and check if another value = target - x
     how can i check if they add up?
        while current is <length(array) - 1 - would keep iterating over till it doesn't exceed the length of the arr.
NAIVE SOLUTION:

 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            // console.log(i, j)
            if (nums[j] == target - nums[i]) {
                return ([nums[i], nums[j]])
            }
        }
    }
};

console.log(twoSum([1, 2, 3, 4], 3))
console.log(twoSum([1, 2, 3, 4], 5))
console.log(twoSum([1, 2, 3, 4], 7))
