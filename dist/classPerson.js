"use strict";
class Pilot {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.checkAge();
    }
    checkAge() {
        if (this.age < 28) {
            throw new Error(" Very young");
        }
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
    flyMessage() {
        console.log("We Fly!!!");
    }
}
class Plane {
    setInPlane(pilot) {
        this.pilot = pilot;
    }
}
class Boeing extends Plane {
    startEngine() {
        if (!this.pilot) {
            throw new Error(" We need pilot");
        }
        console.log("Starting...");
        this.pilot.flyMessage();
        return true;
    }
}
const pilot = new Pilot("Max", 32);
const boing = new Boeing();
pilot.greet("Hello my dear passenger! Im your pilot ");
boing.setInPlane(pilot);
boing.startEngine();
//# sourceMappingURL=classPerson.js.map