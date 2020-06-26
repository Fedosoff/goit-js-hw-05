"use strict";

class Car {
    static getSpecs(car) {
        console.log(`maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, 
        isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`);
    }

    constructor(car) {
        this._speed = 0;
        this._price = car.price;
        this._maxSpeed = car.maxSpeed;
        this._isOn = false;
        this._distance = 0;
    }

    get price() {
        return this._price;
    }

    set price(price) {
        this._price = price;
    }

    turnOn() {
        this._isOn = true;
    }

    turnOff() {
        this._isOn = false;
    }

    accelerate(value) {
        let newSpeed = this._speed + value;
        if (newSpeed <= this._maxSpeed) {
            this._speed = newSpeed;
        }
    }

    decelerate(value) {
        let newSpeed = this._speed - value;
        if (newSpeed > 0) {
            this._speed = newSpeed;
        }
    }

    drive(hours) {
        if (this._isOn) {
            this._distance += hours * this._speed;
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);


mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);


console.log(mustang.price); 
mustang.price = 4000;
console.log(mustang.price); 