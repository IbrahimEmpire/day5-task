



// A. Print odd numbers in an array 

(function(){
    let n=1
    while(n<50){
        n=n+2
        console.log("add number ", n)
    }
})();

// B. Convert all the strings to title caps in a string array



(function titleCase(a) {
  a = a.toLowerCase().split(' ');
  for (var i = 0; i < a.length; i++) {
      a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1);
  }
  console.log(a.join(' '));
})("all the strings to title caps in a string array ");

// Result: Convert All The Strings To Title Caps In A String Array





// C. Sum of all numbers in an array



function sumOfAll(arr) {
  return arr.reduce((acc,curr) =>
  acc + curr)
}
console.log(sumOfAll([12,12,2,10]))





// D. prime number
 
for (var limit = 2; limit<=50; limit++){

  var PN = true;
  for (var i = 2; i <= limit; i++) {
    if (limit%i == 0 && i != limit){
      PN = false;
    }
  }
  if ( PN == true){
    console.log("prime number :" + limit);
    }
}


  //  Rotate an array by k times

  var rotate = function (a, k) {
    for (var i = 0; i < k; i++) {
        a.unshift(a.pop());
    }
    return a;
}
console.log(rotate([1, 2, 3, 4, 5, 6], 3));


