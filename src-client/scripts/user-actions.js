const Backbone = require('backbone')
import STORE from './user-store.js'
import {UserModel, UserCollection} from './user-models.js'

const ACTIONS = {
   fetchCoffeeData: function(){
      let coffeeCollInstance = new UserCollection()
         coffeeCollInstance.fetch().then(function(){
            STORE.setStore()
         })

   }
},

createNewCoffeeEntry: function(){
   let newCoffeeEntry = new UserModel()
       newCoffeeEntry.set()
       newCoffeeEntry.save().then(function(servRes){
          ACTIONS.fetchCoffeeData()

       })


}

module.exports = ACTIONS
