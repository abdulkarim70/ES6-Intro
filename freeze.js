const king= {name:'mustafa', age:55, kingdom:'pride land' }
Object.freeze(king)   
Object.seal(king)
// freeze and  seal same but seal exixtance can modify
delete king.age

king.category='tiger'
king.name='abdul Karim'
console.log(king);