/**
 * Created by melanie.myers on 1/27/17.
 */

function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();

    console.log(now);
    console.log(seconds);
}

setInterval(setDate, 1000);