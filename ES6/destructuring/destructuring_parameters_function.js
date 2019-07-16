var person = {
    name: 'William',
    surname: 'Flores',
    age: 27
}

/* function printPerson(person) {
    return `Hi! My name is ${person.name} ${person.surname} and I am ${person.age} years old.`;
}
console.log(printPerson(person)); */

// A way to use destructing to print
function printPerson({ name, surname, age }) {
    return `Hi! My name is ${name} ${surname} and I am ${age} years old.`;
}
//console.log(printPerson(person));

function printPerson({ name, surname, age }, { city }) {
    return `Hi! My name is ${name} ${surname} from ${city} and I am ${age} years old.`;
}
console.log(printPerson(person, { city: 'São Paulo' }));