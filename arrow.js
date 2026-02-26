// function declaration
function add (num1, num2){
    return num1+num2;
}
const result=add(20,45)
console.log(result)
// console.log(add2(40,40))
// function expression
const add2 = function add2(num1, num2){
    return num1+num2
}
// arrow function
add3=(num1, num2, num3)=>num1+num2+num3


// console.log(add3(5,7,3))
const multiply=(a,b)=>a*b

const tenTimes=x => x*10
const tenTimes2=x =>x*10
const getPi=()=>3.1416;
const addAll=(a,b,c,d,e,f)=> a+b+c+d+e+f;
const isEven=num =>num%2===0
const doMath=(x,y)=>{
sum=x+y
dif=x-y
multiply=x*y
}
const divide=(p,q) => p/q;
divide(10,5)
console.log(divide(10,5))