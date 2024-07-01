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
    let map = new Map();
    for (const val of nums) {
        map.has(val) ? map.set(val, map.get(val) + 1) : map.set(val, 1);
    }
    if (map.size <= k) {
        return Array.from(map.keys()).map((val) => Number(val));
    }

    const mapSort = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
    const mapSortArr = [...mapSort.keys()];
    return mapSortArr.slice(0, k);
};

let nums = [1, 1, 1, 2, 2, 3],
    k = 2;
console.log(topKFrequent(nums, k));
