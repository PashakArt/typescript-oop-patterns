import {DocumentState} from './document_states/DocumentState';

export class UserDocument {
    constructor(
        private state: DocumentState,
    ) {
        this.state.setDocument(this);
    }

    render(): string {
        return this.state.render();
    }

    publish(): void {
        this.state.publish();
    }

    changeState(newState: DocumentState) {
        this.state = newState;
        this.state.setDocument(this);
    }
}
