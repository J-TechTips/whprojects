/*
function welcomeMsg(str)
{
    // console.log(str);
    return "Welcome " + str;
}
// consoleInfor('Jonathan');
console.log(welcomeMsg('Jon'));

function calcNums(x, y)
{
    // console.log(x + y);
    return x + y;
}
calcNums(3, 2);

console.log( calcNums(3, 2));
var h3 = document.querySelector('h3');
var yser = document.querySelector('#user');

function concatStrings(str1, str2)
{
    return str1 + " " + str2;
}
function getFirstname()
{
    return prompt('What is your First Name?');
}
function getLastname()
{
    return prompt('What is your Last Name?');
}
// function welcomeUser()
// {
//     h3.innerHTML = concatStrings( getFirstname(), getLastname());
// }
// welcomeUser();
user.textContent = concatStrings( getFirstname(), getLastname());
user.innerHTML = concatStrings( getFirstname(), getLastname());
*/
var spans = document.querySelectorAll('span');
var occupations = ['janitor', 'teacher', 'developer', 'plumber', 'cashier', 'bus driver'];
var plurals = ['fish', 'monkeys', 'shoes', 'cactii'];
var adjectives = ['large', 'agressive', 'depressed', 'silent', 'illegal'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var verbs = ['jumped', 'tripped', 'hurt', 'slaped', 'punched', 'knocked out',];
var liquids = ['bleach', 'water', 'gatorade', 'milk', 'gamma', 'juice', 'anti-freeze',];
var famouss = [ 'THE ROCK', 'John Cena', 'Trump', 'Obama', 'Brock Lesnar', 'Idubbz'];
var places = [ 'Vietnam', 'North Korea', 'South Korea', 'Afghanastan', 'Russia', 'White House',];
var nationalitys = [ 'Mexican', 'America', 'Korean', 'Japenese', 'Russian', 'Canadian',];
var nouns = [ 'de wae', 'knife', 'that boi', 'thumb drive', 'cat', 'a good doggo',];
var pnouns = [ 'guns', 'cars', 'trucks', 'tanks', 'aircraft carrier'];
var friends = [ 'Saber', 'Sena', 'Asuna', 'Astolfo', 'Sinon'];
var females = [ 'Megan Fox', 'Jennifer Lopez', 'Emma Watson', 'Nina Dobrev', 'Sofia Vergara', 'Selena Gomez'];
// console.log(spans.length);

for(var i = 0; i < spans.length; i++) {
    switch(spans[i].className)
    {
        case 'occupation':
            console.log( occupations[getRandNum( occupations.length )] );
            spans[i].textContent = occupations[getRandNum( occupations.length )];
            break;
        case 'plural': 
            // spans[i].style.color = 'red'; 
            console.log( plurals[getRandNum( plurals.length )] );
            spans[i].textContent = plurals[getRandNum( plurals.length )];
            break;
        case 'adjective':
            console.log( adjectives[getRandNum( adjectives.length )] );
            spans[i].textContent = adjectives[getRandNum( adjectives.length )];
            break;
        case 'number': 
            console.log( numbers[getRandNum( numbers.length )] );
            spans[i].textContent = numbers[getRandNum( numbers.length )];
            break;
        case 'verb': 
            console.log( verbs[getRandNum( verbs.length )] );
            spans[i].textContent = verbs[getRandNum( verbs.length )];
            break;
        case 'liquid': 
            console.log( liquids[getRandNum( liquids.length )] );
            spans[i].textContent = liquids[getRandNum( liquids.length )];
            break;
        case 'famous': 
            console.log( famouss[getRandNum( famouss.length )] );
            spans[i].textContent = famouss[getRandNum( famouss.length )];
            break;
        case 'place': 
            console.log( places[getRandNum( places.length )] );
            spans[i].textContent = places[getRandNum( places.length )];
            break;
        case 'nationality': 
            console.log( nationalitys[getRandNum( nationalitys.length )] );
            spans[i].textContent = nationalitys[getRandNum( nationalitys.length )];
            break;
        case 'noun': 
            console.log( nouns[getRandNum( nouns.length )] );
            spans[i].textContent = nouns[getRandNum( nouns.length )];
            break;
        case 'pnoun': 
            console.log( pnouns[getRandNum( pnouns.length )] );
            spans[i].textContent = pnouns[getRandNum( pnouns.length )];
            break;
        case 'friend': 
            console.log( friends[getRandNum( friends.length )] );
            spans[i].textContent = friends[getRandNum( friends.length )];
            break;
        case 'female': 
            console.log( females[getRandNum( females.length )] );
            spans[i].textContent = females[getRandNum( females.length )];
            break;
        default:
            spans[i].style.color = 'yellow';
    }
}
function getRandNum(num)
{
    return Math.floor(Math.random() * num);
}

