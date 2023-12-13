import {Sender} from './Sender';
import {Item} from './Item';
import {Packer} from './Packer';
import {PaymentService} from './PaymentSevice';

/**
 * Facade - is simple interface for working with complex system
 */
class OrderCreator {
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
