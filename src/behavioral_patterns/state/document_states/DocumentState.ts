import {UserDocument} from '../UserDocument';

export abstract class DocumentState {
    protected document: UserDocument;

    setDocument(newDocument: UserDocument) {
        this.document = newDocument;
    }

    /**
     * document rendering logic in current status
     */
    abstract render(): string;

    abstract publish(): void;
}
