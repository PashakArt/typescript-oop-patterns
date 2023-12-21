import {Director} from './Director';
import {ApartamentBlockBuilder} from './builder_types/ApartamentBlockBuilder';
import {ApartamentBlockSchemaBulder} from './builder_types/ApartamentBlockSchemaBulder';

function main() {
    const apartamentBlockBulder = new ApartamentBlockBuilder();

    const director = new Director(apartamentBlockBulder);

    director.make();

    const apartamentBlock = apartamentBlockBulder.getResult();

    const schemaBuilder = new ApartamentBlockSchemaBulder();

    director.setBuilder(schemaBuilder);

    director.make();

    const schema = schemaBuilder.getResult();
}

main();
