import {Factory} from './Factory';
import {ITransport} from './ITransport';
import {Ship} from './Ship';

class ShipFactory extends Factory {
    create(): ITransport {
        return new Ship();
    }
}
