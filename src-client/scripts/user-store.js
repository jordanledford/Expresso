const Backbone = require('backbone')
import {UserModel, UserCollection} from './user-models.js'
import $ from 'jquery'

const STORE = {
      coffeeData: {
         coffeeName: '',
         coffeeImage: '',
         coffeeRating: '',
         coffeeShopData: []
   },

   setStore: function(coffeeProp, maindata){
      if(typeof this.coffeeData[coffeeProp] === 'undefined'){
         console.error(`This is not a Coffee House, reSubmit your entry`)
         return
      }

      this.coffeeData[coffeeProp] = maindata
      Backbone.Events.trigger('storeChange')
   },

   getCoffeeData: function(){
      return this.coffeeData
    }

    onChange: function(function){
      Backbone.Events.on('storeChange', function)
   }

}
module.exports = STORE
