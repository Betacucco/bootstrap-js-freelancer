

document.getElementById("sendDate").addEventListener("click",calcolaPrezzo);

 function calcolaPrezzo(event){
    event.preventDefault();

    //let flag = false; 
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
    document.getElementById("prezzoTotale").innerHTML = "Il prezzo totale e' di: " + price + "\u20AC";
  } 

function controlloDiscountCode(){
    let arrayOfDiscountCode = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
    let discountCode = document.getElementById("discountCode").value;
    let flag = false;
    
    for(let i = 0; i < arrayOfDiscountCode.length; i++){
        if(discountCode == arrayOfDiscountCode[i]){
             flag = true;
        }
    }
    return flag;
}
