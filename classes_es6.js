// classes: supercharged object blueprint
const Stark /** @class */ = (() => {
    function Stark() {
        this.name = "Adam";
        this.saying = "Winterfell!";
    }
    Stark.prototype.hello = person => {
        console.log(`hello, ${person}`);
    };
    Stark.castle = "Winterfell";
    return Stark;
})();
const ned = new Stark();
ned.saying = "Winter is coming";
ned.hello("robert");
