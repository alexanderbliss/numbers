console.log('script sourced.');

function getNumbers(){
    axios.get('/numbers').then((response) => {
        console.log("success", response.data);
        let numbersFromServer = response.data
        return renderToDom(numbersFromServer)
 }).catch((error) => {
    console.log(error);
    alert("Something Went Wrong")
 }) 
}




function renderToDom(serverNumbers){
    let ouputList = document.querySelector('#outputFromServer')
    ouputList.innerHTML = ''
        ouputList.innerHTML +=`
            <p>${serverNumbers}</p>
        `
}
clientNumbers = [1,2,3,4,5]
let ouputList = document.querySelector('#outputFromClient')
ouputList.innerHTML = ''
    ouputList.innerHTML +=`
        <p>${clientNumbers}</p>
    `

function addItemToBoth(event){
addItemToClient(event)
addToServer(event)
}

function addItemToClient(event){
    clientNumbers.push(document.querySelector('#NumberInput').value)
    let ouputList = document.querySelector('#outputFromClient')
ouputList.innerHTML = ''
    ouputList.innerHTML +=`
        <p>${clientNumbers}</p>
    `
}
numberToSend = {number: 0}
function addToServer(event) {
    // stop page from refreshing
    event.preventDefault();
    console.log('In submitForm function');
    numberToSend.number = document.querySelector('#NumberInput').value;
    console.log(numberToSend.number);
    //   type     url      data to send
    axios.post('/numbers', numberToSend).then((response) => {
        console.log(response);
        // clear our inputs
        getNumbers();
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong.');
    });
}
getNumbers()