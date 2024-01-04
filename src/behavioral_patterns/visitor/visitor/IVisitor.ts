import {ICurrencyTracker} from '../currency_trackers/ICurrencyTracker';

export interface IVisitor {
    visit(currencyTracker: ICurrencyTracker): void;
}
