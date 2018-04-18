// var paras = document.querySelectorAll('p');

// for(var i = 0; i < paras.length; i++)
// {
//     // console.log(paras[0].classList.contains('para'));
//     if(paras[i].classList.contains('para'))
//     {
//         console.log('thats true');
//     }
// }
// console.log(3 == '3');
// console.log(typeof(3));

// console.log(typeof('3'));

// // == loose comparison
// // ==== strict comparison

// var usernum = parseInt(prompt('pick a number'));
// if(!usernum)
// {
//     console.log(3+ usernum);
// }
// else
// {
//     console.log('please enter a number');
    
// }
var weatherKey = '7fe4afa3a57257aea3dc1b3da9e03ea6';
var myUl = document.querySelector('ul');

console.log(new XMLHttpRequest());
var req = new XMLHttpRequest();
req.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=7fe4afa3a57257aea3dc1b3da9e03ea6');
req.onload = function()
{
    if(req.readyState === 4)
    {
        var apiData = JSON.parse(req.responseText);
        // console.log(apiData.emojis_url);
        processData(apiData);
    }
}
req.send(null);

function processData(data)
{
    console.log(data.list);
    for(var i = 0; i < data.list.length; i ++)
    {
        var weatherDesc = data.list[i].weather[0].description;
        var timeOfDay;
        var myLi = 
        `
        <li>
            <p>${weatherDesc}</p>
        </<li>
        `;
        myUl.innerHTML += myLi;
    }
}

