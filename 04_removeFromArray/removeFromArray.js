const removeFromArray = function(arr) {
    let result = [];
    for (let i=0; i<arr.length; i++){
        let unique = true;

        for (let j=1; j<arguments.length; j++){
            if (arr[i] === arguments[j]){
                unique = false;
            }
        }

        if (unique) {
            result.push(arr[i]);
        }

    }
    return result;
};

// console.log(removeFromArray([1,2,3,4],3));
// console.log(removeFromArray([1, 2, 3, 4], 3, 2));
// Do not edit below this line
module.exports = removeFromArray;
