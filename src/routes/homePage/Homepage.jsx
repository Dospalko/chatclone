import React from 'react'
import { Link } from 'react-router-dom'
import './homePage.css'
const HomePage = () => {
  return (
    <div className='homepage'>
      <img src="/orbital.png" alt='orbital' className='orbital'/>
      <div className='left'>
        <h1>BotpalkO</h1>
        <h2>Lorem ipsum dolor sit amet consectetuue veritatis qui te dicta nobis obcaecati ut nam magnam. Autem, corrupti!</h2>
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores expedita cum distinctio, ullam sit nesciunt atque tempore ratione temporibus. Perferendis quos ratione, voluptates fuga vitae odio provident rem iusto vero.</h3>
        <Link to='/dasboard'>GET STARTED</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src='/bot.png' alt='bot' className='bot'/>
        </div>
      </div>
    </div>
  )
}

export default HomePage