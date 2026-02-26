const max=Math.max(5,8,9, 100)
// console.log(max)
const number=[55,60,90,300]
const max2=Math.max(...number)
// console.log(max2)
const params=[45,12,3]
function sum (x,y,z){
    
    return x+y+z
}
// const rr= sum(...params)
// console.log(rr);
// const array1=[1,2,3];
// const array2=array1;
// array2.push(55)
// console.log(array1);
// console.log(array2);

const array1=[1,2,3];
const array2=[...array1]
array2.push(55)
// console.log(array1);
// console.log(array2);
// const person1= { name:'alice', age:30}
// const person2= person1
// person1.salary=30000
// console.log(person1)
// console.log(person2)

const person1= { name:'alice', age:30}
const person2= {...person1, designation:'Dev'}
person2.salary=30000
console.log(person1)
console.log(person2)