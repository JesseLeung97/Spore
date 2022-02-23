//----- Configuration -----//
//----- Types -----//
//----- Components -----//
import { ForceBase1D, ForceBase2D } from "src/Forces/ForceBase";
//----- Outside Libraries -----//

class WindResistanceX extends ForceBase1D {
    constructor(objectMass: number, duration: number) {
        super("WindResistanceX", "X", objectMass, duration);
    }

    instantaneousForceStrength = () => {
        return 9.81;
    }
}

class WindResistanceY extends ForceBase1D {
    constructor(objectMass: number, duration: number) {
        super("WindResistanceY", "Y", objectMass, duration);
    }

    instantaneousForceStrength = () => {
        return 9.81;
    };
}

class WindResistance extends ForceBase2D {
    
}

export { WindResistanceX, WindResistanceY, WindResistance };