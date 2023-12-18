import {Receiver} from '../Receiver';

export abstract class Command {
    constructor(
        protected receiver: Receiver,
    ) {}

    setReceiver(newReceiver: Receiver) {
        this.receiver = newReceiver;
    }

    abstract notify(): void;
}
