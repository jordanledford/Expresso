import Backbone from 'backbone';
import $ from 'jquery';

const UserModel = Backbone.Model.extend({
   url: 'http://localhost:8080/user',

      initialize: function(){

      }
})

const UserCollection = Backbone.Collection.extend({
   model: UserModel,
   url: 'http://localhost:8080/shop',

      initialize: function(){

      }
})

module.exports = {
   UserModel,
   UserCollection

}
