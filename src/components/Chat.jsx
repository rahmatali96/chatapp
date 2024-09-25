import React, { useContext } from "react";
import { ChatContext } from "../context/ChatContext";
import Messages from "./Messages";
import Input from "./Input";
import Camera from "../images/camera.png";
import Add from "../images/add.png";
import More from "../images/more.png";

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatInfo">
        <div className="chatInfoDetail">
          <img
            className="chatInfoImage"
            src={data.user?.photoURL}
            alt={data.user.displayName}
          />{" "}
          <span>{data.user.displayName}</span>
        </div>
        <div className="chatIcons">
          <img src={Camera} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
