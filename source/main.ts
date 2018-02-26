interface AnimalInterface {
    animalName: string;
    eat(portions: number) : void;
}
 
class Animal implements AnimalInterface {
    animalName: string;
    constructor(private name: string) {
         name = this.animalName;
    }
    eat(portions: number = 1) {
        console.log(`${this.name} eat ${portions} portions`);
    }
}

const first = new Animal('Cat');
first.eat(6);
const second = new Animal('Dog');
second.eat(13);