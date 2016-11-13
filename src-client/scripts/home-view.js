import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import $ from 'jquery'
import ACTIONS from './user-actions.js'
import STORE from './user-store.js'
import AppController from './view-controller.js'

const HomeView = React.createClass({

  render: function() {

     let products = this.props.coffeeShopData.coffeeShopData.models.map(function(model){
       return <ProductView key={model.cid} model={model} />
     })
     console.log('products', products);

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

            { products }

          </div>

        </div>

      </div>

    );
  }
});

const ProductView = React.createClass({
  render: function(){



     return(
          <div className="col-lg-3 col-md-4 col-xs-12">
            <div>
              <img src="https://unsplash.it/g/300/200"/>
            </div>
            <div className="col-md-6">
              <h3>{this.props.model.get('name')}</h3>
              <p>Location: {this.props.model.get('location')}</p>
              <p>Hours: {this.props.model.get('hours')}</p>
              <p>Website: {this.props.model.get('website')}</p>
              <p>Description: {this.props.model.get('info')}</p>

              <i className="fa fa-thumbs-up fa-4x" aria-hidden="true">{this.props.likes}</i>
            </div>
          </div>
   )
  }

});

export { HomeView, ProductView };
