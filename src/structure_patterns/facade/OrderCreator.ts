import {Sender} from './sub_systems/Sender';
import {Item} from './Item';
import {Packer} from './sub_systems/Packer';
import {PaymentService} from './sub_systems/PaymentSevice';

/**
 * Facade - is simple interface for working with complex system
 */
export class OrderCreator {
    constructor(
        private paymentService: PaymentService,
        private packer: Packer,
        private sender: Sender,
    ) {

    }

    create(item: Item): void {
        const isPaid = this.paymentService.pay(item);

        if (!isPaid) {
            throw new Error('Order has not been paid');
        }

        this.packer.pack(item);

        if (!item.isPack) {
            throw new Error('Order has not been packed');
        }

        this.sender.deliver(item);
    }
}
