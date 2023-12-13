import {Car} from './transports/Car';
import {ITransport} from './transports/ITransport';
import {Ship} from './transports/Ship';

enum TransportTypeEnum {
    car,
    ship,
}

export interface IConfig {
    transportType: TransportTypeEnum;
}

export class App {
    private transport: ITransport;

    init({transportType}: IConfig): void {
        switch (transportType) {
            case TransportTypeEnum.car:
                this.transport = new Car();
                break;

            case TransportTypeEnum.ship:
                this.transport = new Ship();
                break;

            default:
                throw new Error('Factory type is not found');
        }
    }

    start(): void {
        if (!this.transport) {
            throw new Error('App is not initialized');
        }

        this.transport.deliver();
    }
}
