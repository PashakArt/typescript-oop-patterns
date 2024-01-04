import {ICurrencyTracker} from './ICurrencyTracker';
import {IVisitor} from '../visitor/IVisitor';

export class UsdCurrencyTracker implements ICurrencyTracker {
    getRateInEur() {
        return 'USD/EUR = 0,9';
    }

    accept(visitor: IVisitor) {
        visitor.visit(this);
    }

    getName(): string {
        return 'USD';
    }
}
