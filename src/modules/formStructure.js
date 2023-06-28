import { newGame } from './post.js';
import { itemScore } from './scoreStructure.js';

const form = document.querySelector('#form-add');
const name = document.querySelector('.name-input');
const score = document.querySelector('.score');
const refresh = document.querySelector('#refresh');

const postScore = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    newGame(name.value, score.value);
    form.reset();
  };

  form.addEventListener('submit', handleSubmit);
};

const getScore = () => {
  const handleClick = async () => {
    await itemScore();
  };

  refresh.addEventListener('click', handleClick);
};

export { postScore, getScore };
