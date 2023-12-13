import {IChair} from '../interfaces/IChair';
import {ITable} from '../interfaces/ITable';
import {OfficeChair} from '../products/chairs/OfficeChair';
import {OfficeTable} from '../products/tables/OfficeTable';
import {Factory} from './Factory';

export class OfficeFactory extends Factory {
    createChair(): IChair {
        return new OfficeChair();
    }

    createTable(): ITable {
        return new OfficeTable();
    }
}
