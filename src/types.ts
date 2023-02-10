interface Admin {
    name: string,
    privileges: string[]
}

interface User {
    name: string,
    startData: Date
}
// type ComplexType = string | number;

// function combine(a:ComplexType, b:ComplexType){
    // Type Guards
//     if(typeof a=== 'string' || typeof b==='string' ){
//         return a.toString()+b.toString()
//     }
//     return a+b
// }

type AdminOrUser = Admin|User;

function showFields(element:AdminOrUser){
   if('startData' in element){
    console.log(element.startData)
   }
   if('privileges' in element){
    console.log(element.privileges)
   }
}
