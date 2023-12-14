/**
 * Common interface for all storages
 */
export interface IFileStorage {
    getFile(path: string): Buffer;

    deleteFile(path: string): void;
}
