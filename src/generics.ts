// Task1 generic 
function getPromise(): Promise<Array<string | number>> {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

// Task2 Pick
type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(
  top: Pick<AllType, "name" | "color">,
  bottom: Pick<AllType, "position" | "weight">
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

//   Task3 Generic function/method

function merge<T, U>(objA: T, objB: U) {
  return Object.assign({}, objA, objB);
}

const toMerge1 = {
  name: "Max",
};
const toMerge2 = {
  age: 25,
};

const marged = merge(toMerge1, toMerge2);

//   Task4 Generic Classes

class Component<T> {
  constructor(public props: T) {}
}

interface IPage {
  title: string;
}

class Page extends Component<IPage> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}
