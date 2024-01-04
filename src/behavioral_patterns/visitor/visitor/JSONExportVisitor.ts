import {ICurrencyTracker} from '../currency_trackers/ICurrencyTracker';
import {IVisitor} from './IVisitor';

export class JSONExportVisitor implements IVisitor {
    visit(currencyTracker: ICurrencyTracker): void {
        console.log(`Exchange rate data imported in json format for ${currencyTracker.getName()}`);
    }
}
