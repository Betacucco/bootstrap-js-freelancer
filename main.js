//Dichiaro l'array di codici sconto
let arrayOfDiscountCode = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
//Aggiungiamo l'evento click 
document.getElementById("sendDate").addEventListener("click",calcolaPrezzo);
//Funzione che calcola il prezzo in base al tipo di lavoro e al controllo sconto 
 function calcolaPrezzo(event){
    event.preventDefault();

    let typeOfWork = document.getElementById("typeOfWork").value;
    let hoursRequested = parseInt(document.getElementById("hoursRequested").value); 
    let controlloSconto = controlloDiscountCode();

    if(typeOfWork == 1 && !controlloSconto){
        price = (20.5 * hoursRequested);
    } else if(typeOfWork == 1 && controlloSconto){
        price = (20.5 * hoursRequested) - ((20.5 * hoursRequested) * 0.25);
    } else if(typeOfWork == 2 && !controlloSconto){
        price = (15.3 * hoursRequested);
    } else if(typeOfWork == 2 && controlloSconto){
        price = (15.3 * hoursRequested) - ((20.5 * hoursRequested) * 0.25);
    } else if(typeOfWork == 3 && !controlloSconto){
        price = (33.6 * hoursRequested);
    } else if(typeOfWork == 3 && controlloSconto){
        price = (33.6 * hoursRequested) - ((20.5 * hoursRequested) * 0.25);
    }
    
    document.getElementById("prezzoTotale").innerHTML = "Il prezzo totale e' di: " + price.toFixed(2) + "\u20AC";
}

/*Funzione che controlla se il codice inserito e' valido
se lo e' lo elimina dall'array*/
function controlloDiscountCode(){
    let discountCode = document.getElementById("discountCode").value;
    let flag = false;
    
    for(let i = 0; i < arrayOfDiscountCode.length; i++){
        if(discountCode == arrayOfDiscountCode[i]){
             flag = true;
             arrayOfDiscountCode.splice(i, 1);
             //console.log(arrayOfDiscountCode);
        }
    }
    //Se non e' valido o vuoto lancia un alert di errore 
    if(!flag || discountCode == ""){
        alert("Il codice e' sbagliato o non e' stato inserito");
    }

    return flag;
}
