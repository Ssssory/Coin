class MainMenu extends Phaser.Scene {
    constructor() {
        super("Main Menu");
    }
    /**
     * TODO: отрефакторить
     * жизненный цикл
     */
    create() {
        // добавляем фон
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);

        this.add
            .text(this.game.config.width / 2, 50, "Coins", {
                fontFamily: '"Sansita Swashed", cursive',
                fontSize: 50,
            })
            .setOrigin(0.5, 0.5);

        this.add
            .text(
                this.game.config.width / 2,
                750,
                "Click on coins as soon as possible. Each round is more expensive, but speed has a price, as does time.",
                {
                    fontFamily: '"Sansita Swashed", cursive',
                    fontSize: 20,
                }
            )
            .setOrigin(0.5, 0.5);

        let buttons = {
            start: this.createButton(
                // this.game.config.height / 2,
                200,
                "start",
                () => {
                    // запускаем основную сцену
                    this.scene.start("play coin");
                }
            ),
            option: this.createButton(400, "option", () => {
                this.scene.start("settings");
            }),
            option: this.createButton(600, "top", () => {
                this.scene.start("top");
            }),
            // end: this.createButton(550, "end", () => {
            //     this.scene.start("Game Over");
            // }),
        };

        this.buttons = buttons;
    }

    /**
     * TODO: отрефакторить
     * @param {*} y
     * @param {*} string
     * @param {*} callback
     * кнопки отцентрованы, задаём только их вертикальное положение
     */
    createButton(y, string, callback) {
        // создаём спрайт
        let button = this.add.image(this.game.config.width / 2, y, "button");
        // включаем реакцию на клик мышькой
        button.setInteractive();
        // если замыкание не описано, то выводим в консоль название кнопки
        if (callback) {
            button.on("pointerdown", callback);
        } else {
            button.on("pointerdown", () => {
                console.log(string);
            });
        }

        // добавляем на кнопку текст
        let text = this.add.text(button.x, button.y, string, {
            fontFamily: '"Sansita Swashed", cursive',
            fontSize: 26,
        });
        // перносим пивод из угла в центр надписи
        text.setOrigin(0.5, 0.5);

        return button;
    }
}
