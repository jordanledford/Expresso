const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')
import $ from 'jquery'
import ACTIONS from './user-actions.js'
const SubmitView = React.createClass({


   _submitForm: function(evt){
      evt.preventDefault()
      let newEntry = {
          theName: this.refs.nameInputEl.value,
          theLoc: this.refs.locInputEl.value,
          theHours: this.refs.hoursInputEl.value,
          theWeb: this.refs.webInputEl.value,
          theInfo: this.refs.infoInputEl.value,
          theImg: this.refs.imgInputEl.value
      }

           ACTIONS.createNewCoffeeEntry(newEntry)
   },

      render: function(){

         return(
            <div className = "row text-center">
              <form className = "col-sm-offset-3 col-sm-6" id = "submit-form" onSubmit ={this._submitForm}>
                <a href = "#"><i className = "fa fa-home fa-2x" aria-hidden = "true"></i></a>
                <h2 className = "">Submit a Coffee Shop</h2>
                <div className = "form-group">
                  <label htmlFor = "name">Shop Name</label>
                  <input type = "text" className = "form-control" id = "shop-name" ref="nameInputEl" placeholder = "Enter Shop Name" />
                </div>
                <div className = "form-group">
                  <label htmlFor = "loc">Location</label>
                  <input type = "text" className = "form-control" id = "location" ref="locInputEl" placeholder = "Enter Location" />
                </div>
                <div className = "form-group">
                  <label htmlFor = "hours">Shop Hours</label>
                  <input type = "text" className = "form-control" id = "shop-hours" ref="hoursInputEl" placeholder = "Enter Shop Hours" />
                </div>
                <div className = "form-group">
                  <label htmlFor = "web">WebSite</label>
                  <input type = "text" className = "form-control" id = "website" ref="webInputEl" placeholder= "Enter Website" />
                </div>
                <div className = "form-group">
                  <label htmlFor = "image">Image</label>
                  <input type = "text" className = "form-control" id = "image" ref="imgInputEl" placeholder = "Enter An Image" />
                </div>
                <div className = "form-group">
                  <label htmlFor = "hours">Description</label>
                  <input type = "text" className = "form-control" id = "info" ref="infoInputEl" placeholder = "Enter A Description" />
                </div>
                {/* <div className = "form-group">
                  <label for = "web">Rate</label>
                  <input className = "fa fa-thumbs-up fa-2x" onClick= {this._rateSubmit} data-ratetype = "rate">{this.state.rate}</input>
                </div> */}
                <input type = "submit" className = "btn btn-default" />
              </form>
            </div>
         )
      }

})

module.exports = SubmitView
