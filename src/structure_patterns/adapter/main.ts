import {Adapter} from './Adapter';
import {JSONDataExtractor} from './JSONDataExtractor';
import {XMLDataReceiver} from './XMLDataReceiver';

function main() {
    const jsonExtractor = new JSONDataExtractor();
    const jsonData = jsonExtractor.extract();

    const xmlDataReceiver = new XMLDataReceiver();
    // xmlDataReceiver.receiveData(jsonData); - Error incompatible types

    const adapter = new Adapter(xmlDataReceiver);

    adapter.sendData(jsonData);
}
