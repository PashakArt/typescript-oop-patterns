import {ApartamentBlock} from '../building_types/ApartamentBlock';
import {IBuilder} from './IBuilder';

export class ApartamentBlockBuilder implements IBuilder {
    private apartamentBlock: ApartamentBlock;

    reset(): void {
        this.apartamentBlock = new ApartamentBlock();
    }

    buildDoors(): void {}

    buildWindows(): void {}

    /**
     * Unlike other creational patterns where products
     * must follow common interface builders can create different products.
     */
    getResult(): ApartamentBlock {
        return this.apartamentBlock;
    }
}
