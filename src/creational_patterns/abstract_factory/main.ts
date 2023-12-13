import {App} from './App';
import {Factory} from './factories/Factory';
import {KitchenFactory} from './factories/KitchenFactory';
import {OfficeFactory} from './factories/OfficeFactory';

enum FurnitureTypeEnum {
    kithcen,
    office,
}

interface IConfig {
    furnitureType: FurnitureTypeEnum;
}

function main({furnitureType}: IConfig) {
    let factory: Factory;

    if (furnitureType === FurnitureTypeEnum.kithcen) {
        factory = new KitchenFactory();
    } else if (furnitureType === FurnitureTypeEnum.office) {
        factory = new OfficeFactory();
    } else {
        throw new Error('Factory type is not found');
    }

    const app = new App(factory);

    app.createChair();

    app.createTable();
}
