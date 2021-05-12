//modules allow you to share code between files
//keep dependancies clear 
let Utility;
(Utility => {
    const useful /** @class */ = (() => {
        function useful() {
        }
        useful.prototype.timesTwo = n => {
            return n * 2;
        };
        return useful;
    })();
    Utility.useful = useful;
})(Utility || (Utility = {}));
///<reference path ="modules.ts" />
const use = new Utility.useful();
console.log(use.timesTwo(9));
