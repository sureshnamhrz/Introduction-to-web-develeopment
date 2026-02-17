// javascript variable



const fullname='Sureshna Maharjan';
let address='Kathmandu,Nepal';
const bloodGroup='B+';

console.log('Full Name:',fullname);
console.log('Address:',address);
console.log('Blood Group:',bloodGroup);


//data types
let name='Sureshna';
let age=20;                               //number
let isStudent=true;                       //boolean
let hobbies=['Traveling','Cooking','Pinterest']; //array

console.log(hobbies[0]);

let user={
    name:'Sureshna',
    age:20,
    isStudent:true,
    hobbies:['Traveling','Cooking','Pinterest'], //object

};                                                 

console.log(user['name']);
console.log(user.name); //this is mostly used 


//functions
function greet(name){
    console.log('Welcome',name);
}

greet('Sureshna');

//DOM Manipulation
const headingElementById= doucument.getElementById('heading-2');
console.log('heading element by id',headingElementById);

const headingElementByQuery= doucument.getElementById('#heading-2');
console.log('heading element by query',headingElementByQuery);
 

headingElementByQuery.textContent='Get element by query selector';
headingElementByQuery.style.color='blue';
headingElementByQuery.style.fonsize='24px';
 
const buttonELement=document.querySelector('.btn');
buttonELement.addEventListener('click',function () {
    alert('Button clicked');
    console.log('Button clciked');
});