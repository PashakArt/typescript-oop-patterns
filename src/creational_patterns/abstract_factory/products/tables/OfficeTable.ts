import {ITable} from '../../interfaces/ITable';

export class OfficeTable implements ITable {
    isTransformer(): boolean {
        return false;
    }
}
