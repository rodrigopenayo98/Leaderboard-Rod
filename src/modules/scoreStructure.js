import getInfo from "./get.js";

const itemScore = (data) => {
  const boardlist = document.querySelector("#scores-list");
  boardlist.innerHTML = "";

  for (let i = 0; i < data.length; i += 1) {
    const pattern = /[^0-9]/g;
    const num = `${data[i].score}`;
    const text = `${data[i].user}`;

    // if (!num.match(pattern) && num.length < 5 && text.length < 9 && text.length > 1) {
    const scoreItem = document.createElement("li");
    scoreItem.classList.add("score-item");

    const name = document.createElement("p");
    const score = document.createElement("p");

    name.classList.add("name");
    score.classList.add("score");

    name.textContent = `${data[i].user} :`;
    score.textContent = `${data[i].score}`;

    scoreItem.appendChild(name);
    scoreItem.appendChild(score);

    boardlist.appendChild(scoreItem);
    // }
  }
};

export default itemScore;
