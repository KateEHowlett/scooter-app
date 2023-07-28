class Scooter {
    constructor(station){
        this.station = station;
        this.user = null;
        this.serial = 0;
        this.nextSerial = 1;
        this.charge = 100;
        this.isBroken = false;
    }

    rent(){
        if(this.charge>=20&&this.isBroken===false){

        } else {
            throw new Error("scooter needs to charge or scooter needs repair")
        }
    }

    dock(station){
        this.user = null;
    }

    recharge(){

    }

    requestRepair(){

    }
}


module.exports = Scooter
