/* 
var firstname = 'Jon';

function whatsName()
{
    var lastname = 'Flores';
    console.log(firstname);
    whatsLastName(lastname);
}
whatsName();

// for - can run anywhere
// let - can only run in that specific area
// const - can only run once

for(var i = 0; i < 5; i++)
{
    console.log('running ' + i + ' times');
}

function whatsLastName(str)
{
    console.log(str);
    console.log(i);
    
}

console.log(i);

for(i; i < 10; i++)
{
    console.log('running ' + i + ' times');
}
*/

// let firstName = 'Jon';
// let lastName = 'Flores';
// let nameCombined = `${firstName} Ghost ${lastName}`;
// console.log(nameCombined);

// let btn = document.querySelector('button');
// btn.addEventListener('click', function(evt)
// {
//     console.log(this);
//     var colorizer = () => this.style.color = 'red';
//     colorizer();
// });

// var logCase = function(str)
// {
//     console.log(str);
//     console.log(this);
//     return () => console.log(this);
// }
// logCase('Jon');

let btns = document.querySelectorAll('button');
console.log(btns);

btns.forEach(function(ele)
{
    console.log(ele);
});

var colors = ['red', 'orange', 'green', 'blue'];

for(let i = 0; i < colors.length; i++)
{
    console.log(colors[i]);
}

// Javascript For Each loop
colors.forEach(function(x, y)
{
    console.log(x, y);
});

var nums = [10, 20, 30, 40];
for(let num of nums)
{
    num += 1;
    console.log(num);
}

let myName = 'Jon Flores';
for(let letter of myName)
{
    console.log(letter);
}