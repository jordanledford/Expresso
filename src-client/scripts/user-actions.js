const Backbone = require('backbone')
import STORE from './user-store.js'
import {UserModel, UserCollection} from './user-models.js'
import $ from 'jquery'
import STORE from './user-store.js'

const ACTIONS = {
   registerUser: function(userObj){
      let userMod = new UserModel()
      userMod.set(userObj)

      userMod.save().then(function(serverRes){
         console.log(serverRes)
         location.hash = ""
    })
  },
   fetchCoffeeData: function(){
      let coffeeCollInstance = new UserCollection()
         coffeeCollInstance.fetch().then(function(){
            STORE.setStore('coffeeData', coffeeCollInstance.models )

            console.log(coffeeCollInstance)
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
