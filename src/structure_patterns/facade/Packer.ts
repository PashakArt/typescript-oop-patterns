import {Item} from './Item';

export class Packer {
    /**
     * Emulate order packaging
     */
    pack(item: Item): void {
        item.isPack = true;
    }
}
