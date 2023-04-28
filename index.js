// const end = prompt("Enter End Date : eg- March 02 2024 07:20:00 PM")

const end = "March 2 2025 03:09 PM";
function clock(){
    const enddate = new Date(end).getTime();
    const nowdate = new Date().getTime();
    const dif = (enddate - nowdate)/1000;
    if(dif < 0) return;
    else{
        // console.log(dif);
        const days = Math.floor(dif / (24 * 3600));
        // console.log(days);
        document.getElementById('day').innerHTML = days;
        const hours = Math.floor((dif % (24 * 3600)) / 3600);
        // console.log(hours);
        document.getElementById('hour').innerText = hours;
        const mins = Math.floor(((dif % (24 * 3600)) % 3600) / 60);
        // console.log(mins);
        document.getElementById('minute').innerText = mins;
        const secs = Math.floor(((dif % (24 * 3600)) % 3600) % 60);
        document.getElementById('second').innerText = secs;
        // console.log(secs);
    }
}
clock()
setInterval(() => {
    clock();
}, 1000);
