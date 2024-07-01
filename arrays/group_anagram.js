// Needs to complete later

/* 
49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

*/

// var isAnagram = function (s, t) {
//     const obj = {};
//     for (const val of s) {
//         obj[val] = (obj[val] | 0) + 1;
//     }
//     for (const val of t) {
//         obj[val] = obj[val] - 1;
//         obj[val] == 0 && delete obj[val];
//     }
//     return Object.keys(obj).length === 0;
// };

var groupAnagrams = function (strs) {
    const obj = {};

    for (const str of strs) {
        const sortForm = str.split("").sort().join("");
        if (obj[sortForm]) {
            obj[sortForm].push(str);
        } else {
            obj[sortForm] = [str];
        }
    }
    console.log(Object.values(obj));
};

let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));
