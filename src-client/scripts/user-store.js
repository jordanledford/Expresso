const Backbone = require('backbone')
import {UserModel, UserCollection} from './user-models.js'

const STORE = {
   _coffeeData: {
      coffeeName: '',
      coffeeImage: '',
      coffeeRating: '',
      coffeeShopData: new UserCollection(),
   },

   setStore: function(){
      return
   }

   getCoffeeData: function(){
      return
   },
}
module.exports = STORE
