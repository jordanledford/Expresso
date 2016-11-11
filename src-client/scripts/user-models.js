const Backbone = require('backbone');
import $ from 'jquery'

const UserModel = Backbone.Model.extend({
   url: '',

})

const UserCollection = Backbone.Collection.extend({
   model: UserModel,
   url: ''
})

module.exports = {
   UserModel,
   UserCollection

}
