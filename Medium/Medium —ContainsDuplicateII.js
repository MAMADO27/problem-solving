//O(n^2) time complexity
const arr = [1,2,3,1,2,3];
const keyy =2;
for (let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length;j++){
        if(arr[i]===arr[j] && Math.abs(i-j)<=keyy){
            console.log(true);
        }
    }
}
//console.log(false);

//O(n) time complexity Hash Map
var containsNearbyDuplicate = function(nums, k) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            if (i - map.get(nums[i]) <= k) {
                return true;
            }
        }
        map.set(nums[i], i);
    }
    return false;
};

console.log(containsNearbyDuplicate([1,2,3,1], 3));    // true
console.log(containsNearbyDuplicate([1,0,1,1], 1));    // true
console.log(containsNearbyDuplicate([1,2,3,1,2,3], 2)); // false


