import {DocumentState} from './DocumentState';
import {Moderation} from './Moderation';

export class Published extends DocumentState {
    render(): string {
        return 'render publish document';
    }

    publish(): void {
        this.document.changeState(new Moderation());
    }
}
