import './style.css';
import { getScore } from "./modules/formStructure.js"
import itemScore from './modules/scoreStructure.js';
import { addPostEventToForm } from './modules/formStructure.js';
import getInfo from './modules/get.js';

addPostEventToForm();
getScore();

window.addEventListener('load', async () => {
  const data = await getInfo();
  data.result.sort((a,b)  => a.score > b.score ? -1 : 1);
  itemScore(data.result);
});