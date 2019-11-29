import { app } from './js/app';
import './styles/main.scss';

app();

var header = document.getElementsByClassName("display-4");
header.innerHTML = '<h3>Hello</h3>';