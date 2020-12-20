import React, { useState } from 'react';
import './ChatRoom.css';
import ChatMessage from './ChatMessage';
import Navbar from './Navbar';

function ChatRoom(props) {
  const [formValue, setFormValue] = useState('');

  const formSubmit = (event) => {
    event.preventDefault();
    props.sendMessage(formValue);
    setFormValue('');
  }

  return (
    <div className="chatroom">
      <Navbar user={props.user} logout={props.logout} />

      <div className="container-fluid">
        <section>
        {props.messages &&
          props.messages.map((msg) => <ChatMessage 
                                        key={msg.id} 
                                        message={msg} 
                                        currentUser={ props.user } />)}
        </section>
      </div>

      <div className="container-fluid">
        <form onSubmit={ formSubmit }>
          <input
            type="text"
            value={formValue}
            onChange={(event) => setFormValue(event.target.value)}
          />
          <button type="submit" disabled={!formValue}>
            🚀
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatRoom;