// Fetch API from JSON file

document.getElementById('getJSON').addEventListener('click', getJSON);

function getJSON() {
    fetch('users.json')
        .then((res) => res.json())
        .then((data) => {
            let output = `<h5>Your JSON Data</h5>`;
            data.forEach(function (user) {
                output += `
                <ul>
                    <li>${user.id}</li>
                    <li>${user.name}</li>
                    <li>${user.email}</li>
                </ul>
            `;
                document.getElementById('output').innerHTML = output;
            })
        })
}

// Fetch API from Text file

document.getElementById('getText').addEventListener('click', getText);

function getText() {
    fetch('sample.txt')
        .then((res) => res.text())
        .then((data) => {
            let output = `<h5>Your Text File</h5>`;
            output += data
            document.getElementById('output').innerHTML = output;
        })
}

// Fetch Crypto API

document.getElementById('getCrypto').addEventListener('click', getCrypto);

function getCrypto() {
    const apikey = 'ce5a43840db64ac2cb338b43dfdc21099c7066de6c32dbbe759aee3e313f895a';

    fetch(`https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD&api_key=${apikey}`)
        .then((res) => res.json())
        .then((data) => {
            let output = `<h5>Bitcoin</h5>`;
            output += `
                    <ul>
                        <li>1 BTC = ${data.USD}</li>
                    </ul>
                `;
            document.getElementById('output').innerHTML = output;
        })
}