let askQuestion = {

    message: '',

    getQuestion(idx) {
        const availableAnswers = ['a', 'b', 'c', 'd'];
        const { question, options, answer } = questions[idx];

        this.message += `${question}:\n`;
        options.forEach(o => this.message += `${o}\n`);

        while (true) {
           let userAnswer = prompt(`${this.message}\nВведите букву ответа или оставте поле пустым для выхода`);
           if (!userAnswer) {
               this.message = '';
               return null;
           }
           if (!availableAnswers.includes(userAnswer)) {
                continue;
           }
           this.message = '';
           return  userAnswer === answer;

        }
    }
}
