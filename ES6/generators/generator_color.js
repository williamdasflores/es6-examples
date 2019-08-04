function* colors() {
    yield 'red';
    yield 'green';
    yield 'blue';
    yield 'yellow'
}

const myColors = [];
for (let color of colors()) {
    myColors.push(color);
}

console.log(myColors);