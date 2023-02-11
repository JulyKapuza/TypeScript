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
