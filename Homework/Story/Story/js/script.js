// JavaScript Document
function open()
{
    var gamestart = alert('Welcome To The End\nBefore We Begin Please Answer Some Questions\n \nPress OK to continue');
}
open();

// Used to get users name
var name = prompt("Hey what's your name?");
alert("Nice to meet you " + name);

// Edit P  
document.getElementById('start').innerHTML = name + ", Are you ready?";


// Story Begins
var btn = document.getElementById('btn1');
var ntb = document.getElementById('btn2');
var txt = document.getElementById('part1');
// Part Two
var btnThree = document.getElementById('btn3');
var ntbFour = document.getElementById('btn4');
var txtTwo = document.getElementById('part2');
// Part Three
var btnFive = document.getElementById('btn5');
var ntbSix = document.getElementById('btn6');
var txtThree = document.getElementById('part3');
// Part Four
var btnSeven = document.getElementById('btn7');
var ntbEight = document.getElementById('btn8');
var txtFour = document.getElementById('part4');
// Part Five
var btnNine = document.getElementById('btn9');
var ntbTen = document.getElementById('btn10');
var txtFive = document.getElementById('part5');
// Button Stuff 1
btn.addEventListener('click', updateBtn);
btn.disabled = false;
ntb.addEventListener('click', updateNtb);
ntb.disabled = false;

function updateBtn() 
{
  txt.innerHTML = 'You see a familiar face <br/><br/> Do you go and say hi?';
  btn.disabled = true;
  ntb.disabled = true;
  btnThree.style.visibility = "visible";
  ntbFour.style.visibility = "visible";
}
function updateNtb()
{
  history.go(0);
}
btnThree.style.visibility = "hidden";
ntbFour.style.visibility = "hidden";
// End 


// Button Stuff 2
btnThree.addEventListener('click', updateBtn3);
btnThree.disabled = false;
ntbFour.addEventListener('click', updateNtb4);
ntbFour.disabled = false;

function updateBtn3() 
{
  txtTwo.innerHTML = 'You approach the individual and become shocked to see it it Jessica. <br/><br/> Ask them a question to start the converstion.';
  btnThree.disabled = true;
  btnFive.style.visibility = "visible";
  ntbSix.style.visibility = "visible";
  // ntb.disabled = true;
}
function updateNtb4()
{
  txtTwo.innerHTML = 'I guess you do not want to meet your friend. <br/><br/> Do you chang your mind?';
  ntbFour.disabled = true;
}
btnFive.style.visibility = "hidden";
ntbSix.style.visibility = "hidden";
// End


// Button Stuff 3
btnFive.addEventListener('click', updateBtn5);
btnFive.disabled = false;
ntbSix.addEventListener('click', updateNtb6);
ntbSix.disabled = false;

function updateBtn5() 
{
  txtThree.innerHTML = 'They say life is great and ask you how are you feeling today.';
  btnFive.disabled = true;
  ntbSix.disabled = true;
  btnSeven.style.visibility = "visible";
  ntbEight.style.visibility = "visible";
}
function updateNtb6()
{
  txtThree.innerHTML = 'Come on, do you really want to go home?';
  ntbSix.disabled = true;
}
btnSeven.style.visibility = "hidden";
ntbEight.style.visibility = "hidden";
// End


// Button Stuff 4
btnSeven.addEventListener('click', updateBtn7);
btnSeven.disabled = false;
ntbEight.addEventListener('click', updateNtb8);
ntbEight.disabled = false;

function updateBtn7() 
{
  txtFour.innerHTML = 'You say life is great and it is a wonderfull day outside. <br /> <br /> Will you invite your friend to catch the bus to go the movies?';
  btnSeven.disabled = true;
  ntbEight.disabled = true;
  btnNine.style.visibility = "visible";
  ntbTen.style.visibility = "visible";
}
function updateNtb8()
{
  txtFour.innerHTML = 'You go home and take a nap, a job well done!';
  ntbEight.disabled = true;
  btnSeven.disabled = true;
}
btnNine.style.visibility = "hidden";
ntbTen.style.visibility = "hidden";
// Finally the end
btnNine.addEventListener('click', updateBtn9);
btnNine.disabled = false;
ntbTen.addEventListener('click', updateNtb10);
ntbTen.disabled = false;

function updateBtn9() 
{
  txtFive.innerHTML = 'You had no choice you are going to see that movie';
  btnNine.disabled = true;
  ntbTen.disabled = true;
  // btnFive.style.visibility = "visible";
  // ntbSix.style.visibility = "visible";
}
function updateNtb10()
{
  txtFive.innerHTML = 'You had no choice you are going to see that movie';
  ntbTen.disabled = true;
  btnNine.disabled = true;
}















