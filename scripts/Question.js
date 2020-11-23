class Question {
    constructor(a1, a2, a3, a4, correctAnswer) {
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.a4 = a4;
        this.correctAnswer = correctAnswer;
    }

    answer(ans){
        return ans == this.correctAnswer;
    }
}