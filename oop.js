
// Constructor
document.getElementById('constructor').addEventListener('click', callGolfer);


function Golfer(firstName, lastName, majors, totalWins) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.majors = majors;
    this.totalWins = totalWins;

    this.getSummary = function () {
        return `${this.firstName} has won ${majors} majors with ${totalWins} total career wins.`;
    }
}

function callGolfer() {
    tiger = new Golfer('Tiger', 'Woods', '14', '80');
    rory = new Golfer('Rory', 'McIlroy', '3', '14');
    let output = `<h5>Golfer Data</h5>`;
    output += 'Check Console for Constructor Data';
    document.getElementById('output').innerHTML = output;
    console.log(tiger);
    console.log(tiger.getSummary());
}

// Inheritence
document.getElementById('inheritence').addEventListener('click', callMagazine);

function Book(title, year, genre) {
    this.title = title;
    this.year = year;
    this.genre = genre;
}

Book.prototype.getSummary = function () {
    return `${this.title} was published in ${year}.`;
}

function Magazine(title, year, month, genre) {
    Book.call(this, title, year, genre);

    this.month = month;
}

function callMagazine() {
    let output = `<h5>Magazine Data</h5>`;
    output += 'Check Console for Magazine inheriting Book';
    document.getElementById('output').innerHTML = output;

    Magazine.prototype = Object.create(Book.prototype);

    const mag1 = new Magazine('People', '2019', 'Jan', 'Gossip');

    console.log(mag1);
}

// Classes in JS
document.getElementById('classes').addEventListener('click', getPizza);

class Pizza {
    constructor(size, topping, price) {
        this.size = size;
        this.topping = topping;
        this.price = price;
    }

    getSummary() {
        return `A ${this.size} pizza with ${this.topping} costs ${this.price}`;
    }

    revise(newTopping) {
        this.topping = newTopping;
        this.changed = true;
    }
}

function getPizza() {
    let output = `<h5>Pizza Data</h5>`;
    output += 'Check Console for Pizza class';
    document.getElementById('output').innerHTML = output;
    const pizza1 = new Pizza('L', 'cheese', '10');
    console.log(pizza1);
    console.log(pizza1.getSummary())
    pizza1.revise('pepperoni');
    console.log(pizza1);
    console.log(pizza1.getSummary())
}