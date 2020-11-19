import React from 'react';

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
      <img src={photoURL} alt="Avatar do Usuário" />
      <p><strong>{text}</strong></p>
    </div>
  );
}

export default ChatMessage;