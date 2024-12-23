const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#8ecae6',
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

const game = new Phaser.Game(config);

let player;
let cursors;

function preload() {
  this.load.spritesheet('player', 'assets/player_spritesheet.png', {
    frameWidth: 64,
    frameHeight: 64,
  });
}

function create() {
  player = this.physics.add.sprite(400, 300, 'player');

  this.anims.create({
    key: 'walk_left',
    frames: this.anims.generateFrameNumbers('player', { start: 4, end: 7 }),
    frameRate: 10,
    repeat: -1,
  });

  this.anims.create({
    key: 'walk_right',
    frames: this.anims.generateFrameNumbers('player', { start: 8, end: 11 }),
    frameRate: 10,
    repeat: -1,
  });

  cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  player.setVelocity(0);

  if (cursors.left.isDown) {
    player.setVelocityX(-150);
    player.anims.play('walk_left', true);
  } else if (cursors.right.isDown) {
    player.setVelocityX(150);
    player.anims.play('walk_right', true);
  } else {
    player.anims.stop();
  }
}
