'use strict'
let game = {

    questionIdx: 0,
    score: 0,

    /**
     * Запускает игру.
     */
    run() {
        // Бесконечный цикл
        while (true) {
            if(!this.checkQty()) {
                console.log(`Игра окончена, ваш счет: ${this.score} правильных ответов из ${this.questionIdx}`);
                this.questionIdx = 0;
                this.score = 0;
                return;
            }
            const answer = askQuestion.getQuestion(this.questionIdx);

            // Если игрок сказал что хочет выйти, то игра заканчивается.
            if (answer === null) {
                console.log("Игра окончена.");
                return;
            }

            answer ? this.score++ : '';
            this.questionIdx++;
        }
    },

    checkQty() {
        return questions[this.questionIdx];
    },

    // Этот метод выполняется при открытии страницы.
    init() {
        console.log("Чтобы начать игру наберите game.run() и нажмите Enter. Если захотите выйти, оставте поле ответа пустым и нажмите enter");
    },

};

game.init();
