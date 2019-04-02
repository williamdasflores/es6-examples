// we have a single parameter or argument we can drop off the parentheses 
const double1 = (number) => 2 * number;
console.log(double1(2));

//it will become
const double2 = number => 2 * number;
console.log(double2(3));


const numbers = [1, 2, 3];
const doubled = numbers.map(function(number) {
    return 2 * number;
})
console.log(doubled);

//Refactoring
const doubled2 = numbers.map(number => 2 * number);
console.log(doubled2);
