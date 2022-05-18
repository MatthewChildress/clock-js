/*
using getTime() returns milliseconds since 1-1-1970.
need to use Date functions instead
*/

setInterval(theTime, 1000);
// setInterval(function,y) takes a function and updates by millisecond. 1000 = 1 second. setTimeout doesn't work for set up.
function theTime() {
    // When called as a constructor, returns a new Date object.
    const time = new Date();
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; // don't forget to make as strings
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    let wd = days[time.getDay()];
    let d = time.getDate();
    let mo = time.getMonth() + 1; //Months are in array. May shows at 4 so +1 needed.
    let y = time.getFullYear();
    let utc = time.getTime()
    // .getHours(), .getMinutes(), .getSeconds() are part of Date.prototype
    hours = checkTime(h);
    mins = checkTime(m);
    secs = checkTime(s);
    // template literals needed else it returns undefined
    document.getElementById("clock").textContent = `${hours} : ${mins} : ${secs}`;
    document.getElementById("date").textContent = `${wd}, ${d} - ${mo} - ${y}`;
    document.getElementById("utc").textContent = `${utc}`;
}

// don't forget to add i
function checkTime(i) {
    // adds 0 to hours,minutes, seconds 
    if (i < 10) {
        i = "0" + i
    };
    // if i isnt' returned, it'll returned undefined from a string and int being added
    return i;
}

theTime();
