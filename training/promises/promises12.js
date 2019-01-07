const http = require('q-io/http');
const port = 1337;
const url = 'http://localhost:' +  port;

http.read(url)
    .then(value => {console.log(JSON.parse(value));})
    .then(null, console.error)
    .done();