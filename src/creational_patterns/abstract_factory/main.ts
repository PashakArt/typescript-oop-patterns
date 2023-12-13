import {App} from './App';
import {Factory} from './factories/Factory';
import {KitchenFactory} from './factories/KitchenFactory';
import {OfficeFactory} from './factories/OfficeFactory';

enum FurnitureType {
    kithcen,
    office,
}

interface IConfig {
    furnitureType: FurnitureType;
}

function main({furnitureType}: IConfig) {
    let factory: Factory;

    if (furnitureType === FurnitureType.kithcen) {
        factory = new KitchenFactory();
    } else if (furnitureType === FurnitureType.office) {
        factory = new OfficeFactory();
    } else {
        throw new Error('Factory type is not found');
    }

    const app = new App(factory);

    app.createChair();

    app.createTable();
}
