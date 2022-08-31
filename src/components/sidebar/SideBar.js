import {
  Chat,
  DonutLarge,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import { Avatar, IconButton } from "@mui/material";

import React,{useState,useEffect} from "react";
import SidebarChat from "../Sidebar_Chat/SidebarChat";
import "./SideBar.css";
import db from '../../firebase/firebase'

function SideBar() {
  const [room, setRoom] = useState([]);

  useEffect(() => {
  db.collection('rooms').onSnapshot(snapshot =>(
    setRoom(snapshot.docs.map(doc =>({
      id:doc.id,
      data:doc.data(),

    })
    ))
  ))
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <Avatar />
        <div className="sidebar_headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <Chat />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="sidebar_search">
        <div className="sidebar_searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start new chat" />
        </div>
      </div>
      <div className="sidebar_chats">
        <SidebarChat addNewChat />
        {room.map((room)=>(
<SidebarChat key={room.id} id={room.id} name={room.data.name} />
        ))}
     
      </div>
    </div>
  );
}

export default SideBar;
