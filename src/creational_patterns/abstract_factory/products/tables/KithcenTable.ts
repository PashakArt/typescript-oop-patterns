import {ITable} from '../../interfaces/ITable';

export class KitchenTable implements ITable {
    isTransformer(): boolean {
        return true;
    }
}
