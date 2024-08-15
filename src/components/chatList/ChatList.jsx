import React from "react";
import "./chatList.css";
import { Link } from "react-router-dom";
const ChatList = () => {
  return (
    <div className="chatlist">
      <span className="title">DASHBOARD</span>
      <Link to="/dashboard">Create a new Chat</Link>
      <Link to="/">Explore BOTPLAKOS AI</Link>
      <Link to="/">Contact</Link>
      <hr />
      <span className="title">RECENT CHATS</span>
      <div className="list">
        <Link to="/">CHAT</Link>
        <Link to="/">CHAT</Link>
        <Link to="/">CHAT</Link>
        <Link to="/">CHAT</Link>
        <Link to="/">CHAT</Link>
        <Link to="/">CHAT</Link>
        <Link to="/">CHAT</Link>
      </div>
      <hr />
      <div className="upgrade">
        <img src="/logo.png" alt="" />
        <div className="texts">
          <span>Upgrade to Lama AI Pro</span>
          <span>Get unlimited access to all features</span>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
