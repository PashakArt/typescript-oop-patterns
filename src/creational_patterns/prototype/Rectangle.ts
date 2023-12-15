export abstract class Rectangle {
    protected width: number;

    protected length: number;

    constructor(width: number, length: number) {
        this.width = width;
        this.length = length;
    }

    abstract clone(): Rectangle;
}
