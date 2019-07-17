function Person(person) {
    this.name = person.name;
}

//Adding a method
Person.prototype.calcAge = function(currentYear) {
    return currentYear - 1990;
}

const person = new Person({ name: 'William' });
console.log(person);
console.log(person.calcAge(2019));