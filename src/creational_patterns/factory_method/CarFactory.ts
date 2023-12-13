import {Car} from './Car';
import {Factory} from './Factory';
import {ITransport} from './ITransport';

class CarFactory extends Factory {
    create(): ITransport {
        return new Car();
    }
}
