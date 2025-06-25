
const OSDisplay = document.getElementById("OSDisplay");
let OS = platform.os.toString();
let manufacturer = platform.manufacturer


OSDisplay.innerHTML = OS;
OSDisplay.innerHTML = manufacturer;
if (platform.os.toString().includes("Android")) {
    window.open("https://www.hololink.io/","_self");
}
else if (platform.os.toString().includes("iOS") || manufacturer.includes("iP")) {
    window.open("https://scenery.app/","_self");
}
else {
    window.open("https://mirevi.de/", "_self");
}