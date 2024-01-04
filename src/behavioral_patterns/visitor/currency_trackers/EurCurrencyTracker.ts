import {IVisitor} from '../visitor/IVisitor';
import {ICurrencyTracker} from './ICurrencyTracker';

export class EurCurrencyTracker implements ICurrencyTracker {
    getRateInUsd() {
        return 'EUR/USD = 1,1';
    }

    accept(visitor: IVisitor) {
        visitor.visit(this);
    }

    getName(): string {
        return 'EUR';
    }
}
