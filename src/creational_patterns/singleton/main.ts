import {AppState} from './AppState';

function main() {
    const appInstance1 = AppState.getInstance();
    const appInstance2 = AppState.getInstance();

    appInstance1.counter += 1;
    appInstance1.counter += 1;
    appInstance2.counter += 1;

    return appInstance1.counter === appInstance2.counter;
}

main();
