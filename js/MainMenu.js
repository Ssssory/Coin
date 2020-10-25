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

        let buttons = {
            start: this.createButton(
                this.game.config.height / 2,
                "start",
                () => {
                    // запускаем основную сцену
                    this.scene.start("play coin");
                }
            ),
            // option: this.createButton(350, "option", () => {
            //     console.log("set options");
            // }),
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
