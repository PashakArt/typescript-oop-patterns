import {Rectangle} from './Rectangle';

export class Square extends Rectangle {
    constructor(width: number) {
        super(width, width);
    }

    clone(): Square {
        return new Square(this.width);
    }
}
