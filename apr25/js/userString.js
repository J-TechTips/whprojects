function userStr(evt)
{
    // if(evt.key !== undefined && evt.key !== 'Backspace' && evt.key !== 'Tab')
    // str += evt.key;
    console.log(searchBox.Value); 
    getReq(`https://api.github.com/search/users?q=${searchBox.Value}&client_id=${clientId}`, githubUsers);    
}