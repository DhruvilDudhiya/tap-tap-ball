
// You can write more code here

/* START OF COMPILED CODE */

class First extends Phaser.Scene {

	constructor() {
		super("First");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg_image
		const bg_image = this.add.image(250, 337, "bg_image");
		bg_image.scaleX = 0.16;
		bg_image.scaleY = 0.15;

		// logo1
		const logo1 = this.add.image(250, 102, "logo1");

		// logo2
		const logo2 = this.add.image(333, 194, "logo2");

		// play_ui
		const play_ui = this.add.image(256, 507, "Play_ui");
		play_ui.scaleX = 0.2;
		play_ui.scaleY = 0.2;

		// playfont
		const playfont = this.add.image(250, 508, "Playfont");
		playfont.scaleX = 0.1916425271946162;
		playfont.scaleY = 0.1681752147029622;

		this.bg_image = bg_image;
		this.logo1 = logo1;
		this.logo2 = logo2;
		this.play_ui = play_ui;
		this.playfont = playfont;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	bg_image;
	/** @type {Phaser.GameObjects.Image} */
	logo1;
	/** @type {Phaser.GameObjects.Image} */
	logo2;
	/** @type {Phaser.GameObjects.Image} */
	play_ui;
	/** @type {Phaser.GameObjects.Image} */
	playfont;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
        this.playfont.setInteractive().on('pointerdown',function(pointer){
          console.log("hover");
        //   this.play_button.setTint()
         this.scene.start("Level");


},this)

// this.play.on('pointerout',function(pointer){

// })

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
