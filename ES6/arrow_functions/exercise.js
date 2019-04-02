//arrow function are best suited for non-method functions
//it won't work
/*const profile = {
    name: 'Alex',
    getName: () => this.name
};*/

const profile = {
    name: 'Alex',
    getName: function() {
        return this.name;
    } 
};

console.log(profile.getName());