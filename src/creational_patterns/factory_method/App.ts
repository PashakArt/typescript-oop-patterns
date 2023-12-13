import {CarFactory} from './factories/CarFactory';
import {Factory} from './factories/Factory';
import {ShipFactory} from './factories/ShipFactory';

enum FactoryTypeEnum {
    car,
    ship,
}

export interface IConfig {
    factoryType: FactoryTypeEnum;
}

export class App {
    private factory: Factory;

    init({factoryType}: IConfig): void {
        switch (factoryType) {
            case FactoryTypeEnum.car:
                this.factory = new CarFactory();
                break;

            case FactoryTypeEnum.ship:
                this.factory = new ShipFactory();
                break;

            default:
                throw new Error('Factory type is not found');
        }
    }

    start() {
        if (!this.factory) {
            throw new Error('App is not initialized');
        }

        this.factory.create();
    }
}
