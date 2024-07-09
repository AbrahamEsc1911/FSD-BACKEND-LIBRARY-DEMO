import { authorsSeeders } from "./authorsSeeders";
import { bookSeeders } from "./booksSeeders";
import { usersSeeders } from "./usersSeeders";



(async () => {

    console.log('starting seeders...');
    await authorsSeeders()
    await usersSeeders()
    await bookSeeders()

})()