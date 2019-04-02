//normal function
const add1 = function(x, y) {
    return x + y;
}
console.log(add1(2, 3));

//function above as arrow function
const add2 = (x, y) => {
    return x + y;
}
console.log(add2(4, 2));

//As there is a single expression we can reduce
const add3 = (x, y) => x + y;
console.log(add3(7, 2));