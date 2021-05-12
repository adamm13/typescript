// classes: supercharged object blueprint
var Stark = /** @class */ (function () {
    function Stark() {
        this.name = "Adam";
        this.saying = "Winterfell!";
    }
    Stark.prototype.hello = function (person) {
        console.log("hello, " + person);
    };
    Stark.castle = "Winterfell";
    return Stark;
}());
var ned = new Stark();
ned.saying = "Winter is coming";
ned.hello("robert");
