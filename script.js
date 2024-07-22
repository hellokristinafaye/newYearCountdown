let daysContainer = document.getElementById('days');
let hoursContainer = document.getElementById('hours');
let minutesContainer = document.getElementById('minutes');
let secondsContainer = document.getElementById('seconds');

function updateCountdown() {
    let newYear = new Date("January 1, 2025 00:00:00");
    // console.log(newYear);
    let currentTime = new Date();
    // console.log(currentTime);
    let diff = newYear - currentTime;
    
    let days = Math.floor(diff / (1000 * 60 * 60 * 24))
    console.log(days)
    let hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    console.log(hours)
    let minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60))
    console.log(minutes)

    let seconds = Math.floor((diff % (1000 * 60))/ 1000)

    console.log(seconds)

    daysContainer.innerHTML = days + "<span> Days</span>"
    hoursContainer.innerHTML = hours + "<span> Hours</span>"
    minutesContainer.innerHTML = minutes + "<span> Minutes</span>"
    secondsContainer.innerHTML = seconds + "<span> Seconds</span>"


}

setInterval(updateCountdown, 1000);
console.log("hello there");
