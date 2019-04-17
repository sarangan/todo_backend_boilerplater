const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect('mongodb://dbuser:chandra12@m001-sandbox-shard-00-00-1otei.mongodb.net:27017,m001-sandbox-shard-00-01-1otei.mongodb.net:27017,m001-sandbox-shard-00-02-1otei.mongodb.net:27017/test?ssl=true&replicaSet=m001-sandbox-shard-0&authSource=admin&retryWrites=true', {useNewUrlParser: true})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const logger = (req, res, next) =>{
    console.log("server is running");
    next();
};

app.use(logger);

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req,res) => {
    res.send("welcome to express");
});

app.use("/api/todos", require('./api/todos') );

app.listen(PORT, ()=>{ console.log("server is running!"); });
