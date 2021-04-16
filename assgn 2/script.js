console.log("your order")
var product=prompt("enter desired product: ");
var amount=parseInt(prompt("enter amount: "));

// tax percentage
let tax=0.16;

// Prices
let milk=2.99;
let eggs=3.99;
let bacon=4.99;
    

// Logic
if (product = "milk"){
    total_cost = milk * amount
    console.log(total_cost);
    var salestax = total_cost * tax
    var tat=salestax+total_cost
    console.log(tat)
}

else if(product = "eggs"){
    total_cost = eggs * amount
    console.log(total_cost);
    var salestax = total_cost * tax
    var tat=salestax+total_cost
    console.log(tat)
}

else if(product = "bacon"){
    total_cost = bacon * amount
    console.log(total_cost);
    var salestax = total_cost * tax
    var tat=salestax+total_cost
    console.log(tat)
}

else{
    console.log("ERROR: SELECTION UNDEFINED")
}