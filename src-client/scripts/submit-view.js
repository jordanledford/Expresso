const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')
import $ from 'jquery'

const SubmitView = React.createClass({


   _submitForm: function(evt){
      evt.preventDefault()
         let theName = this.refs.nameInputEl.value
         let theLoc = this.refs.locInputEl.value
         let theHours = this.refs.hoursInputEl.value
         let theWeb = this.refs.webInputEl.value

           let newCoffeeShop =
               newCoffeeShop.set({
                 name: theName,
                 loc: theLoc,
                 hours: theHours,
                 web: theWeb
           })
           ACTIONS.createNewCoffeeEntry(newCoffeeShop)

  },
  //  _rateSubmit: function(evt){
  //    console.log('clicked')
  //       let theRateType = evt.target.dataset.ratetype
  //       if(theRateType === 'rate'){
  //                this.setState({rate: this.state.rate + 1})
  //          }

  // },

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
                {/* <div className = "form-group">
                  <label for = "web">Rate</label>
                  <input className = "fa fa-thumbs-up fa-2x" onClick= {this._rateSubmit} data-ratetype = "rate">{this.state.rate}</input>
                </div> */}
                     <input type = "submit" className = "btn btn-default" onClick = {this._submitForm} />
               </form>
            </div>
         )
      }

})

module.exports = SubmitView
