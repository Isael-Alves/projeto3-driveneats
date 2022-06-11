function SelectFood(Card) {
    const FoodSelected = document.querySelector(".Food .Selected");
    const Check = Card.querySelector(".Icon-check");

    if (FoodSelected !== null) {
        FoodSelected.classList.remove("Selected");
        const FoodCheck = FoodSelected.querySelector(".Icon-check");
        FoodCheck.classList.add("Hidden");  
    }

    Card.classList.add("Selected");
    Check.classList.remove("Hidden");
    EnableButton();
}

function SelectDrink(Card) {
    const DrinkSelected = document.querySelector(".Drink .Selected");
    const Check = Card.querySelector(".Icon-check");

    if (DrinkSelected !== null) {
        DrinkSelected.classList.remove("Selected");
        const DrinkCheck = DrinkSelected.querySelector(".Icon-check");
        DrinkCheck.classList.add("Hidden");
    }

    Card.classList.add("Selected");
    Check.classList.remove("Hidden");
    EnableButton();
}

function SelectDessert(Card) {
    const DessertSelected = document.querySelector(".Dessert .Selected");
    const Check = Card.querySelector(".Icon-check");

    if (DessertSelected !== null) {
        DessertSelected.classList.remove("Selected");
        const DessertCheck = DessertSelected.querySelector(".Icon-check");
        DessertCheck.classList.add("Hidden");
    }

    Card.classList.add("Selected");
    Check.classList.remove("Hidden");
    EnableButton();
}

function EnableButton(){
const counter = document.querySelectorAll(".Selected").length
    if (counter === 3){
        document.querySelector(".Button").classList.add("Hidden")
        document.querySelector(".Button-confirm-order").classList.remove("Hidden");
    }
}