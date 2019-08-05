promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve();
    }, 3000);
    
});

promise
    .then(() => console.log('teste'))
    .then(() => console.log('teste 2'))
    .catch(() => console.log('something went wrong'));