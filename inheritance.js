//a way for objects or classes to gain access to properties inside other objects/classes
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(this.name + " is dancing");
    };
    return Person;
}());
var bran = new Person("Bran");
bran.dance();
var AwesomePersone = /** @class */ (function (_super) {
    __extends(AwesomePersone, _super);
    function AwesomePersone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AwesomePersone.prototype.dance = function () {
        console.log("SO AMAZING");
        _super.prototype.dance.call(this);
    };
    return AwesomePersone;
}(Person));
var rob = new AwesomePersone("rob");
rob.dance();
//in TS when you ovverride a function it doesnt call the function in the class extended
//that is called a superfunction 
