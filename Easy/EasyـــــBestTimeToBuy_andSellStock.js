//O(n) Greedy Algorithm
arr = [7,1,5,3,6,4];
var max_profit= function(prices){
    let max_profit=0;
    let min_price=prices[0];
    for(let i=1;i<prices.length;i++){
        if(prices[i]<min_price){
            min_price=prices[i];
        }else if(prices[i]-min_price>max_profit){
            max_profit=prices[i]-min_price;
        }
        
    }
    return max_profit;
};
console.log(max_profit(arr));