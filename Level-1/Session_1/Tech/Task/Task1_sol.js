/*
    fe wa7ed bdl myro7 34an ynam elsa3a 2 3ayz pizza w3amel nawa4
*/


let studentName = "Ahmed";
const pizzaFlavor = "pepperoni";
//----------------------------------
let hungerLevel = 10;
let isPizzaHot = true;
let deliveryAddress = "GPS :)";
console.log("Type of hunger level is " + typeof(hungerLevel));
console.log("Type of isPizzaHut is "+ typeof(isPizzaHot));
console.log("Type of Delivery Address is "+ typeof(deliveryAddress));
//------------------------------------
let totalBill = Number("85") + Number(true);
let minutesWaiting = 45 + 15;
if(minutesWaiting % 2 == 0)console.log("EVEN");
else console.log("ODD");
//--------------------------------------
console.log(2 + 3 * 4 - 1);
console.log((2 + 3) * (4 - 1));
//---------------------------------------------
let flag = false;
if(isPizzaHot){
    if(hungerLevel > 7){console.log("OPEN THE DOOR AND SPRINT");flag = true;}
    else if(hungerLevel > 5){console.log("Walk, you have dignity");flasg = true;}
}
if(!flag)console.log("Order Sushi next time");
//-+------------------------------------------------
console.log(hungerLevel > 5);//expression is a request for data but statement is a command for computer to do something
//----------------------------------------------------
console.log(pizzaFlavor.toUpperCase());
console.log(pizzaFlavor.length);
console.log(pizzaFlavor.includes("pepper"));
//--------------------------------------------------------------
console.log(`------------------------------------------------------------\nCustomer: ${studentName} \nPizaa Flavor: ${pizzaFlavor} \nTotal Bill: ${totalBill}\n----------------------------------------------------------`);
//-------------------------------------------------------------------
let toppings = [1,2,3];
let order ={
    customer: studentName,
    flavor: pizzaFlavor,
    isDeliverd: false
};
//-------------------------------------------------------------------
function calculateTotal(price, tip){
    return price + tip;
}

const sum = (price, tip) =>{
    return price + tip;
}
//---------------------------------------------------------------
let stops = ["Ahmed","Sara", "Mona", "Tarek"];
for(let i of stops){
    console.log(`Delivering to ${i}`);
    if(i == "Ahmed")break;
}
