//O(n^2) time complexity
const numbers = [2, 7, 11, 15];
const target =26;
for (let i=0; i<numbers.length; i++){
    for(let j=i+1; j<numbers.length;j++){
        if(numbers[i]+numbers[j]===target){
            console.log([i,j]);
        }
    }
}

//O(n) time complexity Hash Map
const numbers2 = [2, 7, 11, 15];
const target2 =26;
const map =new Map();
for (let i=0; i<numbers2.length; i++){
    const complement = target2 - numbers2[i];
    if(map.has(complement)){
        console.log([map.get(complement),i]);
    }
    map.set(numbers2[i],i);
}

/*
الـ Framework — "UBRE"
كل مسألة اعملها في 4 خطوات:
1. U — Understand
اقرأ المسألة وقول بكلامك إيه المطلوب بالظبط. متبدأش تحل.
2. B — Brute Force
فكر في أبسط حل ممكن حتى لو بطيء أو غبي. المهم يشتغل.
3. R — Recognize the pattern
اسأل نفسك: فيه تكرار؟ فيه حاجة بادور عليها؟ ممكن أحسّن إزاي؟
4. E — Execute
*/