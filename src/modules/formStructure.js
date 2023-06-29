import newGame from './post.js';
import itemScore from './scoreStructure.js';
import getInfo from './get.js';

const form = document.querySelector('#form-add');
const name = document.querySelector('.name-input');
const score = document.querySelector('.score');
const refresh = document.querySelector('#refresh');

const addPostEventToForm = () => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    await newGame(name.value, score.value);
    const data = await getInfo();
    data.result.sort((a, b) => (a.score > b.score ? -1 : 1));
    itemScore(data.result);
    form.reset();
  });
};

const getScore = () => {
  refresh.addEventListener('click', async () => {
    const data = await getInfo();
    data.result.sort((a, b) => (a.score > b.score ? -1 : 1));
    itemScore(data.result);
  });
};

export { addPostEventToForm, getScore };
