//----- Configuration -----//
//----- Types -----//
//----- Components -----//
import { ForceBase1D } from "src/Forces/ForceBase";
//----- Outside Libraries -----//

class Gravity extends ForceBase1D {
    constructor(objectMass: number, duration: number) {
        super("Gravity", "Y", objectMass, duration);
    }

    instantaneousForceStrength: (normalizedTime: number) => number = () => {
        return 9.81;
    }
}

export { Gravity };