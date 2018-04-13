var items = document.querySelector('#items');
var photos = document.querySelectorAll('li');

var selectedArray=[];
var itemArray = 
[
    {
        img:"http://unsplash.it/256/256?image=100", 
        alt:"boi",
        title:"The Beach",
        cost: 100,
        desc:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, voluptate!"
    }
    ,
    {
        img:"http://unsplash.it/256/256?image=206", 
        alt:"boi",
        title:"The Park",
        cost: 75,
        desc:"Another Image for use to be sold for nothing"
    }
    ,
    {
        img:"http://unsplash.it/256/256?image=376", 
        alt:"New York Busy Street",
        title:"New York",
        cost: 175,
        desc:"Another Image from New York Being sold as is as it is used"
    }
    ,
    {
        img:"http://unsplash.it/256/256?image=236", 
        alt:"Ocean View By House",
        title:"Ocean View",
        cost: 55,
        desc:"Another Image from my trip to the United Kindom near the Alantic Ocean"
    }
    ,
    {
        img:"http://unsplash.it/256/256?image=786", 
        alt:"Woman Standing in the Forest",
        title:"Forest",
        cost: 155,
        desc:"Another Image from my trip into the Russian forest last year"
    }
    ,
    {
        img:"http://unsplash.it/256/256?image=859", 
        alt:"Red house with a bike near the entrance",
        title:"Gradma's",
        cost: "Priceless",
        desc:"Another Image from my grandma's house in Germany"
    }
];

function displayItems(arr)
{
    for(var i = 0; i < arr.length; i++)
    {
        // console.log(arr[i]);
        var item = 
        `
        <li data-sku="${i}">
        <input type="checkbox">
        <img src="${arr[i].img}" alt="${arr[i].alt}">
        <h3>${arr[i].title}</h3>
        <p>${arr[i].cost}</p>
        <p>${arr[i].desc}</p>
        </li>
        `;
        items.innerHTML += item;
    }
}
displayItems(itemArray);

function addListener(arr, objArr)
{
    for(var i = 0; i < arr.length; i++)
    {
        arr[i].addEventListener('click', function(evt)
        {
            this.classList.toggle('selected');
            // this.firstElementChild.checked = true;

            // Ternary Operator // aka super if statement
            (this.firstElementChild.checked) ? 
                this.firstElementChild.checked = false : 
                    this.firstElementChild.checked = true;      

            // console.log(this.dataset.sku, parseInt(this.dataset.sku) + 1);         
            // console.log(arr.slice(this.dataset.sku, 1);
            selectedArray.push(objArr.slice(this.dataset.sku, parseInt(this.dataset.sku) + 1)[0]);
            console.log(selectedArray);
            // console.log(Array.isArray(arr));
            // selectedArray.push(arr[this.dataset.sku]);
            // console.log(selectedArray);     
        })
    }
    
}
addListener(items.children, itemArray);