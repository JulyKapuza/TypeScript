const isFetching:boolean =true;
const isLoading:boolean =false;

const int:number= 42;

const message:string= 'hello TYpescript';

const numberArray:number[] = [1,1,2,3,5,8];
const numberArray2:Array<number> = [1,1,2,3,5,8,13];

//Tuple

const contact: [string, number] = ['Max', 27];

// function

function sayMyName(name:string):void{
    console.log(name)
};

sayMyName('Anna')


//Type

type Login = string;

const login:Login = 'admin'
// const login2:Login = 2 // error

type ID = string|number;

const id1:ID = 1234;
const id2:ID = '1234';
// const id3:ID = true;


