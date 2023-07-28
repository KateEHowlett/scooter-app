const Scooter = require('../src/Scooter')
const User = require('../src/User')
const ScooterApp = require('../src/ScooterApp')
const app1 = new ScooterApp;

// ScooterApp tests here

// register user
describe("how to register a user",()=>{
    it("allows new users",()=>{
        app1.registerUser("kilobyte","megabyte",26);
        expect(app1.registeredUsers.hasOwnValue("kilobyte")).toBe(true);
    })
    it("doesn't allow under 18",()=>{
        expect(()=>{
            app1.registerUser("salixa","secret",17)}).toThrow();
        })
    it("doesn't register existing users",()=>{
        expect(()=>{
            app1.registerUser("kilobyte","supersecret",26)}).toThrow();
    })
})

// log in

// log out

// rent scooter

// dock scooter
