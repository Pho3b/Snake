import { Direction } from "../HelperComponent.js";
class SnakePart {
    constructor() {
        this.increment = 10;
        this.prevPosition = {
            posX: 0,
            posY: 0,
            direction: Direction.Still
        };
    }
}
