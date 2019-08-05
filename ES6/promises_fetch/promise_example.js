// Copy the code below and paste into the Chrome console and run

promise = new Promise((resolve, reject) => {
    reject();
});

promise
    .then(() => console.log('teste'))
    .then(() => console.log('teste 2'))
    .catch(() => console.log('something went wrong'));