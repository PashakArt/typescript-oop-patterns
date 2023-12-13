import {IChair} from '../../interfaces/IChair';

export class KithcenChair implements IChair {
    hasLift(): boolean {
        return false;
    }
}
