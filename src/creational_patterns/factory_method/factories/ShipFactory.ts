import {Factory} from './Factory';
import {ITransport} from '../transports/ITransport';
import {Ship} from '../transports/Ship';

export class ShipFactory extends Factory {
    create(): ITransport {
        return new Ship();
    }
}
