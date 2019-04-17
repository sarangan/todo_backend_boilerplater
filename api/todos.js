const express = require('express');
const router = express.Router();
const Todo = require('../models/todo');

router.get('/', (req, res) =>{
    // res.json({
    //     status: 1,
    //     data: [1,2,3]
    // });

    Todo.find().then(data =>{
        res.json({
            status: 1,
            data
        })
    })
    .catch(err => console.log("something went wrong"));

});

router.post('/', (req, res) =>{
   
   let {task} = req.body; 
   console.log(task);
   const newTodo = new Todo({
       task
   }).save()
   .then( data =>{res.json({ status: 1, msg : data}); } )
   .catch(err => console.log(err));
   
});

module.exports = router;