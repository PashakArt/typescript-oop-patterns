import {DocumentState} from './DocumentState';
import {Published} from './Published';

export class Draft extends DocumentState {
    render(): string {
        return 'render draft document';
    }

    publish(): void {
        this.document.changeState(new Published());
    }
}
