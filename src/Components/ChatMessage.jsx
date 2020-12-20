import React from 'react';
import './ChatMessage.css';

function ChatMessage(props) {
  const {
    text = '',
    uid = '',
    photoURL = 'https://api.adorable.io/avatars/23/abott@adorable.png',
  } = props.message;

  const messageClass =
    uid === props.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <div className="message-body rounded">
        <img className="rounded-circle" src={photoURL} alt="Avatar do Usuário" />
        <p>{text}</p>
      </div>
    </div>
  );
}

export default ChatMessage;