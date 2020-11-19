import React from 'react';

function Login(props) {
  return (
    <div className="container">
      <h1>Faça login</h1>
      <button className="btn btn-primary" onClick={props.loginWithGoogle}>
        Entrar com sua conta Google
      </button>
    </div>
  );
}

export default Login;