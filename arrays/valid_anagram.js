/* 
242. Valid Anagram

Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 */

var isAnagram = function (s, t) {
    const obj = {};
    for (const val of s) {
        obj[val] = (obj[val] | 0) + 1;
    }
    for (const val of t) {
        obj[val] = obj[val] - 1;
        obj[val] == 0 && delete obj[val];
    }
    return Object.keys(obj).length === 0;
};

let s = "anagram",
    t = "nagaram";

console.log(isAnagram(s, t));
