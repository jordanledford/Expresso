import React from 'react';
import ReactDOM from 'react-dom';
import Backbone from 'backbone';
const HomeView = React.createClass({

  render: function() {
    return (
      <div className="home-container">

        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-3"> ☕ Expresso ☕ </h1>
            <p className="lead">Expresso helps you find and review coffee shops near you.</p>
          </div>
        </div>

        <div className="container">

          <div className="row">
            <div className="col-lg-3 col-md-4 col-xs-1">
              <div>
                {/* insert this.props data  */}
                <img src="https://unsplash.it/g/100/100"/>
              </div>
              <div className="col-md-6">
                <h3>this.props.name</h3>
                <p>this.props.bio</p>
                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-xs-1">
              <div>
                {/* insert this.props data  */}
                <img src="https://unsplash.it/g/100/100"/>
              </div>
              <div className="col-md-6">
                <h3>this.props.name</h3>
                <p>this.props.bio</p>
                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-xs-1">
              <div>
                {/* insert this.props data  */}
                <img src="https://unsplash.it/g/100/100"/>
              </div>
              <div className="col-md-6">
                <h3>this.props.name</h3>
                <p>this.props.bio</p>
                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-xs-1">
              <div>
                {/* insert this.props data  */}
                <img src="https://unsplash.it/g/100/100"/>
              </div>
              <div className="col-md-6">
                <h3>this.props.name</h3>
                <p>this.props.bio</p>
                <i class="fa fa-thumbs-up" aria-hidden="true"></i>
              </div>
            </div>
          </div>

        </div>

      </div>
    );
  },
});

export { HomeView };
