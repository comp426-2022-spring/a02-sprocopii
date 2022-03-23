//Import functions from coin.mjs
import { coinFlips, countFlips} from "./modules/coin.mjs";

//Import minimist module
import minimist from "minimist";
const args = minimist(process.argv.slice(2));

//Define "number" argument
args["number"];

//Make number to have 1 input
const number = args.number || 1;

//If there is no argument, coinFlip should happen once by default
if (args.number == null) {
    const array = coinFlips(1);
    const count = countFlips(array);
    console.log(array);
    console.log(count);
}
else {
    const array = coinFlips(number);
    const count = countFlips(array);
    console.log(array);
    console.log(count);
}
