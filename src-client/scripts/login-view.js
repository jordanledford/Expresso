import React from 'react';
import ReactDOM from 'react-dom';

const LoginView = React.CreateClass({

  getInitialState: function(){
    let startingState = {
      "name": undefined,
      "password": undefined
    }
  },

  render: function(){
    return (
      <div className="login-page">
        <h1> wow we should probably log in eh? </h1>
        <input ref="username"></input>
        <input ref="password"></input>

      </div>
    );
  }
});

export { LoginView };
