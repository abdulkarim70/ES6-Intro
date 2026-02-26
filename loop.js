// const numbers=[1,2,3,4,5];
// for (let number of numbers){
//     console.log(number)
// }

const employee={
    name:'John',
     position:'Software Eng',
     'home-address':'barishal',
     salary:50000
    }
   
    for(let key in employee){
        const value=employee[key]
        console.log(key, value)
    }