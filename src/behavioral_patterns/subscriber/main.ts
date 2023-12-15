import {DataStore} from './DataStore';
import {EventManager} from './EventManager';
import {Subscriber} from './Subscriber';

function main() {
    const subscriber = new Subscriber();

    const eventManager = new EventManager(
        [
            subscriber,
        ],
    );

    const dataStore = new DataStore(eventManager);

    dataStore.insert({
        title: 'first data',
    });
}

main();
