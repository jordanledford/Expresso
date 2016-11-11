import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
import $ from 'jquery'

const HomeView = React.createClass({
   // getInitialState: function(){
   // //    STORE.set()
   // //    STORE.set()
   // //    STORE.SET('coffeeShopData', new UserCollection())
   // },

  render: function() {
    return (
      <div className="home-container">

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3"> ☕ Expresso ☕ </h1>
            <h3 className="lead">Expresso helps you find and review coffee shops near you.</h3>
          </div>
        </div>

        <div className="container">

          <div className="row">
            <div className="col-lg-3 col-md-4 col-xs-12">
              <div>
                {/* insert this.props data  */}
                <img src="https://unsplash.it/g/100/100"/>
              </div>
              <div className="col-md-6">
                <h3>this.props.name</h3>
                <p>this.props.bio</p>
                <i className="fa fa-thumbs-up" aria-hidden="true"></i>
              </div>
            </div>
            <ProductView />
          </div>

        </div>

      </div>
    );
  }
});

const ProductView = React.createClass({
  getInitialState: function(){
    let startingState = {
      // add shit here
    }
    return startingState;
  },

  render: function(){
     return(
          <div className="col-lg-3 col-md-4 col-xs-12">
            <div>
              {/* need to insert this.props.data  */}
              <img src="https://unsplash.it/g/100/100"/>
            </div>
            <div className="col-md-6">
              <h3>this.props.name</h3>
              <p>this.props.bio</p>
              <i className="fa fa-thumbs-up" aria-hidden="true"></i>
            </div>
          </div>
   )
  }

});

export { HomeView, ProductView };
