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
    TotalCost = ((FoodCost + DrinkCost + DessertCost)/100).toFixed(2);
    const FinishMsg =
        `Olá, gostaria de fazer o pedido:\n  
      - Prato: ${Food}\n
      - Bebida: ${Drink}\n
      - Sobremesa: ${Dessert}\n
        Total: R$ ${TotalCost.replace(".",",")}\n`
    alert(FinishMsg);
}