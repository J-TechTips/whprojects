var characterUl = document.querySelector('ul');
var homeUrl = `https://rickandmortyapi.com/api/character/`;

/*function getReq(url, func)
{
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function()
    {
        if(req.readyState === 4 && req.status === 200)
        {
            console.log('success!', req.statusText);
            func(JSON.parse(req.responseText));
        }
        else
        {
            console.log('error.', req.statusText);
        }
    }
    req.send(null);
}*/
$.ajax({
    url: 'https://rickandmortyapi.com/api/character/',
}).done(getCharacters);

// getReq(homeUrl, getCharacters);

// characterUl.addEventListener('click', function(evt)
// {
//     console.log(evt);
// });
// console.log(characterUl);

function ajaxReq(url, func)
{
    $.ajax({
        url: url,
    }).done(func);
}
ajaxReq(homeUrl, getCharacters);

var characterUrl;
$('body > ul').on('click', 'li', function(evt){
    console.log(evt);
    
    if(this.dataset.url){
        characterUrl = this.dataset.url;
        characterUl.innerHTML = '';
        ajaxReq(characterUrl, getCharacter);
    }
});

function getCharacter(character)
{
    console.log(character);

    var character = 
        `
        <li data-url"${character.url}">
            <img src="${character.image}" alt="${character.name}">
            <div>
                <h3>${character.name}</h3>
                <ul>
                    <li>
                        <b>Species</b> ${character.species}
                    </li>
                    <li>
                        <b>Gender</b> ${character.gender}
                    </li>`;
        if(!character.type == "" )
        {
             character += `<li><b>Type:</b> ${character.type}</li>`;
        }
                    character += `
                    <li>
                        <b>Type</b> ${character.status}
                    </li>
                </ul>
            </div>
        </li>
        `;
        characterUl.innerHTML = character;
}


function getCharacters(characters)
{
    var characterLink = document.querySelector('a');
    console.log(characterLink);

    var characterArr = characters;
    for(var i = 0; i < characterArr.results.length; i++)
    {
        console.log(characterArr.results[i]);
        var character = 
        `
        <li data-url="${characterArr.results[i].url}">
            <img src="${characterArr.results[i].image}" alt="${characterArr.results[i].name}">
            <div>
                <h3>${characterArr.results[i].name}</h3>
                <ul>
                    <li>
                        <b>Species</b> ${characterArr.results[i].species}
                    </li>
                    <li>
                        <b>Gender</b> ${characterArr.results[i].gender}
                    </li>`;
        if(!characterArr.results[i].type == "" )
        {
             character += `<li><b>Type:</b> ${characterArr.results[i].type}</li>`;
        }
                    character += `
                    <li>
                        <b>Type</b> ${characterArr.results[i].status}
                    </li>
                </ul>
            </div>
        </li>
        `;
        characterUl.innerHTML += character;
    }
}

