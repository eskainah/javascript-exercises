const sumAll = function(num1, num2) {
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);
    let sum = 0;
   
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if(min < 0 || max < 0) return "ERROR"
    for(let i = min; i<=max; i++){
            sum += i;
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
