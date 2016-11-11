import ReactDOM from 'react-dom';
import React from 'react';
import Backbone from 'backbone';
import HomeView from './home-view.js';

const containerEl = document.querySelector('#app-container');
const AppRouter = Backbone.Router.extend({
  routes: {
    "": "showHomePage",
    "/shop/:id": "showThisShop",
    "/login": "loginPage"
  },

  showHomePage: function(){
    // add fetch requests and logic for data
    ReactDOM.render(<HomeView/>, containerEl);
  },
  showOneShop: function(){
    // add logic for new view and create new view (if time allows)
  },
  loginPage: function(){
    ReactDOM.render(<LoginView/>, containerEl);
  },

  initialize: function(){
   Backbone.history.start();
  }
});

const application = new AppRouter;
