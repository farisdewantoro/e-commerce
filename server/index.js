// const express = require('express');
// const bodyParser = require('body-parser');
// const passport = require('passport');

// const connection = require('./config/conn');

import express from 'express';
import bodyParser from 'body-parser';
import passport from 'passport';
import connection from './config/conn';
import { CategoryRoutes } from './modules';
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/api/', [CategoryRoutes]);


const port = process.env.PORT || 5000;
app.listen(port, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log(`Server running on port ! ${port}`);
    }
    
});