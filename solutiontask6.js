function findMaxNum(num1, num2, num3) {
    let arr = [num1, num2, num3];
    let maxNum = arr[0];
    for(a = 0; a < arr.length; a++) {
        if(arr[a] > maxNum) {
            maxNum = arr[a]
        }
    }
    return maxNum
}

console.log(findMaxNum())