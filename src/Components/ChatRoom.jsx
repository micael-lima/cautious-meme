import React, { useState } from 'react';
import ChatMessage from './ChatMessage';

function ChatRoom(props) {
  const [formValue, setFormValue] = useState('');

  const formSubmit = (event) => {
    event.preventDefault();
    props.sendMessage(formValue);
    setFormValue('');
  }

  return (
    <div className="container">
      <p>Usuário: {props.user.email}</p>
      <button className="btn btn-danger" onClick={props.logout}>
        Sair
      </button>

      <section>
        {props.messages &&
          props.messages.map((msg) => <ChatMessage 
                                        key={msg.id} 
                                        message={msg} 
                                        currentUser={ props.user } />)}
      </section>

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
  );
}

export default ChatRoom;