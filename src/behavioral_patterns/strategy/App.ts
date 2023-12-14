import {IFileStorage} from './storages/IFileStorage';

export class App {
    constructor(
        private storage: IFileStorage,
    ) {}

    setStorage(storage: IFileStorage) {
        this.storage = storage;
    }

    getUserAvatar(pathToFile: string): Buffer {
        return this.storage.getFile(pathToFile);
    }

    deleteUserAvatar(pathToFile: string): void {
        this.storage.deleteFile(pathToFile);
    }
}
