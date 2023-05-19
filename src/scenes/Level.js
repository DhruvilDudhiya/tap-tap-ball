
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg_image
		const bg_image = this.add.image(250, 335, "bg_image");
		bg_image.scaleX = 0.15;
		bg_image.scaleY = 0.15;

		// text1
		const text1 = this.add.text(244, 107, "", {});
		text1.text = "0\n";
		text1.setStyle({ "fontSize": "50px", "fontStyle": "bold" });

		// ground
		const ground = this.add.image(253, 676, "bg_image");
		ground.scaleX = 0.15;
		ground.scaleY = 0.01;
		ground.alpha = 0.4;
		ground.alphaTopLeft = 0.4;
		ground.alphaTopRight = 0.4;
		ground.alphaBottomLeft = 0.4;
		ground.alphaBottomRight = 0.4;

		// game_paused
		const game_paused = this.add.image(245, 307, "game paused");
		game_paused.scaleX = 0.45;
		game_paused.scaleY = 0.45;
		game_paused.visible = false;

		// gameover
		const gameover = this.add.image(242, 296, "gameover");
		gameover.scaleX = 0.5233386361994911;
		gameover.scaleY = 0.6126673634536107;
		gameover.visible = false;

		// tap
		const tap = this.add.image(267, 491, "tap");
		tap.scaleX = 0.4;
		tap.scaleY = 0.4;

		// pause_ui
		const pause_ui = this.add.image(448, 58, "Pause_ui");
		pause_ui.scaleX = 0.12;
		pause_ui.scaleY = 0.12;

		// ui3
		const ui3 = this.add.image(58, 60, "ui3");
		ui3.scaleX = 0.12;
		ui3.scaleY = 0.12;

		// mute_ui
		const mute_ui = this.add.image(56, 62, "mute_ui");
		mute_ui.scaleX = 0.12;
		mute_ui.scaleY = 0.12;
		mute_ui.visible = false;

		// play2_ui
		const play2_ui = this.add.image(265, 413, "Play2_ui");
		play2_ui.scaleX = 0.2;
		play2_ui.scaleY = 0.2;
		play2_ui.visible = false;

		// replay_ui
		const replay_ui = this.add.image(264, 412, "Replay_ui");
		replay_ui.scaleX = 0.2;
		replay_ui.scaleY = 0.2;
		replay_ui.visible = false;

		this.bg_image = bg_image;
		this.text1 = text1;
		this.ground = ground;
		this.game_paused = game_paused;
		this.gameover = gameover;
		this.tap = tap;
		this.pause_ui = pause_ui;
		this.ui3 = ui3;
		this.mute_ui = mute_ui;
		this.play2_ui = play2_ui;
		this.replay_ui = replay_ui;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	bg_image;
	/** @type {Phaser.GameObjects.Text} */
	text1;
	/** @type {Phaser.GameObjects.Image} */
	ground;
	/** @type {Phaser.GameObjects.Image} */
	game_paused;
	/** @type {Phaser.GameObjects.Image} */
	gameover;
	/** @type {Phaser.GameObjects.Image} */
	tap;
	/** @type {Phaser.GameObjects.Image} */
	pause_ui;
	/** @type {Phaser.GameObjects.Image} */
	ui3;
	/** @type {Phaser.GameObjects.Image} */
	mute_ui;
	/** @type {Phaser.GameObjects.Image} */
	play2_ui;
	/** @type {Phaser.GameObjects.Image} */
	replay_ui;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		//this.input.mouse.disableContextMenu.manu();
		this.gameOption = {
			initialTime: 60
		}
		this.timeLeft = this.gameOption.initialTime;
		// Add board
		this.board = this.physics.add.image(470, 240, "board");
		this.board.scaleX = 0.2;
		this.board.scaleY = 0.2;
		this.board.setOrigin(0.5);
		this.board.setImmovable(true);

		// Add basketback
		this.b1 = this.physics.add.image(400, 286, "b1");
		this.b1.scaleX = 0.2;
		this.b1.scaleY = 0.2;
		this.b1.setOrigin(0.5);

// Add rod
		this.rod3 = this.physics.add.image(415, 287, "g1");
		this.rod3.setScale(0.34);
		this.rod3.setScale(0.34);
		this.rod3.setOrigin(0.5);
		this.rod3.refreshBody();
		this.rod3.visible = false;
		this.rod3.setImmovable(true);

// add fire partical
       this.fire = this.add.particles("partical2");
	   //this.fire.visible = false;
	
// Add ball
		this.ball1 = this.physics.add.image(200, 300, "ball1");
		this.ball1.setScale(0.08, 0.08);
		this.ball1.setOrigin(0.5);
		this.ball1.refreshBody();
		this.ball1.visible = true;
		this.ball1.setGravityY(2000);
		this.ball1.setBounceY(0.4);
		
// partical emiter 
		this.emitter = this.fire.createEmitter({
			speed : 80,
			scale : { start : 1 , end : 0 },
			blendMode : 'ADD',
			lifespan : { min : 10, max : 100}		
		});
		this.emitter.startFollow(this.ball1,0.18);
		this.emitter.setScale(0.18);
		this.emitter.setGravityY(100);
		this.emitter.flow(0,1);
		
		// Add basket front
		this.basket1 = this.physics.add.image(410, 320, "basket1");
		this.basket1.scaleX = 0.2;
		this.basket1.scaleY = 0.2;
		this.basket1.setOrigin(0.5);

		//Add Line
		this.line = this.physics.add.image(360, 290, "line");
		this.line.scaleX = 0.4;
		this.line.scaleY = 0.9;
		this.line.setOrigin(0.5);
		this.line.refreshBody();
		this.line.setImmovable(true);
		this.line.visible = false;	

		// Add ground
		this.ground = this.physics.add.staticImage(253, 676, "bg_image");
		this.ground.scaleX = 0.15;
		this.ground.scaleY = 0.01;
		this.ground.alpha = 0.4;
		this.ground.refreshBody();
		// Add Energy Counter
		this.energyCount = this.add.sprite(260, 60, "eCont1");
		this.energyCount.setScale(0.2, 0.25);
		// Add energy bar
		this.energybar = this.add.sprite(this.energyCount.x, this.energyCount.y, "eBar1");
		this.energybar.setScale(0.23, 0.29);
		//Add energy bar mask
		this.energymask = this.add.sprite(this.energybar.x, this.energybar.y, "eBar1");
		this.energymask.setScale(0.23, 0.29);
		this.energymask.visible = false;
		this.energybar.mask = new Phaser.Display.Masks.BitmapMask(this, this.energymask);
		//Add Sound
		this.music = this.sound.add("Whistle");
		this.music.play();
		this.music.setVolume(0.5);
		this.music1 = this.sound.add("hit_bll");
		this.rotation = false;
		this.score = 0;
		this.count = 0;
		// Add timer event
		this.gameTimer = this.time.addEvent({
			delay: 600,
			callback: function () {
				this.timeLeft--;
				this.stepwidth = this.energymask.displayWidth / this.gameOption.initialTime;
				
				this.energymask.x -= this.stepwidth;
				if (this.timeLeft == 0) {
					this.gameover.visible = true;	
					this.pause_ui.visible = false;
					this.replay_ui.visible = true;
					this.music1.setMute(true);
					this.physics.pause();
					this.rotation = true;
				}
			},
			callbackScope: this,
			loop: true
		});
	

		this.ui3.setInteractive().on("pointerdown", function () {
			this.music.setMute(true);
			this.music1.setMute(true);
			this.mute_ui.visible = true;
			this.ui3.visible = false;

		}, this)

		this.mute_ui.setInteractive().on("pointerdown", function () {
			this.mute_ui.visible = false;
			this.ui3.visible = true;
			this.music1.setMute(false);

		}, this)
		this.pause_ui.setInteractive().on("pointerdown", function () {
			this.physics.pause();
			this.music1.setMute(true);
		    this.gameTimer.paused = true;
			this.game_paused.visible = true;
			this.play2_ui.visible = true;
			this.pause_ui.visible = false;
			this.rotation = true;
			this.physics.pause();

		}, this)
		this.play2_ui.setInteractive().on("pointerdown", function () {
			this.physics.resume();
			this.gameTimer.paused = false;
			this.play2_ui.visible = false;
			this.pause_ui.visible = true;
			this.game_paused.visible = false;
			this.game_paused.visible = false;
			this.music1.setMute(false);
			this.rotation = false;
		}, this)


		this.replay_ui.setInteractive().on("pointerdown", function () {
			this.scene.start("Level");
		}, this)


		this.bg_image.setInteractive().on("pointerdown", function () {
         	this.music1.play();
			this.music1.setVolume(0.2);
			this.tap.visible = false;
			if (this.basket1.x == 69 || this.basket1.x == 410 || this.basket1.x == 420) {
				
				this.moveRight();
			}
			if (this.basket1.x == 90 || this.basket1.x == 85) {
				
				this.moveLeft();
			}

		}, this)
		this.tweens.add({
			targets: this.tap,
			y: 480,
			alpha: 1,
			ease: 'Linear',
			repeat: -1,
			yoyo: true,
		})

		this.overlap();
		//collider /w ball and rod
		this.physics.add.collider(this.ball1, this.rod);
		// collidere b/w ball and rod2
		this.physics.add.collider(this.ball1, this.rod2);
		// collder b/w ball and ground
		this.physics.add.collider(this.ball1, this.ground);
		// collder b/w ball and line
		this.physics.add.collider(this.ball1, this.line);
		// coolder b/w ball and  basketboard
		this.physics.add.collider(this.ball1, this.board);
		

		/* END-USER-CODE */
	}

	/* END OF COMPILED CODE */

	// You can write more code here	
// collide function
	collide() {	
		if (this.ball1.y < this.rod3.y) {
			this.physics.world.removeCollider(this.col1);
			this.scoreUpdate();
			this.scorePlus();
			this.basketPos();					
		}
	}

// over lap function	
	overlap() {
		this.col1 = this.physics.add.collider(this.ball1, this.rod3, this.collide, null, this);
	}
//ball move right 
	moveRight() {
		this.ball1.setVelocityY(-285 * 2.7);
		this.ball1.setVelocityX(220 * 1.8);
	}
// Ball move left	
	moveLeft() {
		this.ball1.setVelocityY(-285 * 2.7);
		this.ball1.setVelocityX(-220 * 1.8);
	}	
// score function	
	scoreUpdate() {
		this.score = this.score + 1
        this.text1.text = this.score;
	}
	scorePlus(){
		if(this.score == 3){
			this.score = this.finalscore;
			this.fire.visible = true;
			this.finalscore = 0;
		}
	}

// change basket position
	basketPos() {

		this.physics.world.addCollider(this.col1);

		if (this.basket1.x == 90) {

			setTimeout(() => {
				this.overlap();

				
				this.rndInt = Math.floor(Math.random() * (500 - 200) + 200);
			
				this.board.setX(540);
				this.board.setY(this.rndInt);
				this.board.flipX = false;
				this.basket1.flipX = false;
				this.basket1.setX(500);
				this.basket1.y = this.board.y + 80;
				this.b1.setX(490);
				this.b1.y = this.board.y + 46;
				this.rod3.setX(415);
				this.rod3.y = this.board.y + 46;
				this.line.setX(370);
				this.line.y = this.board.y + 46;
				this.tweenes = this.tweens.add({
					targets: this.basket1,
					duration: 1000,
					x: 420,
					ease: 'Linear',
					repeat: 0,
				})
				this.tweenes = this.tweens.add({
					targets: this.b1,
					duration: 1000,
					x: 410,
					ease: 'Linear',
					repeat: 0,
				})
				this.tweenes = this.tweens.add({
					targets: this.board,
					delay: 20,
					x: 480,
					ease: 'Linear',
					repeat: 0,
				})
			}, 800)

		}
		else if (this.basket1.x == 410) {
			//this.physics.world.addCollider(this.col1);

			setTimeout(() => {
				this.overlap();
				
				this.rndInt = Math.floor(Math.random() * (500 - 200) + 200);

				this.board.setX(-40);
				this.board.setY(this.rndInt);
				this.board.flipX = true;
				this.basket1.setX(0);
				this.basket1.y = this.board.y + 80;
				this.basket1.flipX = true;
				this.rod3.setX(90);
				this.rod3.y = this.board.y + 46;
				this.line.setX(135);
				this.line.y = this.board.y + 46;
				this.b1.setX(10);
				this.b1.y = this.board.y + 46;
				this.tweenes = this.tweens.add({
					targets: this.basket1,
					duration: 1000,
					x: 90,
					ease: 'Linear',
					repeat: 0,
				})
				this.tweenes = this.tweens.add({
					targets: this.b1,
					duration: 1000,
					x: 100,
					ease: 'Linear',
					repeat: 0,
				})
				this.tweenes = this.tweens.add({
					targets: this.board,
					delay: 20,
					x: 25,
					ease: 'Linear',
					repeat: 0,
				})

			}, 800)
		}
		else if (this.basket1.x == 420) {
			setTimeout(() => {
				this.overlap();
			
				this.rndInt = Math.floor(Math.random() * (500 - 200) + 200);
				this.board.setX(-40);
				this.board.setY(this.rndInt);
				this.board.flipX = true;
				this.basket1.setX(0);
				this.basket1.y = this.board.y + 80;
				this.basket1.flipX = true;
				this.rod3.setX(93);
				this.rod3.y = this.board.y + 46;
				this.line.setX(135);
				this.line.y = this.board.y + 46;
				this.b1.setX(10);
				this.b1.y = this.board.y + 46;
				this.tweenes = this.tweens.add({
					targets: this.basket1,
					duration: 1000,
					x: 85,
					ease: 'Linear',
					repeat: 0,
				})
				this.tweenes = this.tweens.add({
					targets: this.b1,
					duration: 1000,
					x: 95,
					ease: 'Linear',
					repeat: 0,
				})
				this.tweenes = this.tweens.add({
					targets: this.board,
					delay: 20,
					x: 25,
					ease: 'Linear',
					repeat: 0,
				})

			}, 800)
		}
		else if (this.basket1.x == 85) {
			setTimeout(() => {
				this.overlap();
				
				this.rndInt = Math.floor(Math.random() * (500 - 200) + 200);
				this.board.setX(540);
				this.board.setY(this.rndInt);
				this.board.flipX = false;
				this.basket1.setX(500);
				this.basket1.y = this.board.y + 80;
				this.basket1.flipX = false;
				this.rod3.setX(405);
				this.rod3.y = this.board.y + 46;
				this.line.setX(355);
				this.line.y = this.board.y + 46;
				this.b1.setX(490);
				this.b1.y = this.board.y + 46;

				this.tweenes = this.tweens.add({
					targets: this.basket1,
					duration: 1000,
					x: 410,
					ease: 'Linear',
					repeat: 0,
				})
				this.tweenes = this.tweens.add({
					targets: this.b1,
					duration: 1000,
					x: 400,
					ease: 'Linear',
					repeat: 0,
				})
				this.tweenes = this.tweens.add({
					targets: this.board,
					delay: 20,
					x: 470,
					ease: 'Linear',
					repeat: 0,
				})

			}, 800)
		}

         

	}
	// 	sack1() {
	// 		this.tweens.add({

	// 			targets: this.basket1,
	// 			props: {

	// 				y: { value: this.basket1.y +5 , ease: 'Power1' },

	// 			},


	// 		})
	// 		console.log(" basket 1",this.basket1.y);
	// 		this.tweens.add({
	// 			targets: this.b1,
	// 			props: {
	// 				y: { value: this.b1.y +5 , ease: 'Power1'},
	// 			},


	// 		})
	// 	console.log(" b 1",this.b1.y);
	//  }
	// ball jump right
	ballposrig() {
		if (this.ball1.x < 20) {
			this.ball1.setX(500);

		}
	}
	//ball jump left

	ballposleft() {
		//  console.log(" width :: " + screen.width)
		//  console.log(" hight :: " + screen.height)
		if (this.ball1.x > 500) {
			this.ball1.setX(20);
		}

	}

	ballrotation() {
		this.ball1.rotation += 0.120;
		this.ball1.rotation += 0.080;
		this.ball1.rotation -= 0.050;
		this.ball1.rotation -= 0.050;
		
		
	}
	update() {
		if (!this.rotation == true) {
			this.ballrotation();
		}

		this.ballposrig();
		this.ballposleft();
	}
}
