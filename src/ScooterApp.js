const User = require('./User')
const Scooter = require('./Scooter')

class ScooterApp {
  // ScooterApp code here
  constructor(){
    this.stations = {
      Norwich:[],
      Ely:[],
      Cambridge:[]
    };
    this.registeredUsers = {}
  }

  registerUser(username,password,age){
    if(age<18){
      throw new Error("too young to register")
    } else if (this.registeredUsers.hasOwnProperty(username)){
      throw new Error("already registered")
    } else {
      this.registeredUsers[username] = password;
    }
  }
}

module.exports = ScooterApp
