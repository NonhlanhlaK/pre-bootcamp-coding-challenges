function isOrContains3(num1, num2) {

  var num = num1 + num2
   if (num.toString().match(/3/) && (num1 == 3 || num2 == 3))
   return true
   else return false
   
  
  }
  
  console.log(isOrContains3(3, 11))
