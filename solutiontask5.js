function findAreaOfTriangle(num1, num2, num3) {
    var semiP = (num1 + num2 + num3) * 0.5;
    Area = Math.sqrt(semiP * (semiP - num1) * (semiP - num2) * (semiP - num3));
    return Area + 'sq units';
    
}

console.log(findAreaOfTriangle())