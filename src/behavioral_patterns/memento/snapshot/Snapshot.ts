import {IState} from '../IState';
import {IMemento} from './IMemento';

export class Snapshot implements IMemento {
    private createdAtInMs: number;

    constructor(
        private state: IState,
    ) {
        this.createdAtInMs = Date.now();
    }

    getState(): IState {
        return this.state;
    }

    getName(): string {
        return `${this.createdAtInMs} snapshot`;
    }
}
