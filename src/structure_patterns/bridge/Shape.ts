import {IColor} from './IColor';

export abstract class Shape {
    constructor(
        protected color: IColor,
    ) {}

    abstract draw(): string;
}
