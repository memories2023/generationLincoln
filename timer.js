let time = document.getElementById('time');
let feb = document.getElementById('febrero');
let marz = document.getElementById('marzo');
let ag = document.getElementById('agosto');


let ar = [{date: new Date('November 11, 2022 20:30:13'), bool: true}, {date: new Date('February 14, 2023 00:00:00'), bool: false}, {date: new Date('March 10, 2023 00:00:00'), bool:false}, {date: new Date('August 31, 2023 00:00:00'), bool: false}]
let arcl = [time, feb, marz, ag];

const res = (dateData) => {
    if(dateData.bool){
        let now = new Date('January 23, 2023 17:42:37');
        let miliDif = now - dateData.date.getTime();

        let secs = (miliDif / 1000);
        let min = (secs / 60).toFixed(0);
        let hour = (min/60).toFixed(0);
        let day = (hour/24).toFixed(0);
        let remainSecs = (((secs - 30) %60).toFixed(0));
        let remainMin = ((min%60).toFixed(0));
        let remainHour = hour%24;
        return {seconds: remainSecs, minutes:remainMin, hour: remainHour, day: day};
    } else {
        let now = Date.now();
        let miliDif = dateData.date.getTime() - now;
        let secs = (miliDif / 1000);
        let min = (secs / 60).toFixed(0);
        let hour = (min/60).toFixed(0);
        let day = (hour/24).toFixed(0);
        let remainSecs = (((secs - 30) %60).toFixed(0));
        let remainMin = ((min%60).toFixed(0));
        let remainHour = hour%24;
        return {seconds: remainSecs, minutes:remainMin, hour: remainHour, day: day};
    }



}

const resultTime = (data, locat) => {
    if(res(data).seconds <= 9){
        zeroS = `0${res(data).seconds}`;
    } else {
        zeroS = res(data).seconds;
    }

    if(res(data).minutes <= 9){
        zeroM = `0${res(data).minutes}`;
    } else {
        zeroM = res(data).minutes;
    }

    if(res(data).hour <= 9){
        zeroH = `0${res(data).hour}`;
    } else {
        zeroH = res(data).hour;
    }

    if(res(data).day <= 9) {
        zeroD = `0${res(data).day}`;
    } else {
        zeroD = res(data).day;
    }

    locat.innerHTML = `${zeroD}: ${zeroH}: ${zeroM}: ${zeroS}`;
}


setInterval("resultTime(ar[0], time)", 1000);
setInterval("resultTime(ar[1], feb)", 1000);
setInterval("resultTime(ar[2], marz)", 1000);
setInterval("resultTime(ar[3], ag)", 1000);

document.querySelectorAll('.timers-1').forEach(x => {x.addEventListener('click', () => {
    x.classList.toggle('opened');
    


})})