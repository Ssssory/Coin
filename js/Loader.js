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

        this.load.image("gold", "./img/gold_1.png");
        this.load.image("bubble", "./img/bubble.png");

        this.load.image("button", "./img/Button1.png");

        this.load.audio("bzz", ["./audio/bzz.ogg"]);
    }

    /**
     * Управление приложением осуществляется через меню
     */
    create() {
        this.scene.start("Main Menu");
    }
}
