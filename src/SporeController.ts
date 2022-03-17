//----- Configuration -----//
import { SetPropsOrDefault } from "src/Utility/SetPropsOrDefault";
//----- Types -----//
import { TPair, TPairs } from "src/Utility/types";
//----- Components -----//
import { Spore } from "Spore";
import { InfectedLogger } from "src/Utility/Logger";
//----- Outside Libraries -----//
import { uuid } from "uuidv4";

interface ISporeControllerProps {
    originX: number,
    originY: number,
    boundMinX: number, 
    boundMinY: number, 
    boundMaxX: number, 
    boundMaxY: number, 
    duration?: number, 
    isLoop?: boolean, 
    maxSporeCount?: number,
    shouldRegenerateSpores?: boolean
}


/**
 *  Memeber Properties
 *  InfectedId: uui to identiy instance of 
 *  Member Functions
 */
class SporeController {
    id: string;
    originX: number;
    originY: number;
    boundMinX: number;
    boundMinY: number;
    boundMaxX: number;
    boundMaxY: number;
    duration: number;
    isLoop: boolean;
    maxSporeCount: number;
    shouldRegenerateSpores: boolean;

    spores: TPairs<number, Spore>;

    //TODO
    //ASSIGN REAL VALUES AFTER TESTING
    _duration = 10;
    _isLoop = false;
    _maxSporeCount = 10;
    _shouldRegenerateSpores = true;

    constructor(props: ISporeControllerProps) {
        this.id = uuid();

        this.originX = props.originX;
        this.originY = props.originY;

        this.boundMinX = props.boundMinX;
        this.boundMinY = props.boundMinY;
        this.boundMaxX = props.boundMaxX;
        this.boundMaxY = props.boundMaxY;
        
        this.duration = SetPropsOrDefault(props.duration, this._duration);
        this.isLoop = SetPropsOrDefault(props.isLoop, this._isLoop);
        this.maxSporeCount = SetPropsOrDefault(props.maxSporeCount, this._maxSporeCount);
        this.shouldRegenerateSpores = SetPropsOrDefault(props.shouldRegenerateSpores, this._shouldRegenerateSpores);

        if(props.duration !== undefined && props.isLoop !== undefined) {
            this.isLoop = false;
            const logger = new InfectedLogger();
            logger.LoopAndAnimationTimeConflict();
        }
    }

    /**
     * Cleanup and regenerate spores which have left the viewport boundaries
     */
    checkViewportBoundaries(shouldRegenerate: boolean): void {
        let markedForCleanup: TPairs<number, Spore> = [];
        this.spores.forEach((sporePair) => {
            const spore = sporePair[1];
            if(spore.PosX > this.boundMaxX || spore.PosX < this.boundMinX || spore.PosY > this.boundMaxY || spore.PosY < this.boundMinY) {
                markedForCleanup.push(sporePair);
            }
        });

        if(shouldRegenerate) {
            markedForCleanup.forEach((oldSpore) => {
                const newSpore = new Spore(this.originX, this.originY, 1, 1);
                const oldSporeIndex = oldSpore[0];
                this.spores[oldSporeIndex][1] = newSpore;
            });
        } else {
            markedForCleanup.forEach((oldSpore) => {
                const oldSporeIndex = oldSpore[0];
                this.spores[oldSporeIndex][1] = null;
            });
        }
       
    }

    /**
     *  Release spores by pushing into a list
     */
    emitSpores(maxCount: number): TPairs<number, Spore> {
        let spores: TPairs<number, Spore> = [];
        for(let i = 0; i < maxCount; i++) {
            const newSpore = new Spore(this.originX, this.originY, 1, 1);
            spores.push([i, newSpore]);
        }
        return spores;
    }

    /**
     * 
     */
    sporeUpdateLoop(): void {
        let previousStepTime = 0;
        let startTime: number = null;
        let isLoopComplete = false;

        const update = (stepTime: number): void => {
            if(startTime === null) {
                startTime = stepTime;
            }

            const timeElapsed = stepTime - startTime;

            if(timeElapsed >= this.duration) {
                isLoopComplete = true;
            }

            if(stepTime !== previousStepTime) {
               this.checkViewportBoundaries(this.shouldRegenerateSpores);
               
            }

        }

    }

}

export { SporeController }