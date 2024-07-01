/* 
347. Top K Frequent Elements 
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

 

Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:

Input: nums = [1], k = 1
Output: [1]

*/

var topKFrequent = function (nums, k) {
    let obj = {};

    for (const val of nums) {
        obj[val] = (obj[val] | 0) + 1;
    }
    if (Object.keys(obj).length <= 2) {
        return Object.keys(obj).map((val) => Number(val));
    }
    let newArr = new Set();
    for (let val of nums) {
        if (obj[val] >= k) {
            newArr.add(val);
        }
    }
    return [...newArr];
};

let nums = [1, 2, 1],
    k = 2;
console.log(topKFrequent(nums, k));
