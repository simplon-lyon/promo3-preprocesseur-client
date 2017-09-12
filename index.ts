import {Compteur} from './compteur';
import { TodoAjax } from './todo-ajax';

const compteur = new Compteur();
const para = document.querySelector('#para');

document.querySelector('#increment')
.addEventListener('click', (event)=> {
    compteur.increment();
    para.textContent = compteur.showCount().toString();
});

const todoAjax = new TodoAjax();
todoAjax.getAllTodos().then((response) => console.log(response));