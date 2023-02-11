/* -------------------------------------------------------------------------- */
/*                                Type Casting                                */
/* -------------------------------------------------------------------------- */

// const input = document.getElementById('inputEmail') as HTMLInputElement;

// input.value; 

const input = document.getElementById('inputEmail');

if(input){
  (input as HTMLInputElement).value='test@test.ts';
}

// if(input){
//     const newInput =input as HTMLInputElement;
//   console.log(newInput.value);
// }