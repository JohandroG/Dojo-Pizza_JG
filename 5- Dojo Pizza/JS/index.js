

function pizzaOven(crustType, sauseType, cheeses, toppings) {
    let pizza = {
    crustType: "Thin Crust", 
    sauseType: "Peppery Red Sauce",
    cheeses: "Mozzarela",
    toppings: ["Peperoni","sausages","Extra Cheese", "Pepper"],
    }
    pizza.crustType = crustType
    pizza.sauseType = sauseType
    pizza.cheeses = cheeses
    pizza.toppings = toppings
    return pizza;
}

let s1 = pizzaOven ("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
let s2 = pizzaOven ("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
let s3 = pizzaOven ("big crust","Hot sause", "pizza cheese", ["Peperoni", "Pepper"]);
let s4 = pizzaOven ("Thin Crust","Tomato sause", "Yellow cheese", ["Peperoni", "Sausages"]);

console.log("This is your pizza:")
console.log(s1)