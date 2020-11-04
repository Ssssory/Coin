class Coin extends Phaser.Scene {
    constructor() {
        super("play coin");
    }
    /**
     * жизненный цикл
     */
    create() {
        // создаём фон
        this.background = this.add.image(0, 0, "background");
        this.background.setOrigin(0, 0);
        this.background = this.add.image(0, 0, "bushes");
        this.background.setOrigin(0, 0);
        this.background.scale = 0.5;

        this.bzz = this.sound.add("bzz", param.soundConfig);

        // переменные сцены
        this.count = 0;
        this.round = 1;

        // надпись с очками
        this.coinCount = this.add.text(30, 10, `Score: ${state.score}`, {
            fontFamily: '"Sansita Swashed", cursive',
            fontSize: 20,
            color: "#555687",
        });

        // анимации
        let coin_anim_config = {
            key: "rotate_coin_bronze1",
            frames: [
                { key: "coin" },
                { key: "coin2" },
                { key: "coin3" },
                { key: "coin4" },
                { key: "coin5" },
                { key: "coin6" },
            ],
            frameRate: 12,
            repeat: -1,
        };

        this.anims.create(coin_anim_config);

        coin_anim_config.key = "rotate_coin_bronze2";
        coin_anim_config.frameRate = 6;

        this.anims.create(coin_anim_config);

        // bonus
        let silver_coin_anim_config = {
            key: "rotate_coin_silver",
            frames: [
                { key: "silver_coin" },
                { key: "silver_coin2" },
                { key: "silver_coin3" },
                { key: "silver_coin4" },
                { key: "silver_coin5" },
                { key: "silver_coin6" },
            ],
            frameRate: 12,
            repeat: -1,
        };
        this.anims.create(silver_coin_anim_config);

        this.anims.create({
            key: "rotate_coin_gold",
            frames: [{ key: "gold" }, { key: "bubble" }, { key: "gold" }],
            repeat: 1,
            hideOnComplete: true,
        });

        // ивенты
        this.input.on("gameobjectdown", this.destroyCoin, this);

        // старт сцены наполнение
        this.createBronzeCoin();
    }

    /**
     * жизненный цикл
     */
    update() {
        for (let index = 0; index < this.children.length; index++) {
            const element = this.children.list[index];
            element.update();
        }
    }

    /**
     *
     * @param {*} count
     * созние произвольного количества монет
     */
    createBronzeCoin(count = 1) {
        for (let index = 0; index < count; index++) {
            new BronzeCoin(this);
        }
    }

    /**
     *
     * @param {*} pointer
     * @param {*} obj
     * замыкание для ивента. Логика работы с монетой зашита в классе
     * метод только считает очки и создаёт новый уровень сложности
     */
    destroyCoin(pointer, obj) {
        state.addCoin(obj.getFresh());
        obj.destroyCoin();
        this.coinCount.setText(`Score: ${state.score}`);

        // 4 элемента без учёта спрайта монеты
        if (this.children.length == 4) {
            state.newLevel();
            if (this.getRandomBonus()) {
                new SilverCoin(this);
            }
            this.createBronzeCoin(state.level);
        }
    }

    /**
     * Универсальные для сцены методы.
     * Возвращают случайную позицию и случайную скорость
     */
    getRandomXPosition() {
        return Phaser.Math.Between(20, this.game.config.width - 20);
    }

    getRandomSpeed() {
        return Phaser.Math.Between(param.minSpeed, param.maxSpeed);
    }

    getRandomBonus() {
        const flag = Phaser.Math.Between(1, 10);
        if (flag == 5) {
            return true;
        }
        return false;
    }
}
