import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import $ from 'jquery'
import ACTIONS from './user-actions.js'

const AuthView = React.createClass({
   _submitAuth: function(evt){
      evt.preventDefault()

      let newUser = {
         name: evt.target.name.value,
         password: evt.target.password.value
      }

      ACTIONS.registerUser(newUser)
   },
   
   render: function(){

      return(
               <div class = "row text-center">
                  <form class = "col-sm-offset-3 col-sm-6 " id="auth-form" onSubmit = {this._submitAuth}>
                        <a href = "#"><i class="fa fa-home fa-2x " aria-hidden="true"></i></a>
                        <h2 class = "">Login or Sign Up</h2>
                     <div class = "form-group">
                        <label for = "name">Name</label>
                        <input type = "text" class="form-control" id="name" placeholder="Enter Name" />
                     </div>
                     <div class="form-group">
                        <label for = "pw">Password</label>
                        <input type = "password" class="form-control" id="password" placeholder="Enter Password"/>
                     </div>
                        <button type = "submit" class="btn btn-default">Submit</button>
                  </form>
               </div>
            )
         }
})
module.exports = AuthView
