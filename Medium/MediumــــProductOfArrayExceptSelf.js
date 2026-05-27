// O(n) time complexity and O(n) space complexity postfix and prefix products
const arr = [1, 2, 3, 4];
const leftarr =[1, 1, 1, 1];
for(let i=1; i<arr.length;i++){
    leftarr[i]= leftarr[i-1]*arr[i-1];
}
const rightarr =[1, 1, 1, 1];
for(let i=arr.length-2; i>=0;i--){
    rightarr[i]= rightarr[i+1]*arr[i+1];
}
console.log(leftarr);
console.log(rightarr);
const result = [];
for(let i=0; i<arr.length;i++){
    result[i]= leftarr[i]*rightarr[i];
}
console.log(result);