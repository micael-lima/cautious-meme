import React from 'react';

function Navbar (props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <p className="navbar-text mb-0">Usuário: {props.user.displayName}</p>
        <button className="btn btn-danger" onClick={props.logout}>
         <i class="fas fa-sign-out-alt"></i> Sair
        </button>
      </div>
    </nav>
  );
}

export default Navbar;