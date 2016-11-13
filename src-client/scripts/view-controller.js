const Backbone = require('backbone')
import $ from 'jquery'

import ACTIONS from './user-actions.js'
import STORE from './user-store.js'

const AppController = React.createClass({

   render: function(){
      switch(this.props.routedFrom){
         case: "HomeView"
            return <HomeView coffeeData = {this.state.coffeeData}/>
            break;

         case: "SubmitView"
            return <SubmitView />
            break;

         case: "AuthView"
            return <AuthView />
            break;

         default:
            return
               <div>
                  <h1>Please Return to the home page</h1>
                  <a href = "#"><i className = "fa fa-home fa-2x" aria-hidden = "true"></i></a>
               </div>
      }
   }
})
//login view, submitView,
