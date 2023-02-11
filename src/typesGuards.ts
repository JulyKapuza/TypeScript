type ComplexType = string | number;

function combine (item1: ComplexType, item2: ComplexType) {
  if (typeof item1 === 'string' || typeof  item2 === 'string') {
    return item1.toString() +  item2.toString();
  }
  return item1 +  item2;
}

// Type Guards Class

abstract class Guy {
  constructor(public name: string) {}
}

class Bad extends Guy{
    insult(){
        console.log('advice')
    }
}

class Good extends Guy{
    advice(){
        console.log('advice')
    }
}

const good = new Good('Max');
const bad = new Bad('Anton');

function gyus (user:Guy){
    if(user instanceof Good){
        user.advice();
    }
    if(user instanceof Bad){
        user.insult();
    }

}
console.log(gyus(good));
gyus(good);
