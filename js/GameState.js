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

    addCoin() {
        this.coin++;
        this.sumScore();
    }

    newLevel() {
        this.level++;
    }

    sumScore() {
        let multiple = this.level * 10;
        this.score += multiple;
    }
}
