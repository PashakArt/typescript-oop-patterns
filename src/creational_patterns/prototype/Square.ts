import {Rectangle} from './Rectangle';

export class Square extends Rectangle {
    clone(): Rectangle {
        return new Square(this.width, this.length);
    }
}
