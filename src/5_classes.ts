class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }
  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

class Car {
  readonly numberOfWheels: number = 4;

  constructor(readonly model: string) {
    this.model = model;
  }
}

class Animal {
  protected voice: string = ""; // доступні і цьому класі і в класах, що наслідуються
  public color: string = "black";

  constructor() {
    this.go();
  }
  private go(): void {
    console.log("GO");
  } // доступні тільки в тому класі де вихначені
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
    // this.go() помилка бо це приватна властивість
  }
}

const cat = new Cat();
cat.setVoice("Meow");
console.log(cat.color);

//=========================//

abstract class Components {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Components {
  render(): void {
    console.log("Conponent on render");
  }

  info(): string {
    return "This is info";
  }
}
