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

  //rent method

  //dock method

  //requestRepair method

  //charge method

})
