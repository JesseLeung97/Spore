//----- Configuration -----//
//----- Types -----//
import { TForce1D, TForce2D } from "src/Utility/types";
//----- Components -----//
//----- Outside Libraries -----//
import { uuid } from "uuidv4";

// id: uuid to identify instance of force
// type: type of force -- used within Infected to apply the force
// instantaneousForceStrength: a graph of force strength (y) over time (x) with x and y normalized to 0..1
// applyForce: apply the calculated instantaneous force strength to an input velocity 
abstract class ForceBase1D {
    id: string;
    type: TForce1D;
    
    constructor(type: TForce1D) {
        this.id = uuid();
        this.type = type;
    }

    abstract instantaneousForceStrength: (normalizedTime: number) => number;

    abstract applyForce: (timeElapsed: number, velocity: number) => number;
}

// id: uuid to identify instance of force
// type: type of force -- used within Infected to apply the force
// forceX: a force to be applied to the X velocity
// forceY: a force to be applied to the Y velocity
// applyForces: apply the calculated instantaneous force strengths to an input velocity X and velocity Y
abstract class ForceBase2D {
    id: string;
    type: TForce2D;
    forceX: ForceBase1D;
    forceY: ForceBase1D;

    constructor(type: TForce2D, forceX: ForceBase1D, forceY: ForceBase1D) {
        this.id = uuid();
        this.type = type;
        this.forceX = forceX;
        this.forceY = forceY;
    }

    applyForces(normalizedTime: number, timeElapsed: number, velocityX: number, velocityY: number): { velocityX: number, velocityY: number} {
        const forceStrengthX = this.forceX.instantaneousForceStrength(normalizedTime);
        const forceStrengthY = this.forceY.instantaneousForceStrength(normalizedTime);
        const newVelocityX = this.forceX.applyForce(timeElapsed, velocityX);
        const newVelocityY = this.forceY.applyForce(timeElapsed, velocityY);

        return { velocityX: newVelocityX, velocityY: newVelocityY };
    }
}

