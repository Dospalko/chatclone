import { useEffect, useRef } from "react";
import "./chatPage.css";
import NewPrompt from "../../components/newPrompt/NewPrompt";

const ChatPage = () => {

  return (
    <div className="chatPage">
      <div className="wrapper">
        <div className="chat">
          <div className="message ai">Test message</div>
          <div className="message user">Test message</div>
          <div className="message ai">Test message</div>
          <div className="message user">Test message</div>
          <div className="message ai">Test message</div>
          <div className="message user">Test message</div>
          <div className="message ai">Test message</div>
          <div className="message user">Test message</div>
          <div className="message ai">Test message</div>
          <div className="message user">Test message</div>
          <div className="message ai">Test message</div>
          <div className="message user">Test message</div>
          <NewPrompt />

        </div>
      </div>
    </div>
  );
};

export default ChatPage;
