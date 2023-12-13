import {DocumentState} from './DocumentState';
import {Moderation} from './Moderation';

export class Published extends DocumentState {
    render(): void {}

    publish(): void {
        this.document.changeState(new Moderation());
    }
}
