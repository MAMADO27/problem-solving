//0(n^3) Brute Force
let arr =[-1,0,1,2,-1,-4];
for(let i=0;i<arr.length-2;i++){
    for(let j=i+1;j<arr.length;j++){
        for(let k=j+1;k<arr.length;k++){
            if(arr[i]+arr[j]+arr[k]===0){
                console.log(arr[i],arr[j],arr[k]);
    }
}
}
}

//O(n^2) Two Pointer
let arr2=[-1,0,1,2,-1,-4];//[-4,-1,-1,0,1,2]
arr2.sort((a,b)=>a-b);
for(let i=0;i<arr2.length;i++){
    if(i>0 && arr2[i]===arr2[i-1]) continue;
    let left =i+1;
    let right= arr2.length-1;
    while(left<right){
        let sum=arr2[i]+arr2[left]+arr2[right];
        if(sum===0){
            console.log(arr2[i],arr2[left],arr2[right]);
            while(left<right && arr2[left]===arr2[left+1]) left++;
            while(left<right && arr2[right]===arr2[right-1]) right--;
            left++;
            right--;
        }else if(sum<0){
            left++;
        }else{
            right--;
        }
    }


}