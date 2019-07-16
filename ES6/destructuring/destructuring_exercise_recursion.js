const numbers = [1, 2, 3];

function double([firstNum, ...rest]) {
    //console.log(rest.length);
    const restDoubled = rest.length ? double(rest) : [];
    console.log(restDoubled)
    return [ firstNum * 2, ...restDoubled ]; 
}

double(numbers);