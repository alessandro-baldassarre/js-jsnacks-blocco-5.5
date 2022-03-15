/**
    *  Dato un array, genera randomicamente due numeri:
    *   il primo numero che dovrà essere sempre minore del numero degli elementi dell'array
    *   il secondo numero che dovrà essere sempre minore del primo numero
    *
    * Scrivi una funzione che accetti tre argomenti: l'array e i due numeri nell'ordine scritto prima.
    * La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra il primo numero e il secondo numero
*/

const array = [1,2,3,4,5,6];

/**
 * function that return a random number between a minimum number and a maximum number inclusive
 * 
 * @param {*} minNumber 
 * @param {*} maxNumber 
 * @returns 
 */
 function randomInt (minNumber, maxNumber){
    
   let randomNumber = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);

   return randomNumber;
}

const maxNumber = randomInt(1,array.length);
const minNumber = randomInt(0,maxNumber - 1);

console.log(maxNumber);
console.log(minNumber);

function filterArray (array, max, min){

   const newArray = array.filter((element, index) => {

      if(index > min && index < max){
         return element;
      }

   })

   return newArray;
}

console.table(array);
console.table(filterArray(array, maxNumber, minNumber));