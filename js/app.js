// эти константы доступны из любого месть приложения
const param = {
    maxSpeed: 300,
    minSpeed: 50,
    personSpeed: 9,
};

// базовая конфигурация
const config = {
    width: 1000,
    height: 800,
    backgroundColor: "#888",
    physics: {
        default: "arcade",
    },
    scene: [Loader, Coin, MainMenu, GameOver],
};

// инстанс приложения
let game = new Phaser.Game(config);
