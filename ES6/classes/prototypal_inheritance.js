function Car(options) {
    this.options = options;
}

Car.prototype.drive = function() {
    return 'vroom';
}

function Toyota(options) {
    Car.call(this, options);
    this.color = options.color;
}

//Way to add inherit Car and add a method to Toyota object
Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;

Toyota.prototype.honk = function() {
    return 'beep';
}

const toyota = new Toyota({ color: 'Red', title: 'Daily Driver'});
console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());