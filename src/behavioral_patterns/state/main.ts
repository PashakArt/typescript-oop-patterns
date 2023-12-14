import {Draft} from './document_states/Draft';
import {UserDocument} from './UserDocument';

function main() {
    const initState = new Draft();

    const document = new UserDocument(initState);

    document.render();

    initState.publish();
}

main();
