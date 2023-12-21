import {ApartamentBlockSchema} from '../building_types/ApartamentBlockSchema';
import {IBuilder} from './IBuilder';

export class ApartamentBlockSchemaBulder implements IBuilder {
    private apartamentBlockSchema: ApartamentBlockSchema;

    reset(): void {
        this.apartamentBlockSchema = new ApartamentBlockSchema();
    }

    buildDoors(): void {}

    buildWindows(): void {}

    /**
     * Unlike other creational patterns where products
     * must follow common interface builders can create different products.
     */
    getResult(): ApartamentBlockSchema {
        return this.apartamentBlockSchema;
    }
}
