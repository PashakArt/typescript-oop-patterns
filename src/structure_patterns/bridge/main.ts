import {Black} from './colors/Black';
import {Rectangle} from './shapes/Rectangle';
import {Red} from './colors/Red';
import {Triangle} from './shapes/Triangle';

function main() {
    const blackColor = new Black();
    const rectangle = new Rectangle(blackColor);

    console.log(rectangle.draw());

    const redColor = new Red();
    const triangle = new Triangle(redColor);

    console.log(triangle.draw());
}

main();
