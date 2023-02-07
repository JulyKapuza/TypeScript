"use strict";
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
class Home {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (!this.door) {
            console.log("Door closed");
        }
        this.tenants.push(person);
    }
}
class MyHouse extends Home {
    openDoor(key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error("Key to another door");
        }
        console.log("Welcome to home ");
        return (this.door = true);
    }
}
const key = new Key();
const home = new MyHouse(key);
const person = new Person(key);
home.openDoor(person.getKey());
home.comeIn(person);
//# sourceMappingURL=classHouse.js.map