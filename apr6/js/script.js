//  Math Object

// Integers - Whole Numbers
// Floats - Decimals 

/*

var wha = .1 * .2;

// Math Round
var rounded = Math.round(0.00000000000000001);
// .49 && below rounds down
// .5 && above rounds up

// Math Ceil
var roundedUp = Math.ceil(0.00000000000000001);
console.log(rounded, roundedUp);

// Math.floor
var roundedDown = Math.floor(0.999999999999);

// Math PI
// var pi = Math.PI;

// Math Pow
// console.log( Math.pow(8, 2) );

// Math sqrt
// console.log( Math.sqrt(64) );

// Math Random
// console.log(Math.random());
// console.log('.round():'+rounded, 'ceil():'+roundedUp, '.floor():'+roundedDown, '.PI():'+pi);

// Random Number Generator 
var rand = Math.random();

rand = Math.floor(rand *1);

console.log(rand);

function pickANum();
{
    var userNum = prompt('guess my number');

}
pickANum();
function checkNum(num)
{
    if(num < rand)
    {
        alert(num + ' is too low.');
        pickAnotherNum();
    }
    else if(num > rand)
    {
        alert(num + 'is too high.');
        pickAnotherNum();
    }
    else
    {
        alert(num + ' is the correct number you win!');
        pickAnotherNum();
    }
}
checkNum();

*/

var userPick = document.getElementById('userPick');
var submitBtn = document.querySelector('button');
var userPickRes = document.querySelector('h1');

var resetBtn = document.getElementById('reset');

var rand;
var attempts = 3; 

resetBtn.addEventListener('click', numReset);

function numReset()
{
    attempts = 3;
    UserRes = '';
    userPick.value = '';
    rand = Math.random();
    rand = Math.floor(rand * 11);
}
numReset();

submitBtn.addEventListener('click', getUserPick);

function getUserPick()
{
    var userNum = parseInt(userPick.value);
    attempts = attempts -1;
    checkUserPick(userNum);
    userPick.value = '';
}
function  checkUserPick(x)
{
    if(attempts > 0)
    {
        if(x < rand)
        {
            printUserRes(x + ' is too low.');
            //pickAnotherNum();
        }
        else if(x > rand)
        {
            printUserRes(x + 'is too high.');
            //pickAnotherNum();
        }
        else 
        {
            printUserRes(x + ' is the correct number you win!');
            //pickAnotherNum();
        }
    }
    else
    {
        printUserRes('Get Good Scrub!');
    }
}
function printUserRes(userRes)
{
    userPickRes.innerHTML = userRes;    
}
