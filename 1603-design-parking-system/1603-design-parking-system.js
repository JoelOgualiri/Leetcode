/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */


class ParkingSystem{
    constructor(big, medium,small){
        this.bigSlot = big;
        this.mediumSlot = medium;
        this.smallSlot = small
    }
    
    addCar(val){
        if (val === 1){
            if (this.bigSlot > 0){
                this.bigSlot--
                return true
            }
            return false
        }
        if (val === 2){
            if (this.mediumSlot > 0){
                this.mediumSlot--
                return true
            }
            return false
        }
        if (val === 3){
            if (this.smallSlot > 0){
                this.smallSlot--
                return true
            }
            return false
        }
    }
}

/** 
 * @param {number} carType
 * @return {boolean}
 */


/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */