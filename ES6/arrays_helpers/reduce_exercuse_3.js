var numbers = [1, 1, 2, 3, 4, 4]

function unique(array) {
  return array.reduce(function(previous, number){

    if (previous.length === 0) {
      previous.push(number);
    } else {
      previous.find(function() {
        if (previous.indexOf(number) < 0) {
          previous.push(number)
        }
      });
    }

    return previous

  },[])
}

console.log(unique(numbers));