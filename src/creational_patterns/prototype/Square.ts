import {IShape} from './IShape';
import {Rectangle} from './Rectangle';

export class Square implements IShape {
    constructor(private width: number) {}

    clone(): Square {
        return new Square(this.width);
    }
}
