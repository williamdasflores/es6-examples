//spread operator
const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];

//old way
//defaultColors.concat(defaultColors);

console.log( [ ...defaultColors, ...userFavoriteColors ] );


//adding one color on the top of it
console.log( [ 'blue', ...defaultColors, ...userFavoriteColors ] );

// another example
function validateShoppingList(...items) {
    // if there is no milk inside items it will put a milk in the begin
    if (items.indexOf('milk') < 0) {
        return [ 'milk', ...items ];
    }

    return items;
}

console.log( validateShoppingList('orange', 'bread', 'coffe') );


