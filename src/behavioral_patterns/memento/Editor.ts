import {IState} from './IState';
import {IMemento} from './snapshot/IMemento';
import {Snapshot} from './snapshot/Snapshot';

export class Editor {
    constructor(
        private state: IState,
    ) {}

    createSnapshot(): IMemento {
        return new Snapshot(this.state);
    }

    restore(snapshot: IMemento) {
        this.state = snapshot.getState();
    }
}
