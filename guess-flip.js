//Import functions from coin.mjs
import { coinFlip, flipACoin} from "./modules/coin.mjs";

//Import minimist module
import minimist from "minimist";
const args = minimist(process.argv.slice(2));

//Define "call" argument
args["call"];

//Make call to be just 1 input
const call = args.call || 1;

//If there is no argument, console log error and usage
if (args.call == null) {
    console.log("Error: no input.");
    console.log("Usage: node guess-flip --call=[heads|tails]");
}
else {
    console.log(flipACoin(call));
}