import {Draft} from './Draft';
import {DocumentState} from './DocumentState';

export class Moderation extends DocumentState {
    render(): string {
        return 'render moderation document';
    }

    publish(): void {
        this.document.changeState(new Draft());
    }
}
