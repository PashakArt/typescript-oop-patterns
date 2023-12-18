import {IComponent} from './IComponent';

export class Box implements IComponent {
    private components: IComponent[] = [];

    addComponent(newComponent: IComponent) {
        this.components.push(newComponent);
    }

    getCost(): number {
        return this.components.reduce(
            (sum, currentValue) => sum + currentValue.getCost(),
            0,
        );
    }
}
