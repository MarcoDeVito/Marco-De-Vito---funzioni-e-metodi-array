
**Traccia 3:**
Scrivi una **funzione **che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
- Primo step: eliminare gli spazi e i segni di punteggiatura:
   - Suggerimento: Puoi eliminare spazi e segni di punteggiatura usando → **str.replace(/\W/g, "")**
*Esempio*:
- Input: “i topi non avevano nipoti”
- Output: true

**Traccia 4**: 
Scrivere una **funzione **che permetta di filtrare soltanto le parole all’interno di un array:
- let mixArray = [1, true, ‘hackademy’, 100, ‘Javascript’, false, null, ‘php’]
- il risultato dovra’ dare, let filtered = [‘hackademy’, ‘Javascript’, ‘php’]

*Suggerimento*: provate a filtrare in base al tipo di dato (operatore typeof)

**Traccia 5**:
 Scrivi una **funzione **che dati 2 array di 10 elementi interi casuali compresi tra 1 e 10, permetta di effettuare, una delle seguenti operazioni: 
- addizione
- sottrazione 
- moltiplicazione 
- divisione
 Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.
- *Esempio*: Input: a= [3, 7, 2, 5, 8, 1, 2, 5, 6, 4], b= [9, 3, 1, 4, 7, 6, 5, 10, 1, 5], operazione = "addizione" Output: c = [12, 10, 3, 9, 15, 7, 7, 15, 7, 9]