class GameState {
    constructor() {
        // Если есть база данных, то параметр ставится в истину
        this.top = false;
        //
        // let type = {
        //     'adventure': 1,
        //     'survivle': 1,
        // }
        this.type = "adventure";
        this.level = 1;
        this.coin = 0;
        this.score = 0;
    }

    addCoin(fresh) {
        this.coin++;
        this.sumScore(fresh);
    }

    newLevel() {
        this.level++;
    }

    sumScore(fresh) {
        let multiple = this.level * fresh;
        this.score += multiple;
    }

    restart() {
        this.level = 1;
        this.coin = 0;
        this.score = 0;
    }
}
