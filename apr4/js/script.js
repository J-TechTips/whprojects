// ask user for name
/* function getUserName()
{
    var username = prompt('What is your full name?').split(" ");
    //console.log(username);
    //send out this result to another function 
    outputUsername(username);
}
// function that recieves the result
function outputUsername(nameArray)
{
    //console.log(nameArray);
    //get the id from the html to be able to paste the text there
    // document.getElementById('firstname').innerHTML = nameArray[0];
    // document.getElementById('lastname').innerHTML = nameArray[nameArray.length - 1];
    //gets the array and removes the anything that is more than two words

    for(var i = 0; i < nameArray.length; i++)
    {
        // First run equal the if 
        // or = ||
        if( i == 0 || i == nameArray.length - 1 )
        {
            document.getElementById('firstname').innerHTML += nameArray[i] + " ";            
        }
    }
}
getUserName();
*/

/*
// Warning Arrays Below
var cars = ["Nissan", "Acura", "Honda"]
console.log(cars[1]);
console.log(cars.length);

// Push Method
cars.push("BMW"); // add to array
console.log(cars);

// Pop Method
cars.pop(); // removes last element of the array
console.log(cars);

var removedCar = cars.pop();
console.log(cars);
console.log(removedCar); // show the removed element

// Add to front of an Array
cars.unshift("Chevy", "Audi");
console.log(cars);

// Remove element in the beggining or front of the array
cars.shift();
console.log(cars);

// Splice Method
cars.splice(1, 1, "red", "green"); // at index number one adds the text inside the qoutation marks
// first number is location in array
// second number is remove the number of items
console.log(cars);

cars.splice(2, 1, "cashew", "apple", "Orange", "trash");
console.log(cars);

// Slice method
cars.slice(4);
var removed = cars.slice(2, 6);
console.log(removed);

// Assignment
var movies = ["Act of Valor", "Lone Survivor", "13 Hours", "Battleship" ,"Hacksaw Ridge"]
console.log(movies);

movies.unshift("Die Hard");
console.log(movies);

movies.splice(2, 2, "Die Hard I", "Die Hard II", "Die Hard III");
console.log(movies);

movies.push("Guardians of the Galaxy");
console.log(movies);

movies.slice(3);
var removed = movies.slice(2, 4)
console.log(removed);

movies.shift(0);
console.log(movies);

console.log(movies[5]);
*/

/*
function getUserAge()
{
    var userage = parseInt(prompt("How old are you?"));
    //And = &&
    //OR = ||
    if(userage <= 21)
    {
        console.log('not old enough');
    }
    else if(userage == 21)
    {
        console.log('good to go');
    }
    else(userage >= 99)
    {
        console.log('stop, no more legos');
    }
}
getUserAge();

// Ternary Operator 
function getAge();
{
    var age = prompt('What is my age?');
    (age >= "21") ? console.log('true') : console.log('false');
}

22 >= "22"
*/

function thestart()
{
    var gamestart = alert('Welcome to the End\n \nPress close to continue');
}
thestart();

function getName()
{
    var name = prompt('What is your name?');
    if(name != null)
    {
        document.getElementById("name").innerHTML = "Hello" + name + "! An adventure awaits!";
    }
}
getName();
