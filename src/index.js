import './style.css';
import { postScore , getScore } from "./modules/formStructure.js"
import itemScore from './modules/scoreStructure.js';

postScore();
getScore();
window.addEventListener('load', itemScore);