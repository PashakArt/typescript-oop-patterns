export class Rectangle {
    protected width: number;

    protected length: number;

    constructor(width: number, length: number) {
        this.width = width;
        this.length = length;
    }

    clone(): Rectangle {
        return new Rectangle(this.width, this.length);
    }
}
