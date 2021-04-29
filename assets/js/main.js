// 1. chiedi all’utente il cognome

var userName = prompt("Quale è il tuo cognome?");

var userName = userName.charAt(0).toUpperCase() + userName.slice(1);
console.log(userName);

// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

var listaCognomi = ["Bianchi", "Neri", "Rossi", "Verdi", "Gialli"];

console.log(listaCognomi);

listaCognomi.push(userName);

console.log(listaCognomi);

listaCognomi.sort();

console.log(listaCognomi);


// 3. stampa la lista ordinata alfabeticamente

for (var i = 0; i < listaCognomi.length; i++){

    var cognome = listaCognomi[i];

    var insert = document.getElementById("lista_cognomi").innerHTML;

    var position = listaCognomi.indexOf(listaCognomi[i]) +1;

    document.getElementById("lista_cognomi").innerHTML = insert + "<ul>" + position + " - " + cognome + "</ul>";

}

// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

var new_position = listaCognomi.indexOf(userName)+1;

console.log(new_position);

document.getElementById("new_position").innerHTML = "Il cognome " + userName + " è stato inserito alla posizione: " +new_position;

