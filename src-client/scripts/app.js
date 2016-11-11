const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');

import HomeView from './home-view.js'
const AppRouter = Backbone.Router.extend({
  routes: {
    "": "showHomePage"
  },
  
  showHomePage: function(){
    ReactDOM.render(<HomeView />, document.querySelector('#app-container'));
  },

  initialize: function(){
   Backbone.history.start();
  }
})
const application = new AppRouter
