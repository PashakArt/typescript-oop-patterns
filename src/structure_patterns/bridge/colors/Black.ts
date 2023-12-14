import {IColor} from './IColor';

export class Black implements IColor {
    fill(): string {
        return 'black';
    }
}
