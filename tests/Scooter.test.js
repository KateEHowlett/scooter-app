const Scooter = require('../src/Scooter')
const User = require('../src/User')

const scooter1 = new Scooter("Norwich");


describe("Is a scooter",()=>{
    it("Has a station",()=>{
        expect(scooter1.station).toBe("Norwich");
    })

    it("is a scooter object",()=>{
      expect(typeof scooter1).toBe(Object);
    })
})

//Method tests
describe('scooter methods', () => {
  // tests here!

  //rent methods
  it("has sufficient charge to rent",()=>{
    expect(scooter1.charge).toBe(100);
  })

  it("is not broken and can be rented",()=>{
    expect(scooter1.isBroken).toBe(false)
  })

  it("cannot be rented",()=>{
    scooter1.charge = 0; // Honestly don't know if this would work? No way to test -_-
    scooter1.isBroken = true;
    expect(scooter1.rent()).toThrow();
  })

  //dock methods
  it("removes user when docked",()=>{
    scooter1.dock();
    expect(this.user).toBe(null);
  })
  // I docked the scooter in the previous test
  // so I don't need to redock it for the second test
  it("adds station when docked",()=>{
    expect(this.station).toBe(null);
  })

  //requestRepair method

  //charge method

})
