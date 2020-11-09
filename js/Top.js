class Top extends Phaser.Scene {
    constructor() {
        super("top");
    }
    create() {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);

        this.add.text(this.game.config.width / 2, 30, "Top", {
            fontFamily: '"Sansita Swashed", cursive',
            fontSize: 40,
        });

        this.add.image(this.game.config.width / 2, 700, "button");
        let rest = this.add
            .text(this.game.config.width / 2, 700, "Back", {
                fontFamily: '"Sansita Swashed", cursive',
                fontSize: 26,
            })
            .setOrigin(0.5, 0.5);
        rest.setInteractive();
        rest.on("pointerdown", () => {
            state.restart();
            this.scene.start("Main Menu");
        });

        this.drawTable();
    }

    async drawTable() {
        let results = await state.getTop();

        for (let i = 0; i < 10; i++) {
            // console.log(results);
            if (results.length <= i) {
                this.raw(
                    150,
                    this.getYPosition(i),
                    " - ",
                    650,
                    this.getYPosition(i),
                    0
                );
            } else {
                this.raw(
                    150,
                    this.getYPosition(i),
                    results[i].name,
                    650,
                    this.getYPosition(i),
                    results[i].score
                );
            }
        }
    }

    getYPosition(i) {
        const startPos = 80;
        const step = 50;
        return startPos + i * step;
    }

    raw(x, y, name, x2, y2, score) {
        this.add.text(x, y, name, {
            fontFamily: '"Sansita Swashed", cursive',
            fontSize: 26,
        });
        this.add.text(x2, y2, score, {
            fontFamily: '"Sansita Swashed", cursive',
            fontSize: 26,
        });
    }
}
