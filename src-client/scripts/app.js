const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');

import SubmitView from './submit-view.js'
import AuthView from './auth-view.js'
import HomeView from './home-view.js'
import {UserModel, UserCollection} from './user-models.js'
import ACTIONS from './user-actions.js'
import STORE from './user-store.js'

const AppRouter = Backbone.Router.extend({
  routes: {
     "submit" : "showSubmitView",
     "auth": "showAuthPage",
    "": "showHomePage"
  },

  showSubmitView: function(){
     ReactDOM.render(<SubmitView />, document.querySelector('#app-container'))
   },
  showAuthPage: function(){
     ReactDom.render(<AuthView />, document.querySelector('#app-container'));
   },
  showHomePage: function(){
     ReactDOM.render(<HomeView />, document.querySelector('#app-container'));
  },

  initialize: function(){
   Backbone.history.start();
  }
})
const application = new AppRouter;
