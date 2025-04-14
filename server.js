const express=require('express');
const app=express();
app.use(express.json());
const PORT=6000;

let tasks=[];

app.post('/task',(req,res)=>{
    const {title,descrition,completed}=req.body;
    if(!title){
        return res.status(400).json({message:"title is required"});
    };

    const newTask={
        id:tasks.length+1,
        title,
        description,
        completed,
    }

    tasks.push(newTask);
    res.status(201).json({message:"task added"});

})

app.get('/',(req,res)=>{
    res.status(200).json(tasks);
});

app.put('/tasks/:id',(req,res)=>{
    const id= parseInt(req.params.id);
    const task=tasks.find(t=>t.id===id);
    if(!task){
        return res.status(404).json({error:"task not found"});
    }
})