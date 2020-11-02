class Settings extends Phaser.Scene {
    constructor() {
        super("settings");
    }

    create() {
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);

        this.createButton(550, "back", () => {
            this.scene.start("Main Menu");
        });

        let bzz = this.sound.add("bzz", param.soundConfig);
        this.bzz = bzz;

        let text = this.add.text(this.game.config.width / 2, 100, "Volume", {
            fontFamily: '"Sansita Swashed", cursive',
            fontSize: 52,
        });
        // перносим пивод из угла в центр надписи
        text.setOrigin(0.5, 0.5);

        let bar = this.add.image(this.game.config.width / 2, 300, "load_bar");
        bar.setScale(0.3, 0.1);

        // let slider = this.add.image(350, 300, "loading");
        // slider.setScale(0.01, 0.3);
        let slider = this.add.image(536, 300, "button");
        slider.setScale(0.2, 0.3);

        slider
            .setInteractive({ draggable: true })
            .on("dragstart", (pointer, dragX, dragY) => {
                // ...
            })
            .on("drag", (pointer, dragX, dragY) => {
                // this.setPosition(dragX, dragY);
                if (slider.x > 346 && slider.x < 654) {
                    slider.x = dragX;
                }

                // console.log(this);
            })
            .on("dragend", (pointer, dragX, dragY, dropped) => {
                // ...
                if (slider.x < 350) {
                    slider.x = 358;
                }
                if (slider.x > 650) {
                    slider.x = 644;
                }
                this.volumeControle(slider.x);
                bzz.play();
            });

        let mute = this.add.image(270, 300, "mute");
        mute.setScale(0.5);
        mute.setInteractive();
        mute.visible = false;
        let sound = this.add.image(270, 300, "sound");
        sound.setScale(0.5);
        sound.setInteractive();

        mute.on("pointerdown", () => {
            this.toggleMute();
            mute.visible = !mute.visible;
            sound.visible = !sound.visible;
        });

        sound.on("pointerdown", () => {
            this.toggleMute();
            mute.visible = !mute.visible;
            sound.visible = !sound.visible;
        });
    }

    toggleMute() {
        param.soundConfig.mute = !param.soundConfig.mute;
        this.bzz.mute = !this.bzz.mute;
    }

    volumeControle(x) {
        const start = 346;
        const end = 650;
        const range = end - start;
        const position = x - start;
        const persent = (position / range) * 100;
        const min = 0;
        const max = 0.4;
        const presentVolume = (max / 100) * persent;
        // console.log(
        //     range,
        //     position,
        //     Math.round(persent),
        //     parseFloat(presentVolume.toFixed(2))
        // );
        param.soundConfig.volume = parseFloat(presentVolume.toFixed(2));
        this.bzz.volume = parseFloat(presentVolume.toFixed(2));
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
