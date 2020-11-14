import { Main } from '../Main.js';
export class Food {
    constructor(width, height, posX, posY) {
        this.width = width;
        this.height = height;
        this.posX = posX;
        this.posY = posY;
    }
    /**
     * Spawn the food piece in a random position on the grid
     */
    randomSpawn() {
        this.posX = Main.randomPos[Math.floor((Math.random() * Main.randomPos.length))];
        this.posY = Main.randomPos[Math.floor((Math.random() * Main.randomPos.length))];
        this.draw();
    }
    ;
    /**
     * Actually draws the green food piece on the grid
     */
    draw() {
        Main.context.fillStyle = "green";
        Main.context.fillRect(this.posX, this.posY, this.width, this.height);
    }
    ;
    /**
     * Change the food position in case the snake is colliding with it
     */
    collisionDetection() {
        if (this.posX === Main.snake.posX && this.posY === Main.snake.posY) {
            this.randomSpawn();
        }
    }
    ;
    /**
     * Makes the food piece disappear
     */
    disappear() {
        Main.context.fillStyle = "white";
        Main.context.fillRect(this.posX, this.posY, this.width, this.height);
    }
}