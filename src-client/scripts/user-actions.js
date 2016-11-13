const Backbone = require('backbone')
import STORE from './user-store.js'
import {UserModel, UserCollection} from './user-models.js'
import $ from 'jquery'

const ACTIONS = {
   fetchCoffeeData: function(){
      let coffeeCollInstance = new UserCollection()
         coffeeCollInstance.fetch().then(function(){
            STORE.setStore('coffeeData', coffeeCollInstance.models )

            console.log(coffeeCollInstance)
            STORE.setStore()
      })
   },


   createNewCoffeeEntry: function(){
      let newCoffeeEntry = new UserModel()
         newCoffeeEntry.set()
         newCoffeeEntry.save().then(function(servRes){
           window.location.hash = '';
      })
   }
}

module.exports = ACTIONS
