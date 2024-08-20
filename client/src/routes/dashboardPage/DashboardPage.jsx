import React from 'react';
import './dashboardPage.css';
import {useAuth} from '@clerk/clerk-react'
const dashboardPage = () => {

  const {userId} = useAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = e.target.text.value;
    if (!text) return;
    e.target.text.value = '';
    try {
      const response = await fetch('http://localhost:3000/api/chats', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className='dashboardPage'>
        <div className="texts">
          <div className="logo">
            <img src="/logo.png" alt="" />
            <h1>boTpalko</h1>
          </div>
          <div className="options">
            <div className="option">
              <img src="/chat.png" alt="" />
              <span>Create a new chat</span>
            </div>
            <div className="option">
              <img src="/image.png" alt="" />
              <span>Analyze image</span>
            </div>
            <div className="option">
              <img src="/code.png" alt="" />
              <span>Help me with my code</span>
            </div>
          </div>
        </div>
        <div className="formContainer">
          <form onSubmit={handleSubmit}>
            <input type="text" name="text" placeholder="Ask me anything ..." />
            <button>
              <img src="/arrow.png" alt="" />
            </button>
          </form>
        </div>
    </div>
  );
};

export default dashboardPage;