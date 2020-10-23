let seconds = 0;
let minutes = 0;
let hours = 0;
    
function secondRotation(seconds) {
    let degRotation = (seconds % 60) * 6;
    return degRotation;
}

function minuteRotation(minutes, seconds) {
    let degRotation = minutes * 6;
    return degRotation;
}

function hourRotation(hours, minutes) {
    let degRotation = (hours * 30);
    return degRotation;
}

function tick() {
    seconds = seconds += 1;
    minutes = seconds / 60
    hours = seconds / 3600
    
    let hourHand = document.getElementById("hour")
    let hoursDegrees = hourRotation(hours, minutes)
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`
    let minuteHand = document.getElementById("minute")
    let minutesDegrees = minuteRotation(minutes, seconds);
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`
    let secondHand = document.getElementById("second")
    let secondsDegrees = secondRotation(seconds);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
}
setInterval(tick, 1000)