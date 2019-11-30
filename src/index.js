import { app } from './js/app';
import { year } from './js/year';
import { math } from './js/math';
import { date } from './js/date';
import './styles/main.scss';


app();
date();
math();
year();




var header = document.getElementById("title");
header.style.color = 'gray';

var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(){
    //console.log("button clicked")
    document.getElementById('button').style.color = "yellow"
}