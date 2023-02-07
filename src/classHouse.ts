class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

class Home {
  protected door = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {}
  comeIn(person: Person): void {
    if (!this.door) {
      console.log("Door closed");
    }
    this.tenants.push(person);
  }
}

class MyHouse extends Home {
  openDoor(key: Key) {
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
