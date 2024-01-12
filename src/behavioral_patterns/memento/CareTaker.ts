import {Editor} from './Editor';
import {IMemento} from './snapshot/IMemento';

/**
 * CareTaker holds snapshots
 */
export class CareTaker {
    private snapshots: IMemento[];

    constructor(
        private editor: Editor,
    ) {}

    backup() {
        const snapshot = this.editor.createSnapshot();

        this.snapshots.push(snapshot);

        console.log(`Saving ${snapshot.getName()}`);
    }

    undo() {
        const snapshot = this.snapshots.pop();

        if (!snapshot) {
            return;
        }

        this.editor.restore(snapshot);
    }
}
