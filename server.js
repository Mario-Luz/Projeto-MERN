const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000
mongoose.connect('mongodb://localost:27017/MERN',{
    useNewUrlParser:true,
}, function(err) {
    if(err){
        console.log(err)
    }else{
        console.log('MongoDB CONECTADO com sucesso')
    }
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.get('/', function(req, res){
    res.json({message:'Hello'});
});

app.listen(3000,function(){
    console.log(`Server runing on port ${port}`)
})

