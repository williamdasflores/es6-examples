function makeAjaxRequest(url, method = 'GET') {
    //logic for make the request
    //Insted of 'if' statement below, use this sintax as signature method = 'GET' 
    /*if (!method) {
        method = 'GET';
    }*/
    console.log(method);

}

makeAjaxRequest('google.com');
makeAjaxRequest('google.com', 'POST');
makeAjaxRequest('google.com', undefined); // prints 'GET'
makeAjaxRequest('goole.com', null); // it passes null as argument. Will print null