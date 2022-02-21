/* Main Functionality */
const gameBlock = document.querySelectorAll('.game-block');
const revealBtn = document.getElementById('reveal-btn');

// Flip Card
gameBlock.forEach((block) => {
  block.addEventListener('click', () => {
    block.classList.add('is-flipped');
  });
});

// Reveal All Cards
revealBtn.addEventListener('click', () => {
  gameBlock.forEach((block) => {
    block.classList.add('is-flipped');
  });
  revealBtn.classList.add('active');
});