import {Item} from './Item';
import {OrderCreator} from './OrderCreator';
import {Packer} from './sub_systems/Packer';
import {PaymentService} from './sub_systems/PaymentSevice';
import {Sender} from './sub_systems/Sender';

function main() {
    const orderCreator = new OrderCreator(
        new PaymentService(),
        new Packer(),
        new Sender(),
    );

    const item: Item = {
        isPack: false,
        cost: 100,
    };

    orderCreator.create(item);
}
