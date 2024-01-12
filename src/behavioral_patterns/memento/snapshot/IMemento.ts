import {IState} from '../IState';

export interface IMemento {
    getState(): IState;

    getName(): string;
}
