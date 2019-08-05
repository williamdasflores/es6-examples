//Fetch is a feature available in the browser
url = "https://jsonplaceholder.typicode.com/posts/"
/* fetch(url) 
    .then((data) => console.log(data)); --this approach does not return the real response. See below*/ 
fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data));