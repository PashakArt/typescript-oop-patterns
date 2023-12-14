import {IClientService} from './IClientService';
import {XMLDataReceiver} from './XMLDataReceiver';

/**
 * Convert JSON to XML for send to external service
 */
function JSONToXML(_: JSON): XMLDocument {
    // convert json to xml
    return new XMLDocument();
}

/**
 * Adapter works with borth client and external service.
 * Difference between adapter and bridge is that adapter is applied after fact to force incompatible classes to work together.
 */
export class Adapter implements IClientService {
    constructor(
        /**
         * Instance of external service
         */
        private dataReceiver: XMLDataReceiver,
    ) {}

    sendData(stockData: JSON): void {
        const xmlData = JSONToXML(stockData);
        this.dataReceiver.receiveData(xmlData);
    }
}
