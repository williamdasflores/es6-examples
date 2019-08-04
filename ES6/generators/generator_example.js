function* numbers() {
    yield;
}

const gen = numbers();
console.log(gen.next());