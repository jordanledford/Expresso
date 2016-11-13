const Backbone = require('backbone')
import STORE from './user-store.js'
import {UserModel, UserCollection} from './user-models.js'
import $ from 'jquery'

const ACTIONS = {
   registerUser: function(newUser){
      let userMod = new UserModel()
      userMod.set(newUser)
      console.log(userMod)

      userMod.save().then(function(serverRes){
         console.log(serverRes)
         location.hash = '';
    })
  },

   fetchCoffeeData: function(){
      let coffeeCollInstance = new UserCollection()
         coffeeCollInstance.fetch().then(function(){
            STORE.setStore('coffeeShopData', coffeeCollInstance)

            console.log('fetch ', coffeeCollInstance)
      })
      return coffeeCollInstance
   },


   createNewCoffeeEntry: function(newEntry){
      let newCoffeeEntry = new UserModel()
          newCoffeeEntry.set(newEntry)
          newCoffeeEntry.save().then(function(servRes){
           window.location.hash = '';
      })
   }
}

module.exports = ACTIONS
