class Loader extends Phaser.Scene {
    /**
     * Расширяем базовый класс сцены своей логикой
     */
    constructor() {
        // данная строка является именем сцены и по ней же мы запускаем сцену
        super("load game");
    }

    /**
     * Загружаем всю графику, которую будем использовать
     */
    preload() {
        this.load.image("background", "./img/bg_layer1.png");
        this.load.image("bushes", "./img/bg_layer2.png");

        this.load.image("coin", "./img/bronze_1.png");
        this.load.image("coin2", "./img/bronze_2.png");
        this.load.image("coin3", "./img/bronze_3.png");
        this.load.image("coin4", "./img/bronze_4.png");
        this.load.image("coin5", "./img/bronze_5.png");
        this.load.image("coin6", "./img/bronze_6.png");

        this.load.image("silver_coin", "./img/silver_1.png");
        this.load.image("silver_coin2", "./img/silver_2.png");
        this.load.image("silver_coin3", "./img/silver_3.png");
        this.load.image("silver_coin4", "./img/silver_4.png");
        this.load.image("silver_coin5", "./img/silver_5.png");
        this.load.image("silver_coin6", "./img/silver_6.png");

        this.load.image("gold", "./img/gold_1.png");
        this.load.image("bubble", "./img/bubble.png");

        this.load.image("button", "./img/Button1.png");
        this.load.image("load_bar", "./img/load_bar.png");
        this.load.image("loading", "./img/loading.png");
        this.load.image("mute", "./img/mute_button.png");
        this.load.image("sound", "./img/sound_button.png");

        this.load.audio("bzz", ["./audio/bzz.ogg", "./audio/bzz.mp3"]);
    }

    /**
     * Управление приложением осуществляется через меню
     */
    create() {
        this.scene.start("Main Menu");
    }
}
