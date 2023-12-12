import {ITransport} from './ITransport';

export abstract class Factory {
    abstract create(): ITransport;
}
