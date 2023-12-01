// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


const km = prompt(`Dimmi quanti km devi per`);
console.log(`km`,km,typeof km);

if (isNaN(km)){
    alert(`Scrivi un numero`);
}

const età = prompt(`Dimmi la tua età`);
console.log(`età`,età,typeof età);

 if (isNaN(età)){
     alert(`Scrivi un numero`);
 }

const price = (km * 0.21)
console.log (`price`, price, typeof price)


// inizio if

if ( età > 65 ){
    full = (price * 0.6).toFixed(2);
}
else if ( età < 18){
    full = (price * 0.8).toFixed(2);
}
else{
    full = price.toFixed(2);
}


console.log(full);

 document.getElementById(`my-id`).innerHTML += full + ' $'



