var a = 10;
console.log(a);
console.log(typeof a);
x = function(){console.log("Inside function")}
console.log(typeof x)
x()
console.log(typeof x)

let name = "ABC" + "BVX";
console.log(name)

console.log(name.indexOf('C'));

console.log(name.toLowerCase())

console.log(name.slice(2,5))
console.log(name.substring(2,5))


function Addition(){
    var p = document.getElementById("result");
    var num1 = parseInt(f1.n1.value);
    var num2 = parseInt(f1.n2.value);
    var result = num1+num2 ;
    p.innerHTML = "Addition result is " +result;
}


function Factorial(){
    let p = document.getElementById("res");
    let num = parseInt(f2.t1.value);
    for(let i = num;i>1;i--){
        num*=(i-1)
    }

    p.innerHTML = "Factorial is " +num;    
}