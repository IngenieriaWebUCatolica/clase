const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const get = (URL, response) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        const DONE = 4;
        const OK = 200;
        if (xhr.readyState === DONE) {
            if (xhr.status === OK) {
                response(null, JSON.parse(xhr.responseText))
            } else {
                response(new Error('Se produjo un error al realizar el request'), xhr.responseText)
            }
        }
    }

    xhr.open('GET', URL);
    xhr.send(null);
}

get('https://swapi.dev/api/planets/20/', (err, response) => {
    if (err) return console.error(`Request failed ${err}`);
    console.log('Request succeeded');
    console.log('Data', response);
});