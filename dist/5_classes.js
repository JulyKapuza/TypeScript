"use strict";
class Typescript {
    constructor(version) {
        this.version = version;
    }
    info(name) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}
class Car {
    constructor(model) {
        this.model = model;
        this.numberOfWheels = 4;
        this.model = model;
    }
}
class Animal {
    constructor() {
        this.voice = "";
        this.color = "black";
        this.go();
    }
    go() {
        console.log("GO");
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const cat = new Cat();
cat.setVoice("Meow");
console.log(cat.color);
class Components {
}
class AppComponent extends Components {
    render() {
        console.log("Conponent on render");
    }
    info() {
        return "This is info";
    }
}
//# sourceMappingURL=5_classes.js.map