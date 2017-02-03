/**
 * Created by melanie.myers on 1/27/17.
 */

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
const dateSection = document.querySelector('.date');


function setDay() {
    const now = new Date();
    const year = now.getFullYear()
    dateSection.innerHTML = year;
}

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    if (seconds === 0) {
        setMinuteHand();
    }

}

function setMinuteHand() {
    const now = new Date();
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;

    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    if (minutes === 0) {
        setHourHand();
    }

}

function setHourHand() {
    const now = new Date();
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setDay();
setHourHand();
setMinuteHand();
setInterval(setDate, 1000);



