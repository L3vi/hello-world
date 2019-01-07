const http = require('q-io/http');
const url = 'http://localhost:';
const port1 = 7000;
const port2 = 7001;
var userId;

function getValue (url) {
    return http.read(url).then( value => value.toString('utf8'));
}

getValue(url + port1)
    .then(value => getValue(`${url}${port2}/${value}`))
    .then(JSON.parse)
    .then(console.log)
    .catch();
    
    
