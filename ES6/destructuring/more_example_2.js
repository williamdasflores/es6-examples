const points = [
    [4, 10],
    [0, 1],
    [13, 50]
];

/*const pair = points.map(([ x, y ]) => {
   return { x: x, y: y };
});
console.log(pair);*/

// As I have the same name returning I can use just one x and y
const pair = points.map(([ x, y]) => {
    return { x, y };
});
console.log(pair);

