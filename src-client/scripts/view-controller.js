const Backbone = require('backbone')

import ACTIONS from './user-actions.js'
import STORE from './user-store.js'

const AppController = React.createClass({
   getInitialState: function(){
      let rateState = {
         rate: 0
      }
      return rateState
   },

   render: function(){
      switch(this.props.routedFrom){
         case: "HomeView"
            return <HomeView />
            break;

         case: "SubmitView"
            return <SubmitView />
            break;

         case: "AuthView"
            return <AuthView />
            break;
      }
   }
})
//login view, submitView,
