import {App, IConfig} from './App';

function main(config: IConfig) {
    const app = new App();

    app.init(config);

    app.start();
}
