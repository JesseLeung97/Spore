import { uuid } from "uuidv4";

class Spore {
    Id: string;
    PosX: number;
    PosY: number;
    VelocityX: number;
    VelocityY: number;
    
    constructor(posX: number, posY: number, velocityX: number, velocityY: number) {
        this.Id = uuid();
        this.PosX = posX;
        this.PosY = posY;
        this.VelocityX = velocityX;
        this.VelocityY = velocityY;
    }
}

export { Spore };