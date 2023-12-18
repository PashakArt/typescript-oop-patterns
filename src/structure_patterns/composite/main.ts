import {Box} from './Box';
import {Product} from './Product';

function main() {
    const mainBox = new Box();
    const [pen, pencil, notebook, eraser] = [new Product(7), new Product(2), new Product(15), new Product(1)];

    const schoolBag = new Box();

    for (const item of [pen, pencil, notebook]) {
        schoolBag.addComponent(item);
    }

    mainBox.addComponent(schoolBag);

    mainBox.addComponent(eraser);

    return mainBox.getCost();
}

console.log(`all cost is ${main()}`);
