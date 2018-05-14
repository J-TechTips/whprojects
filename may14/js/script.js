let person1 = 
{
    firstName: 'Jon',
    lastName: 'Wick',
    age: 41,
    eyecolor: 'brown'
};
let person2 = 
{
    firstName: 'Jane',
    lastName: 'Doe',
    age: 38,
    eyecolor: 'green'
};
// Reusable object below
let People = function(fn, ln, a, ec)
{
    this.firstName = fn;
    this.lastName = ln;
    this.age = a;
    this.eyecolor = ec;
    this.greeting = function(ufn)
    {
        return `It's nice to meet you ${ufn}! My name is ${this.firstName}`
    }
};

let chuck = new People("Carlos", "Flores", 21, "brown");
let Jon = new People("Jon", "Flores", 19, "brown");

console.log(Jon,chuck);
console.log(Jon.greeting('storm'));
console.log(chuck.greeting('nightcrawler'));
// People.prototype.nationnality = "American";
