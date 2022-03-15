/**
 * 
 * 
    Scrivi una funzione che fonda due array (aventi lo stesso numero di elementi) prendendo alternativamente gli elementi da uno e dall'altro
    es. [a,b,c], [1,2,3] → [a,1,b,2,c,3].

 * 
 */


function fuseArrays(array1, array2){

   const fuseArray = [];

   array1.forEach((element, index)  => {

      fuseArray.push(array1[index] , array2[index]);
      
      
   });

   return fuseArray;

}


const firstArray = [1,2,3];
const secondArray = ["ciao", "hello", "bye"];

console.table(firstArray);
console.table(secondArray);
console.table(fuseArrays(firstArray, secondArray));