import * as fs from 'fs';
import {IFileStorage} from './IFileStorage';

export class LocalStorage implements IFileStorage {
    getFile(path: string): Buffer {
        return fs.readFileSync(path);
    }

    deleteFile(path: string): void {
        return fs.rmSync(path);
    }
}
