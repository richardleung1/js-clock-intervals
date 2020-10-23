function secondRotation(seconds) {
    let degRotation = seconds * 6;
    
      return degRotation;
    }

function minuteRotation(minutes, seconds) {
    minutes = minutes += (seconds/60);
        let degRotation = minutes *.1;
        return degRotation;
}
        


function hourRotation(hours, minutes) {
    minute = minutes += (hours*60);
    let degRotation = minutes *.5;
    return degRotation;
}

function tick() {
    setInterval(() => console.log("a"), 1000)
}
tick()