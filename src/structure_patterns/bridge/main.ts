import {Black} from './Black';
import {Rectangle} from './Rectangle';
import {Red} from './Red';
import {Triangle} from './Triangle';

function main() {
    const blackColor = new Black();
    const rectangle = new Rectangle(blackColor);

    console.log(rectangle.draw());

    const redColor = new Red();
    const triangle = new Triangle(redColor);

    console.log(triangle.draw());
}

main();
