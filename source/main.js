var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        name = this.animalName;
    }
    Animal.prototype.eat = function (portions) {
        if (portions === void 0) { portions = 1; }
        console.log(this.name + " eat " + portions + " portions");
    };
    return Animal;
}());
var first = new Animal('Cat');
first.eat(6);
var second = new Animal('Dog');
second.eat(13);