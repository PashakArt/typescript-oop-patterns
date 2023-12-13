import {IColor} from './IColor';

export class Red implements IColor {
    fill(): string {
        return 'red';
    }
}
