/**
 * Created by melanie.myers on 1/27/17.
 */

const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');



function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    console.log(seconds);

    if (seconds === 0) {
        setMinuteHand();
    }

}

function setMinuteHand() {
    const now = new Date();
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    console.log(`minutes: ${minutes} minutesDegrees: ${minutesDegrees}`);

    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    if (minutes === 0) {
        setHourHand();
    }

}

function setHourHand() {
    const now = new Date();
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    console.log(`hour: ${hour} hourDegrees: ${hourDegrees}`);

    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setHourHand();
setMinuteHand();
setInterval(setDate, 1000);



