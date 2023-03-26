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

    // db

    getTop() {
        return [
            {
                name: "Johan",
                score: 5000,
            },
            {
                name: "Sam",
                score: 4000,
            },
            {
                name: "Mike",
                score: 1200,
            },
        ];
    }

    async saveResult(person) {
        try {
            let data = new FormData();
            data.append("route", "new");
            data.append("name", person.name);
            data.append("score", person.score);
            data.append("level", person.level);
            data.append("count", person.count);
            return await fetch("/php/", {
                method: "POST",
                body: data,
            })
                .then((response) => response.json())
                .then((res) => {
                    console.log(res);
                    return res;
                });
        } catch (error) {
            console.log(error);
        }
    }
}
