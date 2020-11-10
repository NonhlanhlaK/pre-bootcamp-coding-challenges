function Task8(num) {
    var time = num;
    return Math.trunc(time / 60) + 'hours' + time % 60 + 'minutes'
    
}

console.log(Task8())