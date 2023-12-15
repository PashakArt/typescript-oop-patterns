import {ISubscriber} from './ISubscriber';

export class Subscriber implements ISubscriber {
    update(): void {
        console.log('Event has emitted. Now I know about it');
    }
}
