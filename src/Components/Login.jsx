import React from 'react';
import './Login.css';

function Login(props) {
  return (
    <div className="app-login">
      <div className="card text-center">
        <div className="card-body">
          <img className="card-img-top" src="https://www.shareicon.net/data/2015/08/10/83196_chat_1024x1024.png" alt=""/>
          <h3 className="card-title">Faça login</h3>
          <button className="btn btn-primary" onClick={props.loginWithGoogle}>
            Entrar com sua conta Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;