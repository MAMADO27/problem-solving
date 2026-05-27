//O(n^2) time complexity
let arr =[1,1,1,2,2,3];
const k =2;
for(let i=0; i<arr.length;i++){
    let count =0;
    for(let j=0; j<arr.length;j++){
        if(arr[i]===arr[j]){
            count++;
        }
    }
  console.log(count);
   
}

//O(n) time complexity using Hash Map
let arr2 =[1,1,1,2,2,3];
const k2 =2;
const map = new Map();
for(let i=0;i<arr2.length;i++){
    if(map.has(arr2[i])){
        map.set(arr2[i],map.get(arr2[i])+1);
    }
    else{
        map.set(arr2[i],1);

    }

}
const sorted=[...map.entries()].sort((a,b)=>b[1]-a[1]).slice(0,k2).map(entry=>entry[0]);
console.log(sorted);
