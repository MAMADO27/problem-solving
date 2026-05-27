let string = "abcabcbb";
const queue=[];
let max_length=0;
for(let i=0;i<string.length;i++){
     while(queue.includes(string[i])){
        queue.shift();
    }
    queue.push(string[i]);
    max_length=Math.max(max_length,queue.length);
    
}
console.log(max_length);


//O(n)
let string2 = "bbbbb";
const set = new Set();
let max_length2=0;
for(let i=0;i<string2.length;i++){
     while(set.has(string2[i])){
        set.delete(string2[i]);
    }
    set.add(string2[i]);
    max_length2=Math.max(max_length2,set.size);
    
}
console.log(max_length2);
