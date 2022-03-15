
/**
 * 
    A - Scrivi una funzione che accetti una stringa come argomento e la ritorni girata (es. Ciao -> oaiC)
    B - Scrivi una funzione che accetti un numero come argomento e ritorni il suo opposto (inverso additivo) es (34 -> -34)
    C - Data una lista di 10 numeri e 10 stringhe, restituisci una copia della lista con tutte le stringhe girate e i numeri opposti.
    * 
 */





function revString(str) {
   return str.split("").reverse().join("");
 }


 function revNumber(number) {
    return Math.abs(number) * -1;
 }

 const list = [
    211,421,541,"ciao","hello"
 ]

 const reverseList = list.map((element) => {
    if(isNaN(element)){
      return revString(element);
    }
    else{
       return revNumber(element);
    }
 });

 console.table(list);
 console.table(reverseList);
