var numbers = [10, 20, 30];

function reject(array, iteratorFunction) {
    return array.filter(function(item) {
       return !iteratorFunction(item);
    });
}

console.log(reject(numbers, function(number) {
    return number > 15;
}));