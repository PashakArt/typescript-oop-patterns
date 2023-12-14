import {Item} from '../Item';

export class PaymentService {
    /**
     * Emulate order payment
     * @param cost order cost
     */
    pay(item: Item): boolean {
        return true;
    }
}
