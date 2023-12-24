import {IShape} from './IShape';

export class Rectangle implements IShape {
    constructor(
        protected width: number,
        protected length: number,
    ) {}

    clone(): Rectangle {
        return new Rectangle(this.width, this.length);
    }
}
