class Spore {
    PosX: number;
    PosY: number;
    VelocityX: number;
    VelocityY: number;
    
    constructor(posX: number, posY: number, velocityX: number, velocityY: number) {
        this.PosX = posX;
        this.PosY = posY;
        this.VelocityX = velocityX;
        this.VelocityY = velocityY;
    }
}

export { Spore };