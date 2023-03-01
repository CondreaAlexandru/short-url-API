let url = "https://api.shrtco.de/v2/shorten?url=";
let buttonShort = document.getElementById('shortLink');
let valueLink = document.getElementById('valueLink');
let listLinks = document.getElementById('listLinks')
 

buttonShort.addEventListener('click', function(){
    let urlShort = `${url}${valueLink.value}`

    fetch(urlShort)
        .then((data)=> data.json())
        .then((linkS) => linkShort(linkS))

    const linkShort = (link) => {
        let newUrl = `<div class="short-link">
        <p class="old-link">${link.result.original_link}</p>
        <p class="new-link"><a target="_blank" href="${link.result.full_short_link}">${link.result.full_short_link}</a></p>
        </div>
        `
        console.log(link.ok)
        listLinks.innerHTML += newUrl;
        document.getElementById('valueLink').value = ""
    }
    
})