//----- Configuration -----//
//----- Types -----//
import { TForce1D, TForce2D, TForceDirection } from "src/Utility/types";
//----- Components -----//
//----- Outside Libraries -----//
import { uuid } from "uuidv4";


interface IForceBase1DProps {
    type: TForce1D,
    rangeX: { minX: number, maxX: number };
    rangeY: { minY: number, maxY: number };
    direction: TForceDirection;
    objectMass: number;
    duration: number;
}

interface IApplyForceProps {
    velocity: number, 
    timeElapsed: number, 
    timeInstant: number, 
    objectOffset: number
}

/** 
 *  Member Properties
 *  id: uuid to identify instance of the force
 *  type: selected from defined forces
 *  rangeX: a minumum and maximum x value of the viewport
 *  rangeY: a minumum and maximum y value of the viewport
 *  direction: direction the force is applied (X or Y)
 *  objectMass: mass of the spore the force is applied to
 *  duration: length of one loop of an animation
 * 
 *  Member Functions
 *  normalize: normalize progress values to a value between 0 and 1
 *  applyForce: apply force to a given velocity
 *  applyOffsetModifier: modify strength of the force based on distance from the force's origin
 *  instantaneousForceStrength: calculate the strength of a force at an instant in time
 */

abstract class ForceBase1D {
    id: string;
    type: TForce1D;
    rangeX: { minX: number, maxX: number };
    rangeY: { minY: number, maxY: number };
    direction: TForceDirection;
    objectMass: number;
    duration: number;
    
    //constructor(type: TForce1D, rangeX: { minX: number, maxX: number }, rangeY: { minY: number, maxY: number }, direction: TForceDirection, offsetModifier: TOffsetModifier ,objectMass: number, duration: number) {
    constructor(props: IForceBase1DProps) {
        this.id = uuid();
        this.type = props.type;
        this.rangeX = props.rangeX;
        this.rangeY = props.rangeY;
        this.direction = props.direction;
        this.objectMass = props.objectMass;
        this.duration = props.duration;
    }

    normalize(current: number, total: number): number {
        const currentIterationProgress = current % total;
        const normalizedValue = currentIterationProgress / total;
        return normalizedValue;
    }

    applyForce(props: IApplyForceProps): number {
        const timeInstantNormalized = this.normalize(props.timeInstant, this.duration);
        const instantaneousForce = this.instantaneousForceStrength(timeInstantNormalized);
        const finalVelocity = (instantaneousForce * props.timeElapsed) / this.objectMass;
        return props.velocity += finalVelocity;
    };

    abstract applyOffsetModifier(offset: number, forceStrength: number): number 

    abstract instantaneousForceStrength(normalizedTime: number): number;
}


interface IForceBase2DProps {
    type: TForce2D,
    forceX: ForceBase1D,
    forceY: ForceBase1D
}

interface IApplyForcesProps {
    timeElapsed: number, 
    timeInstant: number, 
    offsetX: number, 
    offsetY: number, 
    velocityX: number, 
    velocityY: number
}

/**
 *  Member Properties
 *  id: a uuid to identify an instance of the 2d force
 *  type: selected from defined forces
 *  forceX: the component force to be applied in the X direction
 *  forceY: the component force to be applied in the Y direction
 *  
 *  Member Functions
 *  applyForces: apply X and Y forces to given X and Y velocities
 */
abstract class ForceBase2D {
    id: string;
    type: TForce2D;
    forceX: ForceBase1D;
    forceY: ForceBase1D;

    constructor(props: IForceBase2DProps) {
        this.id = uuid();
        this.type = props.type;
        this.forceX = props.forceX;
        this.forceY = props.forceY;
    }

    applyForces(props: IApplyForcesProps): { velocityX: number, velocityY: number } { 
        const finalVelocityX = this.forceX.applyForce({
            velocity: props.velocityX, 
            timeElapsed: props.timeElapsed, 
            timeInstant: props.timeInstant, 
            objectOffset: props.offsetX });
        const finalVelocityY = this.forceY.applyForce({
            velocity: props.velocityY, 
            timeElapsed: props.timeElapsed,
            timeInstant: props.timeInstant, 
            objectOffset: props.offsetY });

        return { velocityX: finalVelocityX, velocityY: finalVelocityY };
    }
}

export { ForceBase1D, ForceBase2D };

