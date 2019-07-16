const countries = [
    'Brazil',
    'USA',
    'Canada',
    'Spain',
    'France',
    'Japan'
]

/* OBS: Use '[]' instead of '{}'! '{}' looks for properties. I can use the property length 
const { length } = countries; */

// country receives the first object from array 
//const [ country ] = countries;
//console.log(country);

// country receives Brazil and country1 receives USA and so on
/* const [ country, country1 ] = countries;
console.log(country1);*/

// the First console.log prints the first country in the array, in this case 'Brazil'
// and the parameter rest prints the left countries except 'Brazil'
const [ country, ...rest ] = countries;
console.log(country);
console.log(rest);
