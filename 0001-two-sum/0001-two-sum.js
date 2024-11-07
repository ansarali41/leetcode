/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let storage = new Map();
   for(let i=0; i<nums.length; i++){
       let value = nums[i];
      let complement_pair = target - value;
      if(storage.has(complement_pair)){
          return [storage.get(complement_pair),i]
      }else{
          storage.set(value, i)
      }
   }
};