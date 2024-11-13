import Player from './Player.mjs';
// import Collectible from './Collectible.mjs';

//const socket = io();
const gameWindowCanvas = document.getElementById('game-window');
const gameWindowContext = gameWindowCanvas.getContext('2d');
const gameWindowPosition = gameWindowCanvas.getBoundingClientRect();

const player = new Player({
  x: 0,
  y: 0,
  score: 0,
  id: 'player-one'
});

const handleKeyDown = (event) => {
  switch (event.key) {
    case 'ArrowUp':
      player.movePlayer('up', 5);
      break;
    case 'ArrowDown':
      player.movePlayer('down', 5);
      break;
    case 'ArrowLeft':
      player.movePlayer('left', 5);
      break;
    case 'ArrowRight':
      player.movePlayer('right', 5);
      break;
  }
}

document.addEventListener('keydown', handleKeyDown);

const drawPlayer = () => {
  gameWindowContext.clearRect(0, 0, gameWindowCanvas.width, gameWindowCanvas.height);

  if (player.image) {
    gameWindowContext.drawImage(player.image, player.x, player.y, 100, 100);
  } else {
    console.warn("Player image is not yet loaded.");
  }

  requestAnimationFrame(drawPlayer);
};

drawPlayer();