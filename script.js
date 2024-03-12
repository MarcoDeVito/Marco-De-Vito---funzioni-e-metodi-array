// Traccia 3:
// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
// Primo step: eliminare gli spazi e i segni di punteggiatura:
// Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → str.replace(/\W/g, "")
// Esempio:
// Input: “i topi non avevano nipoti”
// Output: true

mystring = "i topi non avevano nipoti";

function ispalindrome(str) {
    str = str.replace(/\W/g, "");
    let streverse = str.split('').reverse().join('');
    if (streverse === str) {
        return true
    }
    else {
        return false;
    }
    // console.log(str);
    // console.log(editedstring);
}
console.log(`la frase è palindroma: ${ispalindrome(mystring)}`);

// Traccia 4:
// Scrivere una funzione che permetta di filtrare soltanto le parole all’interno di un array:
// let mixArray = [1, true, ‘hackademy’, 100, ‘Javascript’, false, null, ‘php’]
// il risultato dovra’ dare, let filtered = [‘hackademy’, ‘Javascript’, ‘php’]

// Suggerimento: provate a filtrare in base al tipo di dato (operatore typeof)

let mixArray = [1, true, 'hackademy', 100, 'Javascript', false, null, 'php'];

function clearArray(Array) {
    let filtered = Array.filter(el => typeof el === 'string');
    return filtered;
}

let clearedArray = clearArray(mixArray);
console.log(clearedArray);

// Traccia 5:
//  Scrivi una funzione che dati 2 array di 10 elementi interi casuali compresi tra 1 e 10, permetta di effettuare, una delle seguenti operazioni:
// addizione
// sottrazione
// moltiplicazione
// divisione
// Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.
// Esempio: Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione" Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]

let a = [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b = [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione";
function calcArray(a,b,operation) {
    let c=[];
    for (let i = 0; i < a.length; i++) {
        switch (operation) {
            case "addizione":
                c.push(a[i]+b[i]);
                break;
            case "sottrazione":
                c.push(a[i]-b[i]);
                break;
            case "moltiplicazione":
                c.push(a[i]*b[i]);
                break;
            case "divisione":
                c.push(a[i]/b[i]);
                break;
        }
        
        
    }
    return c;
}


console.log(calcArray(a,b,operazione));
console.log(calcArray(a,b,"sottrazione"));
console.log(calcArray(a,b,"moltiplicazione"));
console.log(calcArray(a,b,"divisione"));
