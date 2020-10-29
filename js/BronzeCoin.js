class BronzeCoin extends Phaser.GameObjects.Sprite {
    /**
     *
     * @param {*} scene
     * Монета каждый раз создаётся в случайном месте по оси x и
     * фиксированно по оси y.
     * Скорость устанавливается согласно методу сцены
     * Физика нужна для удобного управления скоростью
     *
     */
    constructor(scene) {
        let x = scene.getRandomXPosition();
        let y = 5;
        // родительский конструктор
        super(scene, x, y, "coin");

        // добавляем монету в лист сцены
        scene.add.existing(this);
        // запускаем анимацию
        this.play(this.setAnimation());
        // вкдючаем физику, для управления скоростью
        scene.physics.world.enableBody(this);
        // устанавливаем скорость
        this.body.velocity.y = scene.getRandomSpeed();
        // активируем реакцию на клик мышью
        this.setInteractive();
    }

    /**
     * жизненный цикл
     */
    update() {
        // если монета улетает за пределы высоты экрана, то игра заканчивается
        if (this.y > this.scene.game.config.height + 10) {
            // передаём итоговый показатель очков на финальный экран
            this.scene.scene.start("Game Over", { count: this.scene.count });
        }
    }

    /**
     * Все монеты должны иметь своё положение, скорость падения и скорость анимации
     * Здесь мы задаём скорость анимации. Сами анимации задаются в сцене.
     */
    setAnimation() {
        let type = Phaser.Math.Between(1, 2);
        if (type == 1) {
            return "rotate_coin_bronze1";
        } else if (type == 2) {
            return "rotate_coin_bronze2";
        }
        return "rotate_coin_bronze1";
    }

    /**
     * при попадании, монета становится золотой и пропадает
     */
    destroyCoin() {
        // выключаем обработку нажатий мышкой
        this.removeInteractive();
        // включаем анимацию золотой монеты
        this.play("rotate_coin_gold");

        this.scene.bzz.play();
        // прежде, чем мы удалим монету, необходимо проиграть анимацию
        this.once("animationcomplete", () => {
            this.destroy();
        });
    }
}
