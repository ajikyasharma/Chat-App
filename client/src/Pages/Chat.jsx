import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react';

function Chat() {

    const [chats, setChats] = useState([])

     const fetchData = async()=>{
        const response= await axios.get('http://localhost:8000/api/chats');

        console.log(response.data)
        setChats(response.data)


     }

     useEffect(()=>{
          fetchData()
     },[])

  return (
    <div>
        Chats 

        {chats.map((chat,idx)=>(
            <h1 key={idx}>{chat.chatName}</h1>
        ))}
    </div>
  )
}

export default Chat