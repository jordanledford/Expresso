import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import $ from 'jquery'
import ACTIONS from 'user-actions.js'

const HomeView = React.createClass({

  render: function() {
     console.log('dgljgldjg')
    return (
      <div className="home-container">

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3"> <span className="coffee">☕ </span>Expresso<span className="coffee"> ☕</span></h1>
            <h3 className="lead">Expresso helps you find and review coffee shops near you.</h3>
          </div>
          <nav className="breadcrumb">
            <a className="breadcrumb-item" href="/">Home 	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;</a>
            <a className="breadcrumb-item" href="/auth">Log in	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;</a>
            <a className="breadcrumb-item" href="/submit">Submit	&nbsp;	&nbsp;	&nbsp;	&nbsp;	&nbsp;</a>
          </nav>
        </div>

        <div className="container">

          <div className="row">
            <ProductView />
          </div>

        </div>

      </div>

    );
  }
});

const ProductView = React.createClass({
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
      self.setState(newState)

   }
   console.log('heheheh')
   ACTIONS.fetchCoffeeData()

 },

  render: function(){
     return(
          <div className="col-lg-3 col-md-4 col-xs-12">
            <div>
              {this.props.coffeeData}
              <img src="https://unsplash.it/g/500/400"/>
            </div>
            <div className="col-md-6">
              <h3>this.props.name</h3>
              <p>this.props.bio</p>
              <i className="fa fa-thumbs-up fa-4x" aria-hidden="true"></i>
            </div>
          </div>
   )
  }

});

export { HomeView, ProductView };
