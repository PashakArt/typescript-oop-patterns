import {IVisitor} from '../visitor/IVisitor';

export interface ICurrencyTracker {
    accept(visitor: IVisitor): void;

    getName(): string;
}
