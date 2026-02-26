const firstName='Kamruzzaman';
const lastName="Shuvo"
const aboutMe=`My Name is ${firstName} ${lastName}`
// console.log(aboutMe)
const price=`Give me money ${500+25}`
// console.log(price)
function getHTML(name, description, price){
const div=`
 <div class="card"<h1> Name: ${name.toUpperCase()} </h1>
<p> description : ${description.toLowerCase()}</p>
<p> price : ${price}</p>
</div>
`


console.log(div)
}
getHTML('Abdul Karim', 'My Name Is Abdul Karim', 34)