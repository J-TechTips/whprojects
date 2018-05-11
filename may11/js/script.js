/* function addTwo(num)
{
    return num + 2;
}

console.log(addTwo(2));

let addFour = (num)=> num + 4;

console.log(addFour(2)); */

/* function Counter(num)
{
    this.num = num;
    this.timer = setInterval( ()=>
    {
        this.num++;
    }, 1000);
}

let num1 = new Counter(0); */


// let numbersPlusTwo = [];

/* for (let n = 0; n < numbers.length; n++)
{
    numbersPlusTwo.push(numbers[n] + 2 );
} */

/* numbers.forEach(x=>numbersPlusTwo.push(x + 2));
console.log(numbersPlusTwo); */

/* let numbersPlusTwo = numbers.map( x=> x + 2);
console.log(numbersPlusTwo); */

let numbers = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let numbersEven = numbers.filter( x=> x % 2 == 0 ? true : false);
console.log(numbersEven);
