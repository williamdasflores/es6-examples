var numbers = [1, 2, 3, 4];

//map helper will create another array with the doubled numbers; 
//Always use return, otherwise will return null
var doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled);

// Examples with objects
var people = [
    { name: 'William', age: 28, city: 'São Paulo' },
    { name: 'Fernanda', age: 25, city: 'Belo Horizonte' },
    { name: 'Camila', age: 19, city: 'Fortaleza' },
    { name: 'Larissa', age: 23, city: 'Recife' }
];

var ages = people.map(function(person) {
    return person.age;
    //return person.name + ': ' + person.age + ' years old';
})
console.log(ages);

