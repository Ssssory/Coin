// эти константы доступны из любого месть приложения
const param = {
    maxSpeed: 270,
    minSpeed: 50,
    personSpeed: 9,
    soundConfig: {
        mute: false,
        volume: 0.05,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: false,
        delay: 0,
    },
};
let locale = '';
if (ysdk) {
    locale = ysdk.environment.i18n.lang
}else{
    locale = 'en'
}

let state = new GameState();

// базовая конфигурация
const config = {
    width: 1000,
    height: 800,
    backgroundColor: "#888",
    physics: {
        default: "arcade",
    },
    scene: [Loader, Coin, MainMenu, GameOver, Settings, Top],
};

// инстанс приложения
let game = new Phaser.Game(config);
