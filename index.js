
const OSDisplay = document.getElementById("OSDisplay");
let OS = platform.os.toString();
let manufacturer = platform.product;


OSDisplay.innerHTML += OS;
OSDisplay.innerHTML += " ";
OSDisplay.innerHTML += manufacturer;

if (platform.os.toString().includes("Android")) {
    //window.open("https://www.hololink.io/","_self");
    OSDisplay.innerHTML += OS;
}
else if (platform.os.toString().includes("iOS") || manufacturer.includes("iP")) {
    //window.open("https://scenery.app/","_self");
    OSDisplay.innerHTML += OS;
}
else {
    OSDisplay.innerHTML += "Something else";
    //window.open("https://mirevi.de/", "_self");
}