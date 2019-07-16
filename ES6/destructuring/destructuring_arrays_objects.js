const carCompanies = [
    { name: 'Volkswagen', alias: 'VW', headquarter: 'Wolfsburg, Germany' },
    { name: 'Chevrolet', alias: 'GM', headquarter: 'Detroit, US' },
    { name: 'Ford', alias: null, headquarter: 'Dearborn, US' },
    { name: 'Fiat', alias: '', headquarter: 'Turin, Italy' },
    { name: 'Toyota', alias: 'Toyota', headquarter: 'Toyota City,' }
];

// Destructuring array of object
/* const [{ name , headquarter }] = carCompanies;
console.log(name);
console.log(headquarter); */

// Object with an array
const vw = {
    name: 'Volkswagen',
    alias: 'VW',
    models: ['Up', 'Gol', 'Polo', 'Golf', 'Tiguan']
};

// Printing all elements of array
const { models } = vw;
console.log(models);

//Printing the first element of array
const { models: [ model ] } = vw;
console.log(model);