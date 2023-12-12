import {ITransport} from './ITransport';

export class Ship implements ITransport {
    deliver(): void {
        console.log('I will deliver order by ship');
    }
}
