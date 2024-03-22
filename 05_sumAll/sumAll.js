const sumAll = function(first, last) {

    if (first < 0 || last < 0){
        return "ERROR";
    }

    if (typeof(first) != "number" || typeof(last) != "number"){
        return "ERROR";
    }

    let result = 0;

    // swap first and last if first > last
    if (first > last){
        let temp = first;
        first = last;
        last = temp;
    }

    for (let i=first; i<last; i++){
        result = result + i;
    }
    return result + last;
};

// Do not edit below this line
module.exports = sumAll;
