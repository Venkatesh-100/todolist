const express = require("express");
const router = express.Router();
const Todos = require("../models/Todo");

router.get("/" , (req,res) => {
    try{
        Todos.find()
            .then(data => res.status(200).json(data))
            .catch(err => res.status(400).json(err));
    } catch(err){
        console.log(err);
        res.send("some error occured!");
    }
});

router.post("/" ,async function(req,res) {
    try{
        const new_todo = new Todos({
            title: req.body.title,
            description: req.body.description,
            startDate: req.body.startDate,
            endDate: req.body.endDate,
            priority: req.body.priority,
        });

        await new_todo.save()
            .then(() => res.json({created:true}))
            .catch((err) => res.json(err));
    } catch(err){
        console.log(err);
        res.send("some error occured!");
    }
})

router.put("/:id" , async function(req,res) {
    try{
        await Todos.findByIdAndUpdate(req.params.id,req.body)
            .then(data => res.json({updated: true}))
            .catch(err => res.status(422).json(err));
    }catch(err){
        console.log(err);
        res.send("some error occured!");
    }
})

router.delete("/:id" ,(req,res) => {
    try{
        Todos.findByIdAndRemove(req.params.id )
            .then(response => res.json({deleted:true}))
            .catch(err => res.status(422).json(err));
    }catch(err){
        console.log(err);
        res.send("some error occured!");
    }
});

module.exports = router;