// Pop up during opening of page
function open()
{
    var gamestart = alert('Welcome To The End\nBefore We Begin Please Answer Some Questions\n \nPress OK to continue');
}
open();

// Used to get users name
var name = prompt("Hey what's your name?");
alert("Nice to meet you " + name);


// Asking about childhood friend
prompt(name + " what was the name of your closest friend?\n \n(Enter a name below)");

// Edit H1
document.getElementById('h1').innerHTML = name + ", Are you ready?";