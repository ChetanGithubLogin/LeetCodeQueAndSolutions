/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let xor = 0
    for(let item of nums){
        xor = xor ^ item
    }
    return xor;
};