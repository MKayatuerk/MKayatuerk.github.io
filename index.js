
const OSDisplay = document.getElementById("OSDisplay");
let OS = platform.os;


OSDisplay.innerHTML = OS;
if (platform.os.toString().includes("Windows")) {
    window.open("https://mirevi.de/","_self");
}
else if (platform.os.toString().includes("Android")) {
    window.open("https://www.hololink.io/","_self");
}
else if (platform.os.toString().includes("iOS")
    || platform.os.toString().includes("Mac")
    || platform.os.toString().includes("OS X")) {
    window.open("https://scenery.app/","_self");
}