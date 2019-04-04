function saveFile(url, data) {
    //$.ajax({ method: 'POST', url: url, data: data });
    //By convention put the short variable first. This apply for multi-lines expression as well
    //$.ajax({ url, data , method: 'POST' });
    $.ajax({
        url, 
        data ,
        method: 'POST'
    });
}

const url = "http://fileupload.com";
const data = { color: 'red' };
saveFile(url, data);