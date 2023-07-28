const User = require('../src/User')
const user1 = new User("willow","password",35);

// User tests here

// test username

// test password

// test age

// test login
describe("trying to log in",()=>{
    it("logs in",()=>{
        user1.login("password");
        expect(user1.loggedIn).toBe(true)
    })
    it("doesn't allow wrong passwords",()=>{
        expect(()=>{
            user1.login("secret")}).toThrow();
        })
})

// test logout
describe("logs user out",()=>{
    user1.logout();
    it("logs the user out",()=>{
        expect(user1.loggedIn).toBe(false)
    })
})
