class Player {
  constructor({x, y, score, id}) {
    this.x = x;
    this.y = y;
    this.score = score;
    this.id = id;
    this.image = null;

    this.createImage();
  }

  createImage() {
    const canvas = document.createElement('canvas');
    canvas.width = 100;
    canvas.height = 100;

    const context = canvas.getContext('2d');
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    
    context.fillStyle = randomColor;
    context.fillRect(0, 0, canvas.width, canvas.height);

    const img = new Image();
    img.src = canvas.toDataURL();

    img.onload = () => {      
      this.image = img;
    };
  }

  movePlayer(dir, speed) {
    switch (dir) {
      case 'up':
        this.y -= speed;
        break;
      case 'down':
        this.y += speed;
        break;
      case 'left':
        this.x -= speed;
        break;
      case 'right':
        this.x += speed;
        break;
    }
  }

  collision(otherPlayer) {
    return (
      this.x < otherPlayer.x + otherPlayer.width &&
      this.x + this.image.width > otherPlayer.x &&
      this.y < otherPlayer.y + otherPlayer.height &&
      this.y + this.image.height > otherPlayer.y
    );
  }

  calculateRank(arr) {
    arr.sort((a, b) => b.score - a.score);
    return arr.findIndex(player => player.id === this.id) + 1;
  }
}

export default Player;
