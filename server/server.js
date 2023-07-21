let express = require('express');
let app = express();
const port = 5001
app.use(express.json());

app.use(express.static('server/public'));

numberArray = [1,2,3,4,5]


app.get('/numbers', function(req, res){
    console.log('Request for /numbers was made');

    res.send(numberArray)
})

app.post('/numbers', (req,res) => {
    console.log(`Get a POST request!`, req);
    let number = req.body;
    console.log(`Adding new number: `, number)
    numberArray.push(number.number);
    res.sendStatus(201);
});

app.listen(port, function() { 
    console.log('listening on port', port);
})