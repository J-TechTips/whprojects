document.getElementById('btn2').style.color = "red";

console.log("Here is my first console message");
console.info("This is info");
console.warn("Danger Zone");
console.error("Tactical Movements");

// Browser Alert
// alert('This is a PopUp')

// Browser confirm box
// var  userResult = confirm("Did you remeber me?");
// console.log(userResult);

// Browser Prompt Boxes
// var userName = prompt("Your Name?");
// console.log(userName);

/*
Must start with lowercase
Must start with a letter
Can contain uderscore
May use camelCasing
*/
var userName
var room1;
var user_Name;
var username;

var age = 27;
var decade = 10;
var double = 2;
var divide = 4;
// Divide resylt by 4
var nextage = ( (age + decade) * double) / divide;
// Pemdas Matters!
console.log(nextage);

// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");

// String Interpolation 
// alert(`${firstName} ${lastName}`);

// Prompt User for Make, year, color of Vehicle confirm result
function getUserVehicle(){
var make = prompt("What is the Make of the Vehicle?");
var year = prompt("What year is it from?");
var color = prompt("What color is it from?");

alert(`${color}, ${year} ${make}.`);
}

// function primaryUser()
// {
//     var first = prompt("What is your First Name?");
//     var last = prompt("What is your Last Name?");
//     var place = prompt("Where where you born?");

//     document.getElementById('primaryUser').innerHTML = first + " " + last + ", born in " + place; 
// }
function primaryUser(){
var waifu = prompt("Who is your favorite waifu?");
var means = prompt("What do they mean to you?");
var marry = prompt("When do you expect to marry?");

document.getElementById('primaryUser').innerHTML = waifu + " means " + means + ", we will get married " + marry + " but will never happen.";
}
function secondaryUser()
{
    window.document.bgColor="green";
}