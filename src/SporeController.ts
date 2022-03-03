//----- Configuration -----//
//----- Types -----//
import { TPair, TPairs } from "src/Utility/types";
//----- Components -----//
import { Spore } from "Spore";
import { InfectedLogger } from "src/Utility/Logger";
//----- Outside Libraries -----//
import { uuid } from "uuidv4";

// Spore controller -- Initialize, update, and destroy spores
class SporeController {
    InfectedId: string;

    OriginX: number;
    OriginY: number;

    BoundMinX: number;
    BoundMinY: number;
    BoundMaxX: number;
    BoundMaxY: number;

    Duration: number;
    IsLoop: boolean;
    MaxSporeCount: number;

    Spores: TPairs<number, Spore>;

    //TODO
    //ASSIGN REAL VALUES AFTER TESTING
    _duration = 10;
    _isLoop = false;
    _maxSporeCount = 10;

    constructor(
        OriginX: number,
        OriginY: number,
        BoundMinX: number, 
        BoundMinY: number, 
        BoundMaxX: number, 
        BoundMaxY: number, 
        Duration?: number, 
        IsLoop?: boolean, 
        MaxSporeCount?: number) {
            this.InfectedId = uuid();

            this.OriginX = OriginX;
            this.OriginY = OriginY;

            this.BoundMinX = BoundMinX;
            this.BoundMinY = BoundMinY;
            this.BoundMaxX = BoundMaxX;
            this.BoundMaxY = BoundMaxY;
            
            this.Duration = (Duration === undefined ? this._duration : Duration);
            this.IsLoop = (IsLoop === undefined ? this._isLoop :  IsLoop);
            this.MaxSporeCount = (MaxSporeCount === undefined ? this._maxSporeCount : MaxSporeCount);

            if(Duration !== undefined && IsLoop !== undefined) {
                this.IsLoop = false;
                const logger = new InfectedLogger();
                logger.LoopAndAnimationTimeConflict();
            }
    }

    // Cleanup and regenerate spores which have left the visual boundaries
    checkViewportBoundaries(): void {
        let markedForCleanup: TPairs<number, Spore> = [];
        this.Spores.forEach((sporePair) => {
            const spore = sporePair[1];
            if(spore.PosX > this.BoundMaxX || spore.PosX < this.BoundMinX || spore.PosY > this.BoundMaxY || spore.PosY < this.BoundMinY) {
                markedForCleanup.push(sporePair);
            }
        });

        markedForCleanup.forEach((oldSpore) => {
            const newSpore = new Spore(this.OriginX, this.OriginY, 1, 1);
            const oldSporeIndex = oldSpore[0];
            this.Spores[oldSporeIndex][1] = newSpore;
        });
    }

    // Instantiate spores into list
    // Tuple<array index, Spore object>
    emitSpores(maxCount: number): TPairs<number, Spore> {
        let spores: TPairs<number, Spore> = [];
        for(let i = 0; i < maxCount; i++) {
            const newSpore = new Spore(this.OriginX, this.OriginY, 1, 1);
            spores.push([i, newSpore]);
        }
        return spores;
    }

}

export { SporeController }