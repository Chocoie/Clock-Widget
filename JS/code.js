let hrs = document.getElementById("hrs");
let mins = document.getElementById("mins");
let snoopy = document.getElementById("snoopyImg");
let lastHour = new Date().getHours();
let lastMin = new Date().getMinutes();

setInterval(() => {
    let currTime = new Date();
    hrs.innerHTML = ((currTime.getHours()%12)<10?"0":"") + (currTime.getHours()%12);
    mins.innerHTML = (currTime.getMinutes()<10?"0":"") + currTime.getMinutes();  

    // TEMPORARY TEST: Triggers every second
    if (lastMin !== currTime.getMinutes()) {
        doAnimation();
        lastMin = currTime.getMinutes();
    }

    if(lastHour !== currTime.getHours())
    {
        doAnimation();
        lastHour = currTime.getHours();
    }
}, 1000);

function doAnimation () 
{
    const clock = document.getElementsByClassName("clockSpan");
    
    for(let span of clock)
    {
        span.classList.add("hourBump");
    }
    snoopy.classList.add("activateSnoopy");

    setTimeout(() => {
        for(let span of clock)
        {
            span.classList.remove("hourBump");
        }
        snoopy.classList.remove("activateSnoopy");
    }, 800);
}