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
//O(n) time complexity Stack
function is_valid(string){
    const stack=[];
    const mapping = new Map();
    mapping.set(")","(");
    mapping.set("}","{");
    mapping.set("]","[");
    for(let i=0; i<string.length; i++){
        const char = string[i];
        if(mapping.has(char)){
            const topElement = stack.length === 0 ? "#" : stack.pop();
            if(topElement !== mapping.get(char)){
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
}
console.log(is_valid("()"));
console.log(is_valid("()[]{}"));
console.log(is_valid("(]"));
console.log(is_valid("([)]"));
console.log(is_valid("{[]}"));