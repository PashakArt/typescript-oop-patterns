import {IChair} from '../../interfaces/IChair';

export class OfficeChair implements IChair {
    hasLift(): boolean {
        return true;
    }
}
