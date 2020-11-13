sum = 0;
for (a = 0; a < 1000; a++) {
    if (a % 3 === 0 || a % 5 === 0) {
        sum += a;
    }
} 

console.log(sum)