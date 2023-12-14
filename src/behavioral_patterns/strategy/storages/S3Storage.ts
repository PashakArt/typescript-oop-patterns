import {IFileStorage} from './IFileStorage';

export class S3Storage implements IFileStorage {
    /**
     * emulate file getting from s3
     * @param path path to file in s3 storage
     */
    getFile(path: string): Buffer {
        return Buffer.from('getting file from s3');
    }

    /**
     * emulate file deleting from s3
     * @param path path to file in s3 storage
     */
    deleteFile(path: string): void {}
}
