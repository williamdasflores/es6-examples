function User(id) {
    this.id = id;
}

function generateID() {
    return Math.random() * 9999999;
}

function createAdminUser(user = new User(generateID())) { 
    user.admin = true;

    return true;
}

/*function createAdminUser(user) {
    user.admin = true;

    return true;
}*/

//createAdminUser(new User(generateID()));
const user = new User(generateID());
createAdminUser(user);
createAdminUser();