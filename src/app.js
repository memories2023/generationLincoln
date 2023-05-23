let time = document.getElementById('time');

let dates = [{date: new Date('June 29, 2023 15:00:00'), bool: false}]

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

setInterval("resultTime(dates[0], time)", 1000);


