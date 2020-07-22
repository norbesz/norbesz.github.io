function calcAmount() {
    // Csinálok egy változót és értéket is adok neki.
    let price = 1200;
    // Rámutatunk egy beviteli mezőre és változóba helyezzük.
    let amountInput = document.querySelector("input[name='amount-input']");
    // A beviteli mezőben lévő értéket szám típussá alakítjuk és bevisszük egy változóba.
    let amountNumber = parseInt(amountInput.value);
    // Ha NaN értékünk van akkor 0-vá alakítja, ha van érték akkor azzal dolgozik tovább.
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;
    // Betöltjük egy változóba a kapott változók értékét amivel tovább akarunk dolgozni.
    showSumPrice(price, amountNumber);
}

// Meghívjuk a másik függvényben kiszámolt változókat.
function showSumPrice(price, amountNumber) {
    // Rámutatunk egy elemre amit meg akarunk változtatni és változóba helyezzük.
    let showAmount = document.querySelector("span.show-amount");
    // Ha a bevitt érték nagyobb mint 0 
    if (amountNumber > 10) {
        alert("Olvassál már meg tanulni badzmeg...azt mondtam hogy csak 10 db-ot rendelhetsz egyszerre!!!");
        // Ha a bevitt érték kisebb mint 0 
    } else if (amountNumber < 1) {
        alert("Ugye most csak szivatsz te analfabéta köcsög?!?!?! 1 darabot vegyél már te zsidó geci!!!!");
        // Ha 1-10 közötti érték van akkor megy tovább.
    } else {
        // Elvégzi a számolást a változóban lévő értékekkel.
        let amount = amountNumber * price;
        // Megváltoztatja a HTML-ben lévő értéket (span.show-amount) a változó értékére (amount).
        showAmount.innerHTML = amount;
    }
}

function hider() {
    document.body.innerHTML = "";
}

let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket!";
let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);


/*
let sendButton=document.querySelector("form .btn.btn-primary");
sendButton.addEventListener("click", function() {
    alert("Hello te kis geciiii!");
});
*/

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function (ev) {
    ev.preventDefault();

    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    }
    console.log(values);
});

let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function (ev) {
    this.parentElement.style.display = "none";
};
for (let i = 0; i < alertCloseButtons.length; i++) {
    alertCloseButtons[i].addEventListener("click",alertCloseEventHandlerFunction); 
    
}

let toppings=[
    "Szalonna",
    "Hagyma",
    "Tütörtöjás",
    "Libamáj",
    "Extra sonka"
];
let toppingSelect=document.querySelector("#topInput");
let index=0;
while(index<toppings.length) {
    let option=document.createElement("option");
    option.value=toppings[index];
    option.innerHTML=toppings[index];
    toppingSelect.appendChild(option);
    index++;
}