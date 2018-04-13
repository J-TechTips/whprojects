

var btns = document.querySelectorAll('button');

for(var i = 0; i < btns.length; i++)
{
    btns[i].addEventListener('click', function(evt)
    {
        console.log(evt.target);
        console.log(this);
    });
}

window.addEventListener('click', function(evt)
{
    console.log(evt.target.nodeName);
    if(evt.target.nodeName == 'BUTTON')
    {
        console.log(evt.target);
        console.log(this);
    }
});

var cars = ['jeep', 'honda', 'toyota', 'subaru'];
console.log(cars);
//objects
var car = 
{
    type: 'jeep',
    model: 'wrangler',
    color: 'black',
    offroad: 'true',
    trim: ['sunroof', 'hardtop', '4 wheel drive']
};
console.log(car.trim);

var jon = 
{
    firstname: "Joanthan", 
    lastname: "Flores",
    age: 19,
    height: "6'7", 
    hair: true,
    haircolor: "black",
    facialhair: true,
    facialhaircolor: "black",
    greetings: function(msg)
    {
        console.log(this.firstname);
        console.log(msg + this.firstname);
    }
}
var types = ['string', true, 5, [1, 2, 3], jon];

console.log(jon.age);

jon.firstname = 'Juan';
console.log(jon.firstname);

jon.greetings("Hey There!");

jon.firstname = "Jon";
jon.greetings('Im now ');

function Person(first,last, age, eye)
{
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;
    this.greetings = function(msg)
    {
        console.log(this.firstname);
        console.log(msg + this.firstname);
    }
}

var myDad = new Person('Juan', 'Flores', 54, 'brown');
var myMom = new Person('Maria', 'Ledesma', 50, 'brown');
var myFakeFriend = new Person('Boi', 'Working', 20, 'brown');
// console.log(myDad.eyecolor);
myFakeFriend.greetings("Hey my Bruda ");


// User accounts
var form = document.querySelector('form');
console.log(form.elements.value);
var users = [];
var user = 0;

function userAcc(username, email, password)
{
    this.email = email;
    this.username = username;
    this.password = password;
}

var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(evt)
{
    evt.preventDefault();
    users.push('user' + user);
    user++;
    for(var i = 0; i < form.elements.length; i++)
    {
        console.log(form.elements[i].value);
    }
    console.log(users);
});
console.log(submitBtn);