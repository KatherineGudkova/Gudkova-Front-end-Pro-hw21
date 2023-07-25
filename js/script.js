class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    printInfo() {
        console.log(`  Name: ${this.name}.\n  Age: ${this.age}.`);
    }
}

class Car {
    constructor(brand, model, year, licensePlate) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.licensePlate = licensePlate;
        this.owner = null;
    }

    assignOwner(owner) {
        if (owner.age > 18) {
            this.owner = owner;
        } else {
            console.log(`${ owner.name } of the vehicle must be over 18 years of age.`);
        }
    }

    printInfo() {
        console.log('\n----------- Car info -----------');
        console.log(`  Brand: ${this.brand}.\n  Model: ${this.model}.\n  Year of manufacture: ${this.year}.\n  License plate: ${this.licensePlate}.`);
        console.log('---------- Owner info ----------');
        if (this.owner) {
            this.owner.printInfo();
        } else {
            console.log('  No owner.');
        }
    }
}

const personOne = new Human('Kateryna', 22);
const personTwo = new Human('Nikita', 27);
const personThree = new Human('Maxim', 16);

const carOne = new Car('Audi', 'Q8', 2022, 'ВС1234ВС');
const carTwo = new Car('Porsche', 'Panamera', 2020, 'ІМ9876ІМ');
const carThree = new Car('Ford', 'Fusion', 2023, 'АВ5678АВ');

carOne.assignOwner(personOne);
carTwo.assignOwner(personTwo);
carThree.assignOwner(personThree);

carOne.printInfo();
carTwo.printInfo();
carThree.printInfo();