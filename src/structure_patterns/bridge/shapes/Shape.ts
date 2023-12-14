import {IColor} from '../colors/IColor';

export abstract class Shape {
    constructor(
        protected color: IColor,
    ) {}

    abstract draw(): string;
}
