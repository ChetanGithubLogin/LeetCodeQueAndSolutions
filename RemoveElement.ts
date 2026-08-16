/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.
Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int val = ...; // Value to remove
int[] expectedNums = [...]; // The expected answer with correct length.
                            // It is sorted with no values equaling val.

int k = removeElement(nums, val); // Calls your implementation

assert k == expectedNums.length;
sort(nums, 0, k); // Sort the first k elements of nums
for (int i = 0; i < actualLength; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [3,2,2,3], val = 3
Output: 2, nums = [2,2,_,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 2.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,1,2,2,3,0,4,2], val = 2
Output: 5, nums = [0,1,4,0,3,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k (hence they are underscores).
 

Constraints:

0 <= nums.length <= 100
0 <= nums[i] <= 50
0 <= val <= 100
*/

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/


/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    // Step 1:
    // x is the pointer that keeps track of the position
    // where the next valid element should be placed.
    //
    // Initially x = 0 because the first valid element
    // should be placed at index 0.
    let x = 0;

    // Step 2:
    // i is used to scan every element in the array.
    // i moves from left to right.
    for (let i = 0; i < nums.length; i++) {

        // Step 3:
        // Check whether the current element is NOT equal to val.
        //
        // If nums[i] === val:
        //     We don't want this element, so skip it.
        //
        // If nums[i] !== val:
        //     This is a valid element, so keep it.
        if (nums[i] !== val) {

            // Step 4:
            // Copy the valid element to position x.
            //
            // x represents the next position where
            // a valid element should be stored.
            nums[x] = nums[i];

            // Step 5:
            // Move x forward because we have successfully
            // stored one valid element.
            x = x + 1;
        }
    }

    // Step 6:
    // x represents the number of valid elements
    // remaining in the array.
    //
    // The first x positions contain the required elements.
    return x;
};
