console.log("page loaded...");

/* Query Selectors */
let cookieFooter = document.querySelector('#cookie-footer');
let acceptButton = document.querySelector('#accept');
let cityLinks = document.querySelectorAll('.city');
let temperatureDisplay = document.querySelector('#temperature');
let highTemp = document.querySelectorAll('.high');
let lowTemp = document.querySelectorAll('.low');

console.log(Array.from(highTemp, function(el) {return el.textContent}));
console.log(Array.from(lowTemp, function(el) {return el.textContent}));

highTemp = Array.from(highTemp, function(el) {return el.textContent});
lowTemp = Array.from(lowTemp, function(el) {return el.textContent});

/* Event Listeners */
/* removes cookie footer once user accepts */
acceptButton.addEventListener('click',() => {
    console.log('clicked!');
    cookieFooter.remove();
});

/* displays the alert message per the page instructions */
cityLinks.forEach((el)=> el.addEventListener('click', ()=> {alert('Loading page ...')}));

/* converts the temperature display between F° and C° */
temperatureDisplay.addEventListener('change',() => {
    console.log(temperatureDisplay.value);
    convertTemps(temperatureDisplay.value, highTemp, lowTemp);
});

/* logic for functions */
/* these functions overwrite the original array grabbed from all of the <span> elements to quickly convert the temparatures between F° and C° */
function convertTemps(value, highTemp, lowTemp) {
    if (value == "°C") {
        console.log(`value elvauated to ${value}`);
        lowTemp.forEach((element, index ) => {lowTemp[index] = convertFarToCel(element)});
        highTemp.forEach((element, index) => {highTemp[index] = convertFarToCel(element)});
        lowTemp.forEach(element => console.log(element));
        highTemp.forEach(element => console.log(element));
    } else if (value == "°F") {
        console.log(`value elvauated to ${value}`);
        lowTemp.forEach((element, index) => {lowTemp[index] = convertCelToFar(element)});
        highTemp.forEach((element, index) => {highTemp[index] = convertCelToFar(element)});
        lowTemp.forEach(element => console.log(element));
        highTemp.forEach(element => console.log(element));
    }
}

function convertFarToCel(element) {
    console.log(element);
    return parseInt((element - 32) * (5/9));
}

function convertCelToFar(element) {
    return parseInt((element * (9/5)) +32);
}