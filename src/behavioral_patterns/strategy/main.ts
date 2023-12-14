import {App} from './App';
import {LocalStorage} from './storages/LocalStorage';
import {S3Storage} from './storages/S3Storage';

function main() {
    const localStorage = new LocalStorage();

    const app = new App(localStorage);

    app.getUserAvatar('some path to user avatar');

    const s3Storage = new S3Storage();

    app.setStorage(s3Storage);
}
