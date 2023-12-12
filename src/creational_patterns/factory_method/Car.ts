import {ITransport} from './ITransport';

export class Car implements ITransport {
    deliver(): void {
        console.log('I will deliver order by car');
    }
}
