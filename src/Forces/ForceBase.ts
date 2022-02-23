//----- Configuration -----//
//----- Types -----//
import { TForce1D, TForce2D, TForceDirection } from "src/Utility/types";
//----- Components -----//
//----- Outside Libraries -----//
import { uuid } from "uuidv4";

// id: uuid to identify instance of force
// type: type of force -- used within Infected to apply the force
// instantaneousForceStrength: a graph of force strength (y) over time (x) with x and y normalized to 0..1
// normalizeTime: convert time to a normalized value between 0..1
// applyForce: apply the calculated instantaneous force strength and return a new velocity
// vfinal = (force * time) / mass
abstract class ForceBase1D {
    id: string;
    type: TForce1D;
    direction: TForceDirection;
    objectMass: number;
    duration: number;
    
    constructor(type: TForce1D, direction: TForceDirection, objectMass: number, duration: number) {
        this.id = uuid();
        this.type = type;
        this.direction = direction;
        this.objectMass = objectMass;
        this.duration = duration;
    }

    normalizeTime(timeInstant: number, duration: number): number {
        const currentLoopProgress = timeInstant % duration;
        const normalizedValue = currentLoopProgress / duration;
        return normalizedValue;
    }

    abstract instantaneousForceStrength: (normalizedTime: number) => number;

    applyForce(timeElapsed: number, timeInstant: number): number {
        const timeInstantNormalized = this.normalizeTime(timeInstant, this.duration);
        const instantaneousForce = this.instantaneousForceStrength(timeInstantNormalized);
        const finalVelocity = (instantaneousForce * timeElapsed) / this.objectMass;
        return finalVelocity;
    };
}

// id: uuid to identify instance of force
// type: type of force -- used within Infected to apply the force
// forceX: a force to be applied to the X velocity
// forceY: a force to be applied to the Y velocity
// applyForces: apply the calculated instantaneous force strengths and return a new velocity X and velocity Y
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

    applyForces(timeElapsed: number, timeInstant: number): { velocityX: number, velocityY: number } { 
        const finalVelocityX = this.forceX.applyForce(timeElapsed, timeInstant);
        const finalVelocityY = this.forceY.applyForce(timeElapsed, timeInstant);

        return { velocityX: finalVelocityX, velocityY: finalVelocityY };
    }
}

export { ForceBase1D, ForceBase2D };

