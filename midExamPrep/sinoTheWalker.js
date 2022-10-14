function solve(hour, steps, secPerStep){
    let [hours, minutes, seconds] = hour.split(':');
    let secondsNeeded  = steps * secPerStep;

    let hourAsNum = Number(hours);
    let minutesAsNum = Number(minutes);
    let secondsAsNum = Number(seconds);

    let finalSecs = secondsAsNum + secondsNeeded;
    if(finalSecs > 59){
        

    }

    if(minutesAsNum > 59){
        minutesAsNum = 0 + (minutesAsNum - 59);
        minutesAsNum++;
    }

    if(hourAsNum > 23){
        hourAsNum = 0 + (hourAsNum - 23);
    }

}

solve('12:30:30',
90,
1);