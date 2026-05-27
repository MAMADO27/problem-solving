//KADANE'S ALGORITHM  O(n)
function kadane(arr){
    let currntsum =arr[0];
    let maxsum=arr[0];
    for(let i=1; i<arr.length;i++){
        currntsum= Math.max(arr[i],currntsum+arr[i]);
        maxsum= Math.max(maxsum,currntsum);

    }
    return maxsum;
}
console.log(kadane([-2,1,-3,4,-1,2,1,-5,4])); // 6