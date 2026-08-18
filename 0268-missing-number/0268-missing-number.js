/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length;
    
var total = (len*(len + 1))/2;

    for(let item of nums){        
        total = total-item;
    }

    return total;

};