import express from 'express';
import chats from './data/data.js';
import dotenv from 'dotenv';
import cors from 'cors'
import connectDB from './db/index.js';
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

const app = express();
app.use(cors())

dotenv.config({
    path:'./env'
})

connectDB();
app.use(express.json())

app.get('/', (req,res)=>{
    res.send("Hello everyone")
})


// app.get('/api/chats', (req, res)=>{
//     res.send(chats);
// })

// app.get('/api/chat/:id', (req, res)=>{
//     // console.log(req.params.id)

//     const singleChat = chats.find(c => c._id === req.params.id);
//     res.json(singleChat);
// })

//user Routes
app.use('/api/user', userRoutes)

//router for url which doesn't exist
app.use(notFound);
app.use(errorHandler)



app.listen(process.env.PORT || 8000, ()=>{
    console.log(`Server is running at port 8000`);
})




// 1mgv2VsSpiKTnABO     mongodb password   

