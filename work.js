var express = require('express');
var router = express.Router();
let mongoose = require('mongoose');

//const { router } = require('../config/app');
let Book = require('../models/Bio_books');

router.get('/',(req,res,next)=>{
    Book.find((err,Booklist)=>{
        if(err)
        {
            return console.error(err);

        }
        else{
            console.log(Booklist);
        }
    });
});


 module.exports = router;