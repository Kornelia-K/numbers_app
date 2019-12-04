import { trivia } from './js/trivia';
import { year } from './js/year';
import { math } from './js/math';
import { date } from './js/date';
import './styles/main.scss';











var header = document.getElementById("title");
header.style.color = 'gray';


var button = document.getElementById('a').addEventListener('click', buttonClick);

function buttonClick(){
    console.log("button clicked")
    trivia();
    header.innerText="Numbers are the best!!!"
   
};
var button2 = document.getElementById('b').addEventListener('click', buttonClick2);
function buttonClick2(){
    console.log("button clicked")
    date();
    header.innerText="Numbers are the best!!!"
   
};
var button3 = document.getElementById('c').addEventListener('click', buttonClick3);
function buttonClick3(){
    console.log("button clicked")
    year();
    header.innerText="Numbers are the best!!!"
   
};
var button4 = document.getElementById('d').addEventListener('click', buttonClick4);
function buttonClick4(){
    console.log("button clicked")
    math();
    header.innerText="Numbers are the best!!!"
   
};