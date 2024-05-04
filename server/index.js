import express from 'express';
import chats from './data/data.js';
import dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './db/index.js';

const app = express();
app.use(cors())

dotenv.config({
    path:'./env'
})

connectDB();

app.get('/', (req,res)=>{
    res.send("Hello everyone")
})


app.get('/api/chats', (req, res)=>{
    res.send(chats);
})

app.get('/api/chat/:id', (req, res)=>{
    // console.log(req.params.id)

    const singleChat = chats.find(c => c._id === req.params.id);
    res.json(singleChat);
})



app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running at port 8000`);
})




// 1mgv2VsSpiKTnABO     mongodb password   
