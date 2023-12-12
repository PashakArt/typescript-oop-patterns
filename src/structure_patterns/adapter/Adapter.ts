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
 * Adapter works with borth client and external service
 */
class Adapter implements IClientService {
    constructor(
        /**
         * Instance of external service
         */
        private dataReceiver: XMLDataReceiver,
    ) {}

    sendJSONData(stockData: JSON): void {
        const xmlData = JSONToXML(stockData);
        this.dataReceiver.receiveXMLData(xmlData);
    }
}
