import {DataMiner} from './DataMiner';

/**
 * Сoncrete class overrides some (or all) steps of algorithm.
 * Сoncrete class does not override template method.
 */
export class CSVDataMiner extends DataMiner {
    parseFile(file: Buffer): string {
        return file.toString();
    }
}
