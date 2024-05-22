// for(let i=0; i<= 25; i+=2){
//     console.log(i)
// }

// // for()



//     // for(let odd=0; odd < 2 == 0; odd++){
//     //     console.log(odd)
//     // }


// //    for(z =0; z<= 34; z)
// //     console.log(z)
// for (let b = 1; b <= 10; b++) {
//     let xx = b * b;
//     console.log(xx)
// }

function sum(num1, num2){
    return(num1 + num2)


}
function min(num1, num2){
    return(num1 - num2)
    

}
function div(num1, num2){
    return(num1 / num2)
    

}
var multi= function mult(num1, num2){
    return(num1 * num2)
    

}
console.log(sum(2, 2))
console.log(min(1, 2))
console.log(div(10, 2))
console.log(multi(3, 2))




function Fuzzbuzz(pp){
if (pp %3 == 0 && pp %5 == 0)
    return("FuzzBuzz")
else if (pp % 5 == 0)
    return("Buzz")
else if(pp % 3 == 0)
    return("fuzz")
else{
    return("not fuzzbuzz")


}

}
console.log(Fuzzbuzz(15));
console.log(Fuzzbuzz(5));
console.log(Fuzzbuzz(3));
console.log(Fuzzbuzz(4));