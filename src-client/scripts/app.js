const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');

import InfoView from './info-view.js'
import SubmitView from './submit-view.js'
import AuthView from './authview.js'
import HomeView from './home-view.js'

const AppRouter = Backbone.Router.extend({
  routes: {
     "info" :  "showInfoPage",
     "submit" : "showSubmitView",
     "auth": "showAuthPage",
    "": "showHomePage"
  },

  showSubmitView: function(){
     ReactDOM.render(<SubmitView/>, document.querySelector('#app-container'))
 }
  showAuthPage: function(){
     ReactDom.render(<AuthView/>, document.querySelector('#app-container'));
 }
  showHomePage: function(){
    ReactDOM.render(<HomeView />, document.querySelector('#app-container'));
  },

  initialize: function(){
   Backbone.history.start();
  }
})
const application = new AppRouter;
