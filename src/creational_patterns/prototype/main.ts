import {Rectangle} from './Rectangle';
import {Square} from './Square';

function main() {
    const width = 5;
    const length = 7;

    const firstRectangle = new Rectangle(width, length);

    const secondRectangle = firstRectangle.clone();

    const firstSquare = new Square(width);

    const secondSquare = firstSquare.clone();
}
