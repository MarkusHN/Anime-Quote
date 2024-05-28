async function getQuote() {
    let quote;
    let character;
    let title;
    const data = await fetch("https://animechan.xyz/api/random");
    const json = await data.json();
    quote = json.quote;
    character = json.character;
    title = json.anime

    if(quote){
        document.getElementById("quote").innerText = "''" + quote + "''";
    }

    if(character){
        document.getElementById("character").innerText = "By: " + character;
    }

    if(title){
        document.getElementById("title").innerText = "From: " + title
    }
}
getQuote();

function newQuote() {
    location.reload();
}