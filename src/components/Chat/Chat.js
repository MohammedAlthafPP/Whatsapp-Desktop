import { Avatar,IconButton } from '@mui/material'
import {  SearchOutlined,MoreVert } from "@mui/icons-material";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicNoneIcon from '@mui/icons-material/MicNone';
import React,{useEffect,useState} from 'react'
import './Chat.css'

function Chat() {

  const [seed, setSeed] = useState('');
  const [input, setInput] = useState("");
    useEffect(() => {
      setSeed(Math.floor(Math.random()*5000))  
    }, []);

    const sendMessage =(e)=>{
      e.preventDefault();
      console.log("You typed >>>>",input);
      setInput("")
    }

  return (
    <div className='chat'>
     
        <div className="chat_header">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="chat__headerInfo">
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
        <IconButton>

        <SearchOutlined/>
    </IconButton>
    <IconButton>
   <AttachFileIcon/>
    </IconButton>
    <IconButton>
    <MoreVert/>
    </IconButton>
        </div>
        </div>
        <div className="chat__body">
          <p className={`chat__massege ${ true && "chat__reciever"}`}>
          <span className="chat__name">Althaf</span> Hey guys <span className='chat__timestamp'>3:50pm</span> </p> 


        </div>
        <div className="chat__footer">
          <InsertEmoticonIcon/>
          <form action="">

            <input type="text" placeholder='Type a message' value={input} onChange={e => setInput(e.target.value)} />
            <button type="submit" onClick={sendMessage} >send a message</button>




          </form>
          <MicNoneIcon/>
        </div>

        </div>
  )
}

export default Chat