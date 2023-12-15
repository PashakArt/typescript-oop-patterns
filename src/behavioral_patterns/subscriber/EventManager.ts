import {ISubscriber} from './ISubscriber';

export class EventManager {
    constructor(
        private subscribers: ISubscriber[],
    ) {}

    subscribe(subscriber: ISubscriber) {
        if (!this.subscribers.includes(subscriber)) {
            this.subscribers.push(subscriber);
        }
    }

    unsubscribe(subscriberToDelete: ISubscriber) {
        this.subscribers = this.subscribers.filter(subscriber => subscriber !== subscriberToDelete);
    }

    notifySubscribers() {
        for (const subscriber of this.subscribers) {
            subscriber.update();
        }
    }
}
