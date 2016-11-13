import Backbone from 'backbone';
import $ from 'jquery';

const UserModel = Backbone.Model.extend({
   url: 'localhost:8080/shop',

})

const UserCollection = Backbone.Collection.extend({
   model: UserModel,
   url: 'localhost:8080/shop'
})

module.exports = {
   UserModel,
   UserCollection

}
