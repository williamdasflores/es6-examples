var numbers = [10, 20, 30];

var sum = numbers.reduce(function(sum, number) {
    return sum + number;
});

//console.log(sum);

/*---------------------------------------------------------------------*/
var primaryColors = [
    { color: 'red' },
    { color: 'yellow' },
    { color: 'blue' },
    { color: 'green' }
];

var array = primaryColors.reduce(function(previous, primaryColor) {
    previous.push(primaryColor.color);
    return previous;
}, []);

//console.log(array);

/*--------------------------------------------------------------------------*/
function balancedParens(string) {
    return !string.split("").reduce(function(previous, char) {
        if (previous < 0) { return previous; }
        if (char === '(') { return ++previous; }
        if (char === ')') { return --previous; }

        return previous;
    }, 0);
}

//console.log(balancedParens(")("));

var trips = [ { distance: 34 }, { distance: 12 }, { distance: 1} ];
var totalDistance = trips.reduce(function(previous, trip) {
    return previous + trip.distance;
}, 0);

console.log(totalDistance);