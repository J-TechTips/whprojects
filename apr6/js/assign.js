function getRandomColor()
{
    rand = Math.random();
    rand = Math.floor(randColor * 360);
    document.body.style.backgroundColor = 'hsl(' + randColor + ', 50%, 50%)';
}
getRandomColor();

console.log(window.innerWidth, window.innerHeight);
window.addEventListener('mousemove', function(e)
{
    var width = Math.round((e.x / window.innerWidth) * 100);
    var width = Math.round((e.x / window.innerHeight) * 100);
    document.body.style.backgroundColor = 'hsl(${randColor}, ${width}%, ${height}%)';
});