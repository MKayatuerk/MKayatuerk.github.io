
const OSDisplay = document.getElementById("OSDisplay");
const ManufactorDisplay = document.getElementById("ManufactorDisplay");
const ProductDisplay = document.getElementById("ProductDisplay");
const goal = document.getElementById("goal");


let OS = platform.os.toString();
let manufacturer = platform.manufacturer;
let product = platform.product;


OSDisplay.innerHTML += OS;
ManufactorDisplay.innerHTML += manufacturer;
ProductDisplay.innerHTML += product;

if (OS.includes("Android")) {
    //window.open("https://www.hololink.io/","_self");
    goal.innerHTML += "Am in Android!";
}
else if (OS.includes("iOS") || OS.includes("OS X")) {
    //window.open("https://scenery.app/","_self");
    goal.innerHTML += "Am in IOS!";
}
else {
    goal.innerHTML += "Am in else!";
    //window.open("https://mirevi.de/", "_self");
}

//|| manufacturer.toString().includes("iP")