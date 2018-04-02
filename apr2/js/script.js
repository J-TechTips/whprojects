// var p1 = document.getElementById('p1');
// console.log(p1);

// var p1q = document.querySelector('#p2');
// console.log(p1q);

// var pClass = document.querySelector('.p');
// console.log(pClass);

// var pLast = document.querySelector('.p:last-of-type');
// console.log(pLast);

// var pClasses = document.querySelector('.p');
// console.log(pClasses);
// pClasses[2].style.fontSize = '8px';
// pClasses[1].style.color = 'red';

// var pByClassname = document.getElementsByClassName('p');
// console.log(pByClassname);

// var pByTagName = document.getElementsByTagName('p');
// console.log(pByTagName);
// console.log(pByTagName.length);
// FOR Loop
//  |---------------------| Arguments
//  |-------| New Variables
//             |----| Number of Loops
//                     |-| Incrementor 
// for(var i = 0; i < 10; i++) 
// {
//     pByTagName[i].style.color = 'red';
//     console.log(i);
// }

// var myName = "Jonathan";
// console.log(myName.length);
// for(var i = 0; i < myName.length; i++)
// {
//     console.log(myName[i]);
// }

// function name()
// {
//     var first = prompt('What is your first name?');
//     console.log(first.length)
//     for(var i = 0; i < first.length; i++)
//     {
//         console.log(i);
//         console.log(first[i]);
//     }
//     var last = prompt('What is your last name?');
//     console.log(last.length)
//     for(var i = 0; i < last.length; i++)
//     {
//         console.log(i);
//         console.log(last[i]);
//     }
// }
// name()

// function getUsername()
// {
//     var username = prompt('your name');
//     console.log(username + ' from inside the fucntion');

//     printUsername([username]);
// }

// getUsername();
// function printUsername(x)
// {
//     for(var i = 0; i < x.length; i++)
//     {
//         console.log(x[i]);
//     }
// }

// Get users two numbers
// function getUserNums()
// {
//     var num1 = prompt('Please enter a number');
//     var num2 = prompt('Please enter another number');
//     addUserNums(num1, num2);
// }

// // Alert added Numbers
// function addUserNums()
// {
//     alert( parseInt(x)+ parseInt(y));
// }
// getUserNums();

function getUserColors()
{
    var color1 = prompt('Enter one color');
    var color2 = prompt('Enter another color');
    var color3 = prompt('Enter one last color please');

    assignUserColors(color1, color2, color3);
}
function assignUserColors(x, y, z)
{
    for(var i = 0; i < arguments.length; i++)
    {
        paragraphs[i].style.color = arguments[i];
    }    
}
getUserColors();
