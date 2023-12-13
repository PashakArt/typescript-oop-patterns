import {ITransport} from '../transports/ITransport';

export abstract class Factory {
    abstract create(): ITransport;
}
