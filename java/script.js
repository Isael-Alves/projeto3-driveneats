let UserName;
let Address;
let Food;
let Drink;
let Dessert;

let FoodCost;
let DrinkCost;
let DessertCost;
let TotalCost;

function SelectFood(Card) {
    const FoodSelected = document.querySelector(".Food .Selected");
    const Check = Card.querySelector(".Icon-check");
    Food = Card.querySelector('h4').innerHTML;

    if (FoodSelected !== null) {
        FoodSelected.classList.remove("Selected");
        const FoodCheck = FoodSelected.querySelector(".Icon-check");
        FoodCheck.classList.add("Hidden");
    }

    Card.classList.add("Selected");
    Check.classList.remove("Hidden");
    EnableButton();
    String_for_number(Card);
}

function SelectDrink(Card) {
    const DrinkSelected = document.querySelector(".Drink .Selected");
    const Check = Card.querySelector(".Icon-check");
    Drink = Card.querySelector('h4').innerHTML;

    if (DrinkSelected !== null) {
        DrinkSelected.classList.remove("Selected");
        const DrinkCheck = DrinkSelected.querySelector(".Icon-check");
        DrinkCheck.classList.add("Hidden");
    }

    Card.classList.add("Selected");
    Check.classList.remove("Hidden");
    EnableButton();
    String_for_number(Card);
}

function SelectDessert(Card) {
    const DessertSelected = document.querySelector(".Dessert .Selected");
    const Check = Card.querySelector(".Icon-check");
    Dessert = Card.querySelector('h4').innerHTML;

    if (DessertSelected !== null) {
        DessertSelected.classList.remove("Selected");
        const DessertCheck = DessertSelected.querySelector(".Icon-check");
        DessertCheck.classList.add("Hidden");
    }

    Card.classList.add("Selected");
    Check.classList.remove("Hidden");
    EnableButton();
    String_for_number(Card);
}

function EnableButton() {
    const counter = document.querySelectorAll(".Selected").length;
    if (counter === 3) {
        document.querySelector(".Button").classList.add("Hidden")
        document.querySelector(".Button-confirm-order").classList.remove("Hidden");
    }
}

function String_for_number(Card) {
    const Value = Card.querySelector("h5").innerHTML;
    const NewValue = Value.replace("R$", "").replace(",", ".");
    const ClassofCard = Card.classList[0];

    if (ClassofCard === "Card-Food") {
        FoodCost = Number(NewValue) * 100;
    }
    if (ClassofCard === "Card-Drink") {
        DrinkCost = Number(NewValue) * 100;
    }
    if (ClassofCard === "Card-Dessert") {
        DessertCost = Number(NewValue) * 100;
    }
}

function CompleteBuy() {
    TotalCost = ((FoodCost + DrinkCost + DessertCost) / 100).toFixed(2);
    document.querySelector(".ConfirmRequest .food").children[0].innerHTML = Food;
    document.querySelector(".ConfirmRequest .food").children[1].innerHTML = `R$ ${((FoodCost / 100).toFixed(2)).replace(".", ",")}`;

    document.querySelector(".ConfirmRequest .drink").children[0].innerHTML = Drink;
    document.querySelector(".ConfirmRequest .drink").children[1].innerHTML = `R$ ${((DrinkCost / 100).toFixed(2)).replace(".", ",")}`;

    document.querySelector(".ConfirmRequest .dessert").children[0].innerHTML = Dessert;
    document.querySelector(".ConfirmRequest .dessert").children[1].innerHTML = `R$ ${((DessertCost / 100).toFixed(2)).replace(".", ",")}`;

    document.querySelector(".ConfirmRequest .total").children[1].innerHTML = `R$ ${TotalCost.replace(".", ",")}`;

    document.querySelector(".ConfirmRequest").classList.remove("Hidden");
    document.querySelector(".Container").classList.add("Opacity");
}

function SendRequest() {
    UserName = prompt("Qual é seu nome?");
    Address = prompt("Qual é o endereço para entrega?");
    
    const FinishMsg =
        `Olá, gostaria de fazer o pedido:\n  
      - Prato: ${Food}\n
      - Bebida: ${Drink}\n
      - Sobremesa: ${Dessert}\n
        Total: R$ ${TotalCost.replace(".", ",")}\n
        
        Nome: ${UserName}\n
        Endereço: ${Address}\n
        `;

        const urlWhatsapp = `https://wa.me/5594999999999?text=${encodeURIComponent(FinishMsg)}`;
        window.open(urlWhatsapp);
}

function Cancel() {
    document.querySelector(".ConfirmRequest").classList.add("Hidden");
    document.querySelector(".Container").classList.remove("Opacity");
}