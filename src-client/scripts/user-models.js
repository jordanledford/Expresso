const Backbone = require('backbone');

const UserModel = Backbone.Models.extend({
   url: '',

})

const UserCollection = Backbone.Collections.extend({
   model: UserModel,
   url: ''
})

module.exports = {
   UserModel,
   UserCollection

}
