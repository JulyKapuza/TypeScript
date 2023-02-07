interface IPerson {
  readonly name: string;
  age: number;

  greet(phrase: string): void;
}

interface IPilot {
  flyMessage(): void;
}

class Pilot implements IPerson, IPilot {
  constructor(public readonly name: string, public age: number) {
    this.checkAge();
  }

  private checkAge() {
    if (this.age < 28) {
      throw new Error(" Very young");
    }
  }
  public greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }

  public flyMessage(): void {
    console.log("We Fly!!!");
  }
}

abstract class Plane {
  protected pilot?: IPilot;
  public setInPlane(pilot: IPilot) {
    this.pilot = pilot;
  }
  public abstract startEngine(): boolean;
}

class Boeing extends Plane {
  public startEngine() {
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
