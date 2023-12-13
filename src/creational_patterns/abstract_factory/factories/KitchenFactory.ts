import {IChair} from '../interfaces/IChair';
import {ITable} from '../interfaces/ITable';
import {KithcenChair} from '../products/chairs/KitchenChair';
import {KitchenTable} from '../products/tables/KithcenTable';
import {Factory} from './Factory';

export class KitchenFactory extends Factory {
    createChair(): IChair {
        return new KithcenChair();
    }

    createTable(): ITable {
        return new KitchenTable();
    }
}
