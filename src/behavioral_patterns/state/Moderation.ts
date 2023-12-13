import {Draft} from './Draft';
import {DocumentState} from './DocumentState';

export class Moderation extends DocumentState {
    render(): void {}

    publish(): void {
        this.document.changeState(new Draft());
    }
}
