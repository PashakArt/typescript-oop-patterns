import {Factory} from './factories/Factory';
import {IChair} from './interfaces/IChair';
import {ITable} from './interfaces/ITable';

export class App {
    constructor(
        private factory: Factory,
    ) {}

    createChair(): IChair {
        return this.factory.createChair();
    }

    createTable(): ITable {
        return this.factory.createTable();
    }
}
