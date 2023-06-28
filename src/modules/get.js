import { url } from './api.js';

const getInfo = async () => {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error('Request failed');
    }

    response.result.sort((a, b) => b.score - a.score);
  response.result.forEach((ele) => {
    const list = document.createElement('li');
    list.innerHTML = `<spam>${ele.user}</spam><spam>${ele.score}</spam>`;
    listContainer.appendChild(list);
  });
  } catch (error) {
    console.log('Error:', error);
    return null;
  }
};

export default getInfo;

