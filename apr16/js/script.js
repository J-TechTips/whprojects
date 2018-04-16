// var theDate = new Date();
// console.log(theDate);
// console.log(theDate.getDate());
// console.log(theDate.getDay());
// console.log(theDate.getFullYear());
// console.log(theDate.getMonth());

// console.log( theDate.toLocaleDateString());

// var myDday = new Date(2000, 09, 02);
// console.log(myDday.toLocaleDateString());

// var dateStr = 
// `
//     Today's Date is ${theDate.getDate()}th of ${theDate.toLocaleDateString('en-us', {month:'long'})} ${theDate.getFullYear()}
// `;
// document.body.textContent = myDday;

// var bDayStr = 
// `
//     ${myDday.toLocaleDateString('en-us', {month:'2-digit'})}/
//     ${myDday.toLocaleDateString('en-us', {day:'2-digit'})}/
//     ${myDday.toLocaleDateString('en-us', {year:'2-digit'})}
// `;
// document.body.textContent = bDayStr;
// month day year 
var stopBtn = document.querySelector('button');
stopBtn.addEventListener('click', function()
{
    clearInterval(mytimer);
});
var myTimer = setInterval(updateTimer, 100);
function updateTimer()
{
    var theTime = new Date();
    var timeStr = 
    `
        ${theTime.toLocaleString('en-us', {hour:'numeric', hour12: false, minute:'2-digit', second:'2-digit'})}
    `;
    document.body.textContent = timeStr;
}
updateTimer();

var myDelay = setTimeout(hiliteBg, 5000);
function hiliteBg()
{
    document.body.classList.add('hiliteBg');
}
function runTimer()
{
    var theTime = new Date();
    var timeStr = 
    `
        ${theTime.toLocaleString('en-us', {hour:'numeric', hour12: false, minute:'2-digit', second:'2-digit'})}
    `;
    document.body.textContent = timeStr;
}
runTimer();