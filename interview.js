// Fizzbuzz

document.getElementById('fizzbuzz').addEventListener('click', fizzBuzz);

function fizzBuzz() {
    let output = `<h5>FizzBuzz</h5>`;
    document.getElementById('output').innerHTML = output + 'Output in console.'
    for (let i = 1; i <= 100; i++) {
        if (i % 15 == 0) console.log('fizzbuzz');
        else if (i % 5 == 0) console.log('fizz');
        else if (i % 3 == 0) console.log('buzz');
        else (console.log(i));
    }
}

// Reverse a String

document.getElementById('revSubmit').addEventListener('click', reverse);

function reverse() {
    let userInput = document.getElementById('reverse').value;
    let newUserInput = userInput.split('');
    let output = `<h5>Your Reversed String</h5>`;
    output += newUserInput.reverse().join('');

    document.getElementById('output').innerHTML = output;
}

// Longhand Reverse a String

document.getElementById('revAgainSubmit').addEventListener('click', revAgain);

function revAgain() {
    let userInput = document.getElementById('revAgain').value;
    let x = '';

    for(let i = userInput.length -1; i >= 0; i--) {
        x += userInput[i];
    }
    document.getElementById('output').innerHTML = `<h5>Your String Reversed</h5> ${x}`;
}

