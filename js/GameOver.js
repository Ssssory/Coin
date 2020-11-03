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
                this.game.config.height / 2 - 100,
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
                    this.game.config.height / 2,
                    "Total: " + this.count,
                    {
                        fontFamily: '"Sansita Swashed", cursive',
                        fontSize: 20,
                    }
                )
                .setOrigin(0.5, 0.5);
        }

        this.add.image(this.game.config.width / 2, 600, "button");
        let rest = this.add
            .text(this.game.config.width / 2, 600, "Restart", {
                fontFamily: '"Sansita Swashed", cursive',
                fontSize: 26,
            })
            .setOrigin(0.5, 0.5);
        rest.setInteractive();
        rest.on("pointerdown", () => {
            this.scene.start("play coin");
        });
    }
}
