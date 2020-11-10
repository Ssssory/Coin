class Input {
    constructor(text) {
        this.text = text;
    }

    keyListener(key) {
        // console.log(key.key);
        let char = key.key;
        if (char == "Backspace") {
            this.backspace();
            return;
        }

        if (this.approveKeys(char) !== -1) {
            this.append(char);
        }
    }

    backspace() {
        this.text.setText(this.text.text.slice(0, -1));
    }

    append(char) {
        // длинна имени пользователя
        if (this.text.text.length > 20) {
            return;
        }

        let text = this.text.text;
        text += char;
        this.text.setText(text);
    }

    approveKeys(k) {
        const appruve = [
            "q",
            "w",
            "e",
            "r",
            "t",
            "y",
            "u",
            "i",
            "o",
            "p",
            "a",
            "s",
            "d",
            "f",
            "g",
            "h",
            "j",
            "k",
            "l",
            "z",
            "x",
            "c",
            "v",
            "b",
            "n",
            "m",
            "Q",
            "W",
            "E",
            "R",
            "T",
            "Y",
            "U",
            "I",
            "O",
            "P",
            "A",
            "S",
            "D",
            "F",
            "G",
            "H",
            "J",
            "K",
            "L",
            "Z",
            "X",
            "C",
            "V",
            "B",
            "N",
            "M",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "0",
            " ",
        ];
        return appruve.indexOf(k);
    }
}
