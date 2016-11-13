const Backbone = require('backbone')
import $ from 'jquery'

import ACTIONS from './user-actions.js'
import STORE from './user-store.js'

const AppController = React.createClass({
   getInitialState: function(){
      rate: 0;
    STORE.setStore('coffeeData', [])

    let initialState = this.getCoffeeData()
    console.log(initialState)
    return initialState
},

componentWillMount: function(){
   let self = this
    STORE.onChange(function(){
      let newState = STORE.getStoreData()
         self.setState(newState)    })
},
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
