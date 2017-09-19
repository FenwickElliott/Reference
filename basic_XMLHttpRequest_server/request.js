const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const xhr = new XMLHttpRequest();

const url = 'http://127.0.0.1:3000/';

// xhr.responseType = 'json';
// xhr.onreadystatechange = function () {
//     console.log(xhr)
// };
console.log(xhr);
xhr.open('GET', url);
xhr.send();