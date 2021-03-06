import { GameManager } from "../GameManager.js";
import { Unit } from "../abstract_classes/Unit.js";
export class Food extends Unit {
    constructor() {
        super();
        this.size = GameManager.unitSize;
        this.randomSpawn();
    }
    /**
     * Draws the green food piece on the map.
     * @returns void
     */
    draw() {
        GameManager.context.fillStyle = "green";
        GameManager.context.fillRect(this.posX, this.posY, this.size, this.size);
    }
    ;
    /**
     * Assign the posX and posY to random position values
     * and then it calls the draw method.
     * @returns void
     */
    randomSpawn() {
        this.posX = this.generateRandomPosition();
        this.posY = this.generateRandomPosition();
        this.draw();
    }
    ;
    /**
     * Generates a feasible position based on the unit
     * size and the map size.
     * Rounds up the value to the nearest integer and always returns
     * a multiple of the 'unitSize'
     * @returns number
     */
    generateRandomPosition() {
        let canvasAvailableSize = GameManager.canvas.width - GameManager.unitSize;
        return Math.round((Math.random() * canvasAvailableSize) / GameManager.unitSize) * GameManager.unitSize;
    }
}
