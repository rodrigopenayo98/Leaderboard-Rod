import { newGame } from './post.js';
import { itemScore } from './scoreStructure.js';

const form = document.querySelector('#form-add');
const name = document.querySelector('.name-input');
const score = document.querySelector('.score');
const refresh = document.querySelector('#refresh');

const postScore = () => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    await newGame(name.value, score.value);
    form.reset();
  });
};

const getScore = () => {
  refresh.addEventListener('click', () => {
    // Llamar a itemScore para obtener y agregar los puntajes
    itemScore();
  });
};

export { postScore, getScore };
