const value = 5;

document.getElementById('test').innerHTML = 'Aye I hate Windows too ' + value;


if(value < 10)
{
  document.getElementById('warning').innerHTML = 'Oh no the World is Flat';
}

const colors = ['blue','green','red','yellow',];
let result = '';
colors.forEach(eachColor =>
{
  result = result  + ' ' + eachColor;
});

document.getElementById('colors').innerHTML = result;
