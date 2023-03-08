/* Chiediamo all'utente due parole in successione.
Andiamo poi a verificare quale delle due parole è più lunga e stampiamo in console un messaggio appropriato. */

// lista strumenti
// prompt
// const
// length
// if/else
// console.log

/* Chiedo all'utente la prima parola e la salvo in una variabile
Chiedo all'utente la seconda parola e la salvo in una variabile */

const firstWord = prompt("First Word");
const secondWord = prompt("Second Word");


/* Procedo alla verifica della lunghezza della prima parole
Procedo alla verifica della lunghezza della seconda parole */

/* const firstWordLength = firstWord.length
const secondWordLength = secondWord.length */

console.log(firstWord.length, firstWord)
console.log(secondWord.length, secondWord)

/* Verifico se la prima parola è più lunga della seconda e stampo un messaggio in console */

if (firstWord.length > secondWord.length) {
    console.log("La prima parola è più lunga della seconda")
} 

/* ALTRIMENTI SE

Verifico se la seconda parola è più lunga della prima e stampo un messaggio in console */

else if (secondWord.length > firstWord.length){ 
    console.log("La seconda parola è più lunga della prima")
}

/* ALTRIMENTI

Le due parole sono della stessa lunghezza e stampo un messaggio */

else {
    console.log("Le parole hanno la stessa lunghezza")
}