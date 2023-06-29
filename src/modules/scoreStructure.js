const itemScore = (data) => {
  const boardlist = document.querySelector('#scores-list');
  boardlist.innerHTML = '';

  for (let i = 0; i < data.length; i += 1) {
    const scoreItem = document.createElement('li');
    scoreItem.classList.add('score-item');

    const name = document.createElement('p');
    const score = document.createElement('p');

    name.classList.add('name');
    score.classList.add('score-list');

    name.textContent = `${data[i].user} :`;
    score.textContent = `${data[i].score}`;

    scoreItem.appendChild(name);
    scoreItem.appendChild(score);

    boardlist.appendChild(scoreItem);
  }
};

export default itemScore;
