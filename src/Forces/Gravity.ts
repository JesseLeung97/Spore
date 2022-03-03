//----- Configuration -----//
//----- Types -----//
//----- Components -----//
import { ForceBase1D } from "src/Forces/ForceBase";
//----- Outside Libraries -----//

interface IGravityProps {
    rangeX: { minX: number, maxX: number }, 
    rangeY: { minY: number, maxY: number}, 
    objectMass: number, 
    duration: number
}

class Gravity extends ForceBase1D {
    constructor(props: IGravityProps) {
        super({
            type: "Gravity", 
            rangeX: props.rangeX, 
            rangeY: props.rangeY, 
            direction: "Y", 
            objectMass: props.objectMass, 
            duration: props.duration });
    }

    instantaneousForceStrength(normalizedTime: number): number {
        return 9.81;
    }

    applyOffsetModifier(offset: number, forceStrength: number): number {
        return forceStrength;
    }
}

export { Gravity };