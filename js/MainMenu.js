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

        let bzz = this.sound.add("bzz", param.soundConfig);
        this.bzz = bzz;

        let bar = this.add.image(this.game.config.width / 2, 600, "load_bar");
        bar.setScale(0.3, 0.1);

        // let slider = this.add.image(350, 600, "loading");
        // slider.setScale(0.01, 0.3);
        let slider = this.add.image(350, 600, "button");
        slider.setScale(0.2, 0.3);

        slider
            .setInteractive({ draggable: true })
            .on("dragstart", function (pointer, dragX, dragY) {
                // ...
            })
            .on("drag", (pointer, dragX, dragY) => {
                // this.setPosition(dragX, dragY);
                if (slider.x > 346 && slider.x < 654) {
                    slider.x = dragX;
                }

                // console.log(this);
            })
            .on("dragend", function (pointer, dragX, dragY, dropped) {
                // ...
                if (slider.x < 350) {
                    slider.x = 358;
                }
                if (slider.x > 650) {
                    slider.x = 644;
                }
                bzz.play();
            });

        let mute = this.add.image(270, 600, "mute");
        mute.setScale(0.5);
        mute.setInteractive();
        let sound = this.add.image(730, 600, "sound");
        sound.setScale(0.5);
        // sound.visible = false;

        mute.on("pointerdown", () => {
            this.toggleMute();
        });

        this.buttons = buttons;
    }

    toggleMute() {
        param.soundConfig.mute = !param.soundConfig.mute;
        this.bzz.mute = !this.bzz.mute;
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
