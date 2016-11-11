const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')


const AuthView = React.createClass({

   render: function(){

      return(
               <div class="row text-center">
                  <form class="col-sm-offset-3 col-sm-6 " id="auth-form">
                        <a href="#"><i class="fa fa-home fa-2x " aria-hidden="true"></i></a>
                        <h2 class="">Login or Sign Up</h2>
                     <div class="form-group">
                        <label for = "name">Name</label>
                        <input type="text" class="form-control" id="name" placeholder="Enter Name" />
                     </div>
                     <div class="form-group">
                        <label for="pw">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Enter Password"/>
                     </div>
                        <button type="submit" class="btn btn-default">Submit</button>
                  </form>
               </div>
            )
         }
})
module.export = AuthView
