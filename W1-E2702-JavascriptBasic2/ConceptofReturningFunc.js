function getTotaler() {
    var sum = 0;
    return function(n) {
        sum += n;
        return sum;
    };
}

var totaler = getTotaler();

console.log(totaler(1), totaler(2), totaler(5));
//error because getTotaler returns function. -> console.log(getTotaler(1), getTotaler(2), getTotaler(5));
//No point assigning a name to returned function because you can't call it elsewhere.
//Be noted that the variable 'total' in function 'Totaler' has memory. Its value is saved.
