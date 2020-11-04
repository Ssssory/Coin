class SilverCoin extends BronzeCoin {
    constructor(scene) {
        super(scene);
        this.fresh = 20;
    }

    setAnimation() {
        return "rotate_coin_silver";
    }

    update() {
        if (this.y > this.scene.game.config.height + 10) {
            this.destroy();
        }
    }
}
