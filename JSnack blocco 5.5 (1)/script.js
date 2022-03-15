/**
 * Crea un array di 10 oggetti che rappresentino una zucchina.
 * indicando per ognuna varietà, peso e lunghezza.
 *
 * A - Calcola quanto pesano tutte le zucchine
 * B - Dividi in due array separati le zucchine che misurano più o meno di 15cm
 * C - Stampa separatamente quanto pesano i due gruppi di zucchine
 *
 * */


const zucchine = [
   {
      varietà: "gialla",
      peso: 1.3,
      lunghezza: 0.12

   },
   {
      varietà: "nera",
      peso: 1.8,
      lunghezza: 0.25

   },
   {
      varietà: "friulana",
      peso: 1.9,
      lunghezza: 0.30

   },
   {
      varietà: "napoletana",
      peso: 1.0,
      lunghezza: 0.11

   },
   {
      varietà: "verde",
      peso: 1.7,
      lunghezza: 0.18

   },
   {
      varietà: "liscia",
      peso: 1.9,
      lunghezza: 0.15

   },
   {
      varietà: "friulana rugosa",
      peso: 1.9,
      lunghezza: 0.29

   },
   {
      varietà: "romana",
      peso: 1.6,
      lunghezza: 0.19

   },
   {
      varietà: "viola",
      peso: 1.5,
      lunghezza: 0.10

   },
   {
      varietà: "rossa",
      peso: 1.2,
      lunghezza: 0.18

   },
];


let pesoZucchine = 0;

zucchine.forEach(element => {
   pesoZucchine += element.peso;
});

console.log(pesoZucchine);

const longZucchine = zucchine.filter(element =>{
   if(element.lunghezza > 0.15){
      return true;
   }
});

const shortZucchine = zucchine.filter(element =>{
   if(element.lunghezza <= 0.15){
      return true;
   }
});

console.table(zucchine);
console.table(longZucchine);
console.table(shortZucchine);