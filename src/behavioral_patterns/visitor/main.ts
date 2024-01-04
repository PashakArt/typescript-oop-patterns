import {EurCurrencyTracker} from './currency_trackers/EurCurrencyTracker';
import {UsdCurrencyTracker} from './currency_trackers/UsdCurrencyTracker';
import {JSONExportVisitor} from './visitor/JSONExportVisitor';

function main() {
    const usdCurrencyTracker = new UsdCurrencyTracker();

    const eurCurrencyTracker = new EurCurrencyTracker();

    const jsonExportVisitor = new JSONExportVisitor();

    for (const tracker of [usdCurrencyTracker, eurCurrencyTracker]) {
        tracker.accept(jsonExportVisitor);
    }
}

main();
