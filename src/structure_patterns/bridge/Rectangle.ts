import {Shape} from './Shape';

export class Rectangle extends Shape {
    draw(): string {
        return `Rectangle drawn ${this.color.fill()}`;
    }
}
