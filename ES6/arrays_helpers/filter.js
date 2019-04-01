var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 10, price: 1 },
    { name: 'apple', type: 'fruit', quantity: 0, price: 2 },
    { name: 'banana', type: 'fruit', quantity: 50, price: 0.5 },
    { name: 'celery', type: 'vegetable', quantity: 5, price: 4 },
    { name: 'orange', type: 'fruit', quantity: 25, price: 3 }
];

//only show fruits
//WARNING: Always place a return otherwise will return null
var fruits = products.filter(function(product) {
    return product.type === 'fruit';
})
console.log(fruits);

//Type is 'fruit', quantity is greater than 0, price is less than 10\
var fruits = products.filter(function(product) {
    return product.type === 'fruit' && product.quantity > 0 && product.price < 10;
});
//console.log(fruits);

// More complex example
var post = { id: 1, title: 'New Post' };
var comments = [
    { postId: 4, content: 'awesome post' },
    { postId: 3, content: 'it was ok' },
    { postId: 4, content: 'neat' },
    { postId: 2, content: 'bad post' },
    { postId: 1, content: 'it was the worst post ever' }
];

function commentsForPost(post, comments) {
    return comments.filter(function(comment) {
        return comment.postId === post.id;
    });
}

//console.log(commentsForPost(post, comments));

var users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
   ];

var filteredUsers = users.filter(function(user) {
    return user.admin;
});

//console.log(filteredUsers);