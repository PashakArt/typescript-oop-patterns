import {Car} from '../transports/Car';
import {Factory} from './Factory';
import {ITransport} from '../transports/ITransport';

export class CarFactory extends Factory {
    create(): ITransport {
        return new Car();
    }
}
