console.log("page loaded...");

/* Query Selectors */
let cookieFooter = document.querySelector('#cookie-footer');
let acceptButton = document.querySelector('#accept');
let cityLinks = document.querySelectorAll('.city');
let temperatureDisplay = document.querySelector('#temperature');

// console.log(Array.from(highTemp, function(el) {return el.textContent}));
// console.log(Array.from(lowTemp, function(el) {return el.textContent}));


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
    convertTemps(temperatureDisplay.value);
});

/* New logic for functions */
function convertTemps(value) {
    let highTemp = document.querySelectorAll('.high');
    let lowTemp = document.querySelectorAll('.low');

    if (value == '°C') {
        for (let i = 0; i < highTemp.length; i++) {
            console.log(`highTemp inner text before convertC is: ${highTemp[i].innerHTML}`);
            highTemp[i].innerHTML = (convertC(parseInt(highTemp[i].innerHTML))).toFixed(0);
            lowTemp[i].innerHTML = (convertC(parseInt(lowTemp[i].innerHTML))).toFixed(0);
            console.log(`highTemp inner text on convertC is: ${highTemp[i].innerHTML}`);
        }
    } 
    else {
        for (let i = 0; i < highTemp.length; i++) {
            console.log(`highTemp inner text before convertF is: ${highTemp[i].innerHTML}`);
            highTemp[i].innerHTML = (convertF(parseInt(highTemp[i].innerHTML))).toFixed(0);
            lowTemp[i].innerHTML = (convertF(parseInt(lowTemp[i].innerHTML))).toFixed(0);
            console.log(`highTemp inner text on convertF is: ${highTemp[i].innerHTML}`);
        }
    }
}


/* Old logic for functions */
/* these functions overwrite the original array grabbed from all of the <span> elements to quickly convert the temparatures between F° and C° */
// this foreach loop is too big brain rn
// function convertTemps(value) {

//     let highTemp = document.querySelectorAll('.high');
//     let lowTemp = document.querySelectorAll('.low');

//     if (value == "°C") {
//         console.log(`value elvauated to ${value}`);
//         lowTemp.forEach((index) => {lowTemp[index].innerHTML = convertC(parseInt((lowTemp[index].innerHTML))).toFixed(0)});
//         highTemp.forEach((index) => {highTemp[index].innerHTML = convertC(parseInt((highTemp[index].innerHTML))).toFixed(0)});
//     } else if (value == "°F") {
//         console.log(`value elvauated to ${value}`);
//         lowTemp.forEach((element, index) => {lowTemp[index].innerHTML = convertF(parseInt((element))).toFixed(0)});
//         highTemp.forEach((element, index) => {highTemp[index].innerHTML = convertF(element)});
//     }
// }


function convertC(temp) {
    console.log(`temp is : ${temp}`);
    let c = (temp - 32) * (5/9);
    return c;
}

function convertF(temp) {
    console.log(`temp is : ${temp}`);
    let f = (temp * (9/5)) +32;
    return f;
}