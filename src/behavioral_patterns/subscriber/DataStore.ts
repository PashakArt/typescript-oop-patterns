import {EventManager} from './EventManager';

export class DataStore {
    private container: any[] = [];

    constructor(
        private eventManager: EventManager,
    ) {}

    insert(data: any) {
        this.container.push(data);
        this.eventManager.notifySubscribers();
    }

    delete(dataToDelete: any) {
        this.container = this.container.filter(data => data !== dataToDelete);
        this.eventManager.notifySubscribers();
    }

    get() {
        return this.container;
    }
}
