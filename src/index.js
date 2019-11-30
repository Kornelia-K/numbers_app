import { app } from './js/app';
import { appp } from './js/date';
import './styles/main.scss';

app();

var header = document.getElementsByClassName("display-4");
header.style.backgroundColor = 'yellow';

var button = document.getElementById('button').addEventListener('click', buttonClick);

function buttonClick(){
    //console.log("button clicked")
    document.getElementById('button').style.color = "yellow"
}