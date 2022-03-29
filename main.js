let arrayOfDiscountCode = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];

//let discountCode = document.getElementById("discountCode").value;


document.getElementById("sendDate").addEventListener("click",calcolaPrezzo);

 function calcolaPrezzo(event){
    event.preventDefault();

    let typeOfWork = document.getElementById("typeOfWork").value;
    let hoursRequested = parseInt(document.getElementById("hoursRequested").value);

    if(typeOfWork == 1){
        price = (20.5 * hoursRequested);
    }else if(typeOfWork == 2){
        price = (15.3 * hoursRequested);
    } else if(typeOfWork == 3){
        price = (33.6 * hoursRequested);
    }
    document.getElementById("prezzoTotale").innerHTML = "Il prezzo totale e' di: " + price;
}


