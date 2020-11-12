function getTime(num) {
    var time = num;
    if (time > 60)
    return Math.trunc(time / 60) + 'hours'  + time % 60 + 'minutes'
    else
    return Math.trunc(time / 60) + 'hour'
    
}

console.log(getTime(133))