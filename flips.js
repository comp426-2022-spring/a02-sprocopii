import { coinFlips, countFlips} from "./modules/coin.mjs";
const args = require("minimist")(process.argv.slice(2));
args["number"];
const number = args.number || 1;
const array = coinFlips(number);
const count = countFlips(array);
console.log(array);
console.log(count);