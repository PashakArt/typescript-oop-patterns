import {DocumentState} from './DocumentState';
import {Published} from './Published';

export class Draft extends DocumentState {
    render(): void {}

    publish(): void {
        this.document.changeState(new Published());
    }
}
