import {IBuilder} from './builder_types/IBuilder';

/**
 * Director determines order in which object creation steps are called.
 * Director is not required since client can directly manage builders.
 */
export class Director {
    constructor(
        private builder: IBuilder,
    ) {}

    setBuilder(newBuilder: IBuilder): void {
        this.builder = newBuilder;
    }

    make() {
        this.builder.reset();

        this.builder.buildDoors();

        this.builder.buildWindows();
    }
}
