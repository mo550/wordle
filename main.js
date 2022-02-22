/* Main Variables */
const gameBlock = document.querySelectorAll('.game-block');
const revealBtn = document.getElementById('reveal-btn');

// Flip Card When Clicking
gameBlock.forEach((block) => {
  block.addEventListener('click', () => {
    block.classList.add('is-flipped');
  });
});

// Reveal All Cards When Clecking On "Reveal All"
revealBtn.addEventListener('click', () => {
  gameBlock.forEach((block) => {
    block.classList.add('is-flipped');
  });
  revealBtn.classList.add('active');
});