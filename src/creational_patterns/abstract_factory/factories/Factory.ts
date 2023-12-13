import {IChair} from '../interfaces/IChair';
import {ITable} from '../interfaces/ITable';

export abstract class Factory {
    abstract createChair(): IChair;

    abstract createTable(): ITable;
}
