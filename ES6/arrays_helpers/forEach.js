var colors = ['red', 'blue', 'green', 'yellow'];

colors.forEach(function(color) {
    console.log(color);
});


var numbers = [75, 10, 92, 8];
var sum = 0;
/*numbers.forEach(function(number) {
    sum += number;
});

console.log(sum);*/

// We can declare a function as well
function adder(number) {
    sum += number;
}
numbers.forEach(adder);
console.log(sum);

