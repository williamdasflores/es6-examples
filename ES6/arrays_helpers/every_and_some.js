var computers = [
    { brand: 'Samsung', ram: 16 },
    { brand: 'Acer', ram: 4 },
    { brand: 'Apple', ram: 128 },
    { brand: 'Sony', ram: 32 }
];

var allComputersRanProgram = computers.every(function(item) {
    return item.ram > 20;
});
//console.log('----------- Every Helper -----------');
//console.log(allComputersRanProgram);

var someComputersRanProgram = computers.some(function(item) {
    return item.ram > 20;
});
//console.log('----------- Some Helper -----------');
//console.log(someComputersRanProgram);

/*-----------------------------------------------------------------------------*/
function Field(value) {
    this.value = value;
}

Field.prototype.validate = function() {
    return this.value.length > 0;
}

var username = new Field("2cool");
var password = new Field("123");
var birthdate = new Field("09/10/90");

var fields = [username, password, birthdate];

var formIsValid = fields.every(function(field) {
    return field.validate();
});

console.log(formIsValid);