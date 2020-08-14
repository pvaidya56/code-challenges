/**UNDERSTAND:  ------ TWO SUM (LEETCODE) ----------
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
            if (nums[j] == target - nums[i]) {
                return ([i, j])
            }
        }
    }
};

// TESTS: 
console.log(twoSum([1, 2, 3, 4], 3))
console.log(twoSum([1, 2, 3, 4], 5))
console.log(twoSum([1, 2, 3, 4], 7))

//TIME COMPLEXITY : O(n^2) - looping through each element * 2
//SPACE COMPLEXITY : O(1) - not storing anything so it will remain constant no matter the length of the array

// A more efficient solution: using a hashtable for look ups:
// add each element to the hash table and check if its a complement



/*------ REVERSE INTEGER ------ */
/* Given an integer reverse the digits of it */
//Convert int to string 
// JS methods to use: num(String(x)), split, reverse, join, abs to handle negative nums

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // splits, reverses, joins
    let ans = parseInt(x.toString().split('').reverse().join('').toString());

    //handles negative numbers
    if (x < 0) { ans *= -1; }

    //prevents overflow
    if (ans < (Math.pow(2, 31) * -1) || ans > Math.pow(2, 31) - 1) return 0;
    return ans;
};

console.log(reverse(-1234))
console.log(reverse(685729))
console.log(reverse(1534236469))