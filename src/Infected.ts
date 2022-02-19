//----- Configuration -----//
//----- Types -----//
//----- Components -----//
import { Spore } from "Spore";
import { InfectedLogger } from "Utility/Logger";
//----- Outside Libraries -----//
import { uuid } from "uuidv4";

class Infected {
    InfectedId: string;

    BoundMinX: number;
    BoundMinY: number;
    BoundMaxX: number;
    BoundMaxY: number;

    Duration: number;
    IsLoop: boolean;
    MaxSporeCount: number;

    Spores: Array<Spore>;

    //TODO
    //ASSIGN REAL VALUES AFTER TESTING
    _duration = 10;
    _isLoop = false;
    _maxSporeCount = 10;

    constructor(
        BoundMinX: number, 
        BoundMinY: number, 
        BoundMaxX: number, 
        BoundMaxY: number, 
        Duration?: number, 
        IsLoop?: boolean, 
        MaxSporeCount?: number) {
            this.InfectedId = uuid();

            this.BoundMinX = BoundMinX;
            this.BoundMinY = BoundMinY;
            this.BoundMaxX = BoundMaxX;
            this.BoundMaxY = BoundMaxY;
            
            this.Duration = (Duration === undefined ? this._duration : Duration);
            this.IsLoop = (IsLoop === undefined ? this._isLoop :  IsLoop);
            this.MaxSporeCount = (MaxSporeCount === undefined ? this._maxSporeCount : MaxSporeCount);

            if(Duration !== undefined && IsLoop !== undefined) {
                this.IsLoop = false;
                InfectedLogger.LoopAndAnimationTimeConflict();
            }

    }
}