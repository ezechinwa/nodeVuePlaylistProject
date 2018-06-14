const express = require('express'); 
const bodyParser  = require('body-parser'); 
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const port = process.env.PORT || 3500; 

app.use(morgan('combined')); 
app.use(bodyParser.json());

app.use(cors());




app.post('/register', (req,res)=>{
    console.log("kk"+req.body.email);
    res.status(200).send( req.body.email);
})






app.listen(port, ()=>{
    console.log('Application currently running on port : '+port +', Press Crt-C to terminate');
});