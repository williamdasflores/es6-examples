var users = [
    { name: 'Jill'},
    { name: 'William'},
    { name: 'Alex'}
];

// find matches the first element that satisfies.
var user = users.find(function(user) {
    return user.name === 'Alex';
});

//console.log(user);

/*-----------------------------------------*/
function Car(model) {
    this.model = model;
}

var cars = [
    new Car('Polo'),
    new Car('Camaro'),
    new Car('Focus'),
    new Car('Fox')
];

var car = cars.find(function(car) {
    return car.model == 'Camaro';
});

//console.log(car)

/*-----------------------------------------*/
var posts = [
    { id: 1, title: 'New Post' },
    { id: 2, title: 'Old Post' },
];

var comment = { id: 1, content: 'Great Post' };

function postForComment(posts, comment) {
    return posts.find(function(post) {
        return post.id === comment.id;
    });
}

console.log(postForComment(posts, comment));