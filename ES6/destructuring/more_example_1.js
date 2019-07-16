function signup({ email, user, password, dateOfBirth }) {
    return password;
}

const user = {
    user: 'admin',
    password: 'blahblah',
    email: 'admin@gmail.com',
    dateOfBirth: '01/12/1990'
}

console.log(signup(user));

/*It does not matter the order of paramenter you pass in the function. It only 
matters the name of the properties you pass as a parameter. So the names of the properties
must match with the name of function parameters */