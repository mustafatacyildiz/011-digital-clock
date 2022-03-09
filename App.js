let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let amPm = document.querySelector(".am_pm");

function clock (){
    let date = new Date();
    let a = date.getHours();
    let b = date.getMinutes();
    let c = date.getSeconds();

    c < 10 ? (second.textContent = "0" + c) : (second.textContent = c);

    b < 10 ? (minute.textContent = "0" + b) :
    (minute.textContent = b);

    a < 10 ? (hour.textContent = "0" + a) :
    (hour.textContent = a);

    a < 12 ? (amPm.textContent = "AM") : ((amPm.textContent = "PM") && (hour.textContent = "0" + (hour.textContent-12)));
}

setInterval("clock()", 1000);
