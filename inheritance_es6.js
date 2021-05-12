//a way for objects or classes to gain access to properties inside other objects/classes
const __extends = this && this.__extends || (() => {
    let extendStatics = (d, b) => {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && ((d, b) => { d.__proto__ = b; })) ||
            ((d, b) => { for (const p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; });
        return extendStatics(d, b);
    };
    return (d, b) => {
        if (typeof b !== "function" && b !== null)
            throw new TypeError(`Class extends value ${String(b)} is not a constructor or null`);
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
const Person /** @class */ = (() => {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.dance = function () {
        console.log(`${this.name} is dancing`);
    };
    return Person;
})();
const bran = new Person("Bran");
bran.dance();
const AwesomePerson /** @class */ = (_super => {
    __extends(AwesomePerson, _super);
    function AwesomePerson(...args) {
        return _super !== null && _super.apply(this, args) || this;
    }
    AwesomePerson.prototype.dance = function () {
        console.log("SO AMAZING");
        _super.prototype.dance.call(this); //added to show "is dancing"
    };
    return AwesomePerson;
})(Person);
const rob = new AwesomePerson("rob");
rob.dance();
//in TS when you ovverride a function it doesnt call the function in the class extended
//that is called a superfunction 
