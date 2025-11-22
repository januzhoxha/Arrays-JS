//               PROF MOS HARRO ME E KQYR EDHE INDEX.HTML//



/*1. Create a “groceries list” array. Each element of the array is an object that contains the name of a product, an amount needed and whether it is bought or not. Write a few functions for working with this array. 

DONE-Display the entire list, so that the not yet purchased items go before the bought ones. 
DONE-Adding a purchase to the list. Note that if a product already exists, the amount needs to be increased in the existing purchase, not in a new one. 
DONE-Purchasing a product. The function accepts the name of a product and marks it as bought.*/


/*2. Create an array that describes a shop receipt. Each element of the array consists of the name of the product, an amount bought, and price per item. Write the following functions. 

DONE-Print the receipt out on the screen.
DONE-Counting the sum of the purchase.
DONE-Extracting the most expensive item on the receipt.
DONE-Counting an average item price on the receipt.*/

/*4. Create an array of academy classrooms. A classroom object consists of a name, a number of seats (10 to 20) and the faculty it is meant for. Write a few functions for working with it.

DONE-Display all the classrooms.
DONE-Display all the classrooms for a given faculty.
DONE-Display only the classrooms that would fit a given group. A group object contains a name, the number of students, and the faculty name.
DONE-A function for sorting all the classrooms by number of seats.
DONE-A function for sorting all the classrooms by name in alphabetical order.*/

/*4TH EXAMPLE DONE
let classrooms = [
    { name: 'A411', nrOfSeats: 15, faculty: 'English' },
    { name: 'B408', nrOfSeats: 20, faculty: 'Math' },
    { name: 'C710', nrOfSeats: 12, faculty: 'Physics' }
];

classrooms.forEach(element => {
    console.log(element.name);
    console.log('----------');
    console.log(element.faculty);
});
console.log('-----------');

classrooms.forEach(element => {
    if(element.nrOfSeats < 20) {
        console.log(element.name);
    }
});
console.log('------------');

for (let i = 0; i < classrooms.length - 1; i++) {
    for (let j = i + 1; j < classrooms.length; j++) {
        if (classrooms[i].nrOfSeats > classrooms[j].nrOfSeats) { //MATRICA NGA C++!, SPO DI ME forEach me e bo
            let sortNrOfSeats = classrooms[i];
            classrooms[i] = classrooms[j];
            classrooms[j] = sortNrOfSeats;
        }
    }
}

console.log('Classrooms sorted by number of seats:');
classrooms.forEach(element => {
    console.log(element.name + ' - ' + element.nrOfSeats + ' seats');
});

console.log('----------------');

for (let i = 0; i < classrooms.length - 1; i++) {
    for (let j = i + 1; j < classrooms.length; j++) {
        if (classrooms[i].name > classrooms[j].name) {
            let sortName = classrooms[i];
            classrooms[i] = classrooms[j];
            classrooms[j] = sortName;
        }
    }
}

console.log('Classrooms sorted by name:');
classrooms.forEach(element => {
    console.log(element.name + ' - ' + element.faculty);
});

/*2ND EXAMPLE DONE
let receipt = [['Books', 2, 4], ['Pen', 10, 0.5], ['Laptop', 1, 500], ['Notebooks', 6, 1.5], ['A4 Papers', 400, 0.10]];

let price = 0;
let sum = 0;
let max = 0;
let itemName;
let numberOfItems = 0   ;
let itemAverage;


receipt.forEach(element => {
    price = element[1] * element[2];
    console.log(element[1] + ' ' + element[0] + ' cost ' + price + ' euros');
    console.log('-------------------');
});
receipt.forEach(element => {
    price = element[1] * element[2];
    sum += price;
});
console.log('The total sum is: ' + sum);

console.log('------------------------');

receipt.forEach(element => {
    if((element[1] * element[2]) > max) {
        max = element[1] * element[2];
        itemName = element[0];
    }
});
console.log('The most expensive item is ' + itemName + ' with a total cost of: ' + max);

console.log('-----------------------');

receipt.forEach(element => {
    numberOfItems += element[1];
});

itemAverage = sum / numberOfItems;

console.log('When you have: ' + numberOfItems + ' items the average cost is: ' + itemAverage + ' euros');*/




/*NESE KERKOHET SI ARRAY BRENDA ARRAY
let grocery = [['Apple', 2, true], ['Flour', 5, false], ['Sugar', 3, true], ['Juice', 1.5, false], ['Carrot', 2, true], ['Marker', 0.5, false], ['Pencil', 1, false]];


grocery.forEach(element => {
    if (element[2] == false) {
        console.log('Not bought: ' + element[0]);
    }
});
grocery.forEach(element => {
    if (element[2] == true) {
        console.log('Bought: ' + element[0]);
    }
});

let purchase = prompt('Would you like to buy anything else? ');
let amount = +prompt('How many of that product would you like to buy? ');


console.log('-----------------');

grocery.forEach(element => {
   if(purchase == element[0]) {
    if(element[2] == false) {
        element[2] = true;
        element[1] *= amount;
        console.log('Bought: ' + amount + ' ' + element[0]);
        console.log('The cost is: ' + element[1] + ' euros');
    } else if(element[2] == true) {
        element[1] *= amount;
        console.log('Bought: ' + amount + ' ' + element[0]);
    }
   }
});

console.log('-------------------');

console.log('Updated List: ');
grocery.forEach(element => {
    if(element[2] != true) {
        console.log('Not bought: ' + element[0]);
    } else if(element[2] == true) {
        console.log('Bought: ' + element[0]);
    }

});/*

/* NESE KERKOHET SI OBJEKT!!!!
let grocery = [
    { name: 'Apple', amount: 2, bought: true },
    { name: 'Flour', amount: 5, bought: false },
    { name: 'Sugar', amount: 3, bought: true },
    { name: 'Juice', amount: 1.5, bought: false },
    { name: 'Carrot', amount: 2, bought: true },
    { name: 'Marker', amount: 0.5, bought: false },
    { name: 'Pencil', amount: 1, bought: false }
];


grocery.forEach(element => {
    if (!element.bought) console.log('Not bought: ' + element.name);
});
grocery.forEach(element => {
    if (element.bought) console.log('Bought: ' + element.name);
});


let purchase = prompt('Would you like to buy anything else? ');
let amount = +prompt('How many of that product would you like to buy? ');

console.log('-----------------');


grocery.forEach(element => {
    if (purchase == element.name) {
        if (!element.bought) {
            element.bought = true;
            element.amount *= amount;
            console.log('Bought: ' + amount + ' ' + element.name);
            console.log('The cost is: ' + element.amount + ' euros');
        } else {
            element.amount *= amount;
            console.log('Bought: ' + amount + ' ' + element.name);
        }
    }
});

console.log('-------------------');


console.log('Updated List: ');
grocery.forEach(element => {
    if (!element.bought) console.log('Not bought: ' + element.name);
    else console.log('Bought: ' + element.name);
});*/
