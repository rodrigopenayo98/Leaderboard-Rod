const itemScore = () => {
  const scoreslist = document.querySelector('#scores-list');
  scoreslist.classList.add('score-box');
  scoreslist.innerHTML = `
    <li class="list" id="1"><p class="name">Rod: </p><p>100</p></li>
    <li class="list" id="2"><p class="name">Mason: </p><p> 99</p></li>
    <li class="list" id="3"><p class="name">Martin: </p><p>20</p></li>
    <li class="list" id="4"><p class="name">Hugo: </p><p>100</p></li>
    <li class="list" id="5"><p class="name">Jadnael: </p><p>100</p></li>
    <li class="list" id="6"><p class="name">Luis: </p><p>100</p></li>
    <li class="list" id="7"><p class="name">Alfred: </p><p>100</p></li>
    <li class="list" id="8"><p class="name">Gabriel: </p><p>100</p></li>
    <li class="list" id="9"><p class="name">Gonzalo: </p><p>100</p></li>
  `;
};

module.exports = itemScore;