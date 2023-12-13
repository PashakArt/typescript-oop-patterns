import {Draft} from './Draft';
import {UserDocument} from './UserDocument';

function main() {
    const initState = new Draft();

    const document = new UserDocument(initState);

    document.render();
}

main();
