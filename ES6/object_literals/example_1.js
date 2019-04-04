// If the key has the same name, just put the name of the expression like the examples below.

function createBookShop(inventory) {
    return {
        inventory, //inventory: inventory,
        /*inventoryValue: function() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },*/
        inventoryValue() {
            return this.inventory.reduce((total, book) => total + book.price, 0);
        },
        /*titleForPrice: function(title) {
            return this.inventory.find(book => book.title === title).price;
        }*/
        titleForPrice(title) {
            return this.inventory.find(book => book.title === title).price;
        }
    };
}

const inventory = [
    { title: 'Harry Potter', price: 10 },
    { title: 'Enloquent Javascript', price: 15 }
];

const bookShop = createBookShop(inventory);

console.log(bookShop.inventoryValue());
console.log(bookShop.titleForPrice('Harry Potter'));