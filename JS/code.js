let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let currTime = new Date();

setInterval(() => {
    hrs.innerHTML = ((currTime.getHours()%12)<10?"0":"") + (currTime.getHours()%12);
    mins.innerHTML = (currTime.getMinutes()<10?"0":"") + currTime.getMinutes();
}, 1000);