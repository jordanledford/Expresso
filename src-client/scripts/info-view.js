const React = require('react')
const ReactDOM = require('react-dom')
const Backbone = require('backbone')

const InfoView = React.createClass({

   render: function(){

      return(
            <div className = "col-sm-offset-3 col-sm-6" id = "info-form">
               <a href = "#"><i className = "fa fa-home fa-2x " aria-hidden = "true"></i></a>
               <h2 className = "info-name">{this.props.name}</h2>
               <img src = "https://unsplash.it/g/100/100" />
               <h3 className = "info-desc">{this.props.info}</h3>
               {this.props.rating}
            </div>
         )
   }
})
module.exports = InfoView
