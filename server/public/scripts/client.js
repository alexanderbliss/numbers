console.log('script sourced.');

function getQuotes(){
    axios.get('/quotes').then((response) => {
        console.log("success", response.data);
        let quotesFromServer = response.data
        return renderToDom(quotesFromServer)
// good indication of end of route })   
 }).catch((error) => {
    console.log(error);
    alert("Something Went Wrong")
 }) 
}

// getQuotes()

function renderToDom(quotes){
    let ouputList = document.querySelector('#output')
    ouputList.innerHTML = ''

    for(let quote of quotes) {
        ouputList.innerHTML +=`
            <p>${quote.text}  -  ${quote.author} </p>
        `
    }
}