import {Compteur} from './compteur';

const compteur = new Compteur();
const para = document.querySelector('#para');

document.querySelector('#increment')
.addEventListener('click', (event)=> {
    compteur.increment();
    para.textContent = compteur.showCount().toString();
});