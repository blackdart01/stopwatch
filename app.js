let hr = 0;
let min = 0;
let sec = 0;
let ms = 0;
document.form_main.start.onclick = () => start();
document.form_main.pause.onclick = () => pause();
document.form_main.reset.onclick = () => reset();
let cron;
function start() {
    pause();
    cron = setInterval(() => {
        timer();
    }, 10);
}
function pause() {
    clearInterval(cron);
}
function reset() {
    hr = 0;
    min = 0;
    sec = 0;
    ms = 0;
    document.getElementById('hour').innerHTML = '00';
    document.getElementById('minute').innerHTML = '00';
    document.getElementById('second').innerHTML = '00';
    document.getElementById('millisecond').innerHTML = '000';
}
function timer() {
    if ((ms += 10) == 1000) {
        ms = 0;
        sec++;
    }
    if (sec == 60) {
        sec = 0;
        min++;
    }
    if (min == 60) {
        min = 0;
        hr++;
    }
    document.getElementById('hour').innerHTML = returnDate(hr);
    document.getElementById('minute').innerHTML = returnDate(min);
    document.getElementById('second').innerHTML = returnDate(sec);
    document.getElementById('millisecond').innerHTML = returnDate(ms);
}

function returnDate(input) {
    return ((input < 10) ? (input = '0' + input) : input);
}