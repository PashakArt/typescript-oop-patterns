import {Shape} from './Shape';

export class Triangle extends Shape {
    draw(): string {
        return `Triangle drawn ${this.color.fill()}`;
    }
}
