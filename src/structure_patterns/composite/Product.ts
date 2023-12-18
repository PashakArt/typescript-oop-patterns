import {IComponent} from './IComponent';

export class Product implements IComponent {
    constructor(
        private cost: number,
    ) {}

    getCost(): number {
        return this.cost;
    }
}
