url = "https://jsonplaceholder.typicode.com/posts/";
fetch(url)
    .then((response) => console.log(response))
    .catch((error) => console.log('Bad request', error));