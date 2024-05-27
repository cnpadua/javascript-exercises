const fibonacci = function(n) {
    n = Number(n);
    let fib = [1,1];

    if (n < 0) return "OOPS";
    if (n === 0) return 0;

    if (n > fib.length){
        for(let i=0; i<(n-2); i++){
            fib.push(fib.slice(-1)[0] + fib.slice(-2)[0]);
        }
        return fib[n-1];
    } else {
        return fib[n-1];
    }
};

// let test = [1,2];
// console.log(test.slice(-1)[0]);

// Do not edit below this line
module.exports = fibonacci;
