class GameOver extends Phaser.Scene {
    constructor() {
        super("Game Over");
    }

    /**
     * Ловим параметр количества очков, для отображения в конце игры
     * @param {*} data
     */
    init(data) {
        if (data) {
            this.count = data.count;
        }
    }

    create() {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        this.background.alpha = 12;
        this.add
            .text(
                this.game.config.width / 2,
                this.game.config.height / 2 - 250,
                "Game Over",
                {
                    fontFamily: '"Sansita Swashed", cursive',
                    fontSize: 60,
                }
            )
            .setOrigin(0.5, 0.5);
        if (this.count) {
            this.add
                .text(
                    this.game.config.width / 2,
                    this.game.config.height / 2 - 150,
                    "Total: " + this.count,
                    {
                        fontFamily: '"Sansita Swashed", cursive',
                        fontSize: 20,
                    }
                )
                .setOrigin(0.5, 0.5);

            this.add
                .text(
                    this.game.config.width / 2,
                    320,
                    "Enter username to save results",
                    {
                        fontFamily: '"Sansita Swashed", cursive',
                        fontSize: 20,
                    }
                )
                .setOrigin(0.5, 0.5);

            this.inputBorder = this.add.sprite(
                this.game.config.width / 2,
                400,
                "input"
            );
            this.inputBorder.setOrigin(0.5, 0.5);
            this.inputBorder.setScale(0.3, 0.18);
            console.log(this.inputBorder);
            let text = this.add.text(
                this.game.config.width / 2 - this.inputBorder.displayWidth / 4,
                390,
                ""
            );

            let inp = new Input(text);

            this.input.keyboard.on("keydown", (e) => {
                inp.keyListener(e);
            });

            let save = this.add.image(
                this.game.config.width / 2,
                500,
                "button"
            );
            this.add
                .text(this.game.config.width / 2, 500, "Save", {
                    fontFamily: '"Sansita Swashed", cursive',
                    fontSize: 20,
                })
                .setOrigin(0.6, 0.6);
            save.setInteractive();
            save.setScale(0.5, 0.5);
            save.on("pointerdown", () => {
                let result = state.saveResult({
                    name: inp.text.text,
                    score: state.score,
                    level: state.level,
                    count: state.coin,
                });
                // if (result == true) {
                state.restart();
                this.scene.start("top");
                // }
                //
            });
        }

        let rest = this.add.image(this.game.config.width / 2, 620, "button");
        this.add
            .text(this.game.config.width / 2, 620, "Main menu", {
                fontFamily: '"Sansita Swashed", cursive',
                fontSize: 26,
            })
            .setOrigin(0.5, 0.5);
        rest.setInteractive();
        rest.on("pointerdown", () => {
            state.restart();
            this.scene.start("Main Menu");
        });
    }
}
