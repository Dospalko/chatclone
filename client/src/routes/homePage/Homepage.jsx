import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./homePage.css";
import { TypeAnimation } from "react-type-animation";
const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="orbital" className="orbital" />
      <div className="left">
        <h1>BotpalkO</h1>
        <h2>
          Lorem ipsum dolor sit amet consectetuue veritatis qui te dicta nobis
          obcaecati ut nam magnam. Autem, corrupti!
        </h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          expedita cum distinctio, ullam sit nesciunt atque tempore ratione
          temporibus. Perferendis quos ratione, voluptates fuga vitae odio
          provident rem iusto vero.
        </h3>
        <Link to="/dashboard">GET STARTED</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="bot" className="bot" />
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "./human1.jpeg"
                  : typingStatus === "human2"
                  ? "./human2.jpeg"
                  : "./bot.png"
              }
              alt="bot"
              className="bot2"
            />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Human: We produce food for Mice",

                2000,
                () => {
                  setTypingStatus("bot");
                }, // wait 1s before replacing "Mice" with "Hamsters"
                "We produce food for Hamsters",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "We produce food for Guinea Pigs",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "We produce food for Chinchillas",
                2000,
                () => {
                  setTypingStatus("human1");
                },
              ]}
              wrapper="span"
              omitDeletionAnimation={true}
              cursor={true}
              repeat={Infinity}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="logo" />
        <div className="links">
          <Link to="/terms">Terms of Service</Link>
          <Link to="/privacy">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
