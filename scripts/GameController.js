var questionNumber = 0;
var score = 0;
var cur;
let questions = []
$(document).ready(function(){
    questions = [
        //Q1
        new Question(
            "assets\\questionResponses\\Q1A1",
            "assets\\questionResponses\\Q1A2",
            "assets\\questionResponses\\Q1A3",
            "assets\\questionResponses\\Q1A4",
            -1,
        ),
        //Q2
        new Question(
            "assets\\questionResponses\\Q2A1",
            "assets\\questionResponses\\Q2A2",
            "assets\\questionResponses\\Q2A3",
            "assets\\questionResponses\\Q2A4",
            -1,
        ),
        //Q3
        new Question(
            "assets\\questionResponses\\Q3A1",
            "assets\\questionResponses\\Q3A2",
            "assets\\questionResponses\\Q3A3",
            "assets\\questionResponses\\Q3A4",
            -1,
        ),
        //Q4
        new Question(
            "assets\\questionResponses\\Q4A1",
            "assets\\questionResponses\\Q4A2",
            "assets\\questionResponses\\Q4A3",
            "assets\\questionResponses\\Q4A4",
            -1,
        ),
        //Q5
        new Question(
            "assets\\questionResponses\\Q5A1",
            "assets\\questionResponses\\Q5A2",
            "assets\\questionResponses\\Q5A3",
            "assets\\questionResponses\\Q5A4",
            -1,
        ),
        //Q6
        new Question(
            "assets\\questionResponses\\Q6A1",
            "assets\\questionResponses\\Q6A2",
            "assets\\questionResponses\\Q6A3",
            "assets\\questionResponses\\Q6A4",
            -1,
        ),
        //Q7
        new Question(
            "assets\\questionResponses\\Q7A1",
            "assets\\questionResponses\\Q7A2",
            "assets\\questionResponses\\Q7A3",
            "assets\\questionResponses\\Q7A4",
            -1,
        ),
        //Q8
        new Question(
            "assets\\questionResponses\\Q8A1",
            "assets\\questionResponses\\Q8A2",
            "assets\\questionResponses\\Q8A3",
            "assets\\questionResponses\\Q8A4",
            -1,
        ),
        //Q9
        new Question(
            "assets\\questionResponses\\Q9A1",
            "assets\\questionResponses\\Q9A2",
            "assets\\questionResponses\\Q9A3",
            "assets\\questionResponses\\Q9A4",
            -1,
        ),
        //Q10
        new Question(
            "assets\\questionResponses\\Q10A1",
            "assets\\questionResponses\\Q10A2",
            "assets\\questionResponses\\Q10A3",
            "assets\\questionResponses\\Q10A4",
            -1,
        ),
        //Q11
        new Question(
            "assets\\questionResponses\\Q11A1",
            "assets\\questionResponses\\Q11A2",
            "assets\\questionResponses\\Q11A3",
            "assets\\questionResponses\\Q11A4",
            -1,
        ),
        //Q12
        new Question(
            "assets\\questionResponses\\Q12A1",
            "assets\\questionResponses\\Q12A2",
            "assets\\questionResponses\\Q12A3",
            "assets\\questionResponses\\Q12A4",
            -1,
        ),
        //Q13
        new Question(
            "assets\\questionResponses\\Q13A1",
            "assets\\questionResponses\\Q13A2",
            "assets\\questionResponses\\Q13A3",
            "assets\\questionResponses\\Q13A4",
            -1,
        ),
        //Q14
        new Question(
            "assets\\questionResponses\\Q14A1",
            "assets\\questionResponses\\Q14A2",
            "assets\\questionResponses\\Q14A3",
            "assets\\questionResponses\\Q14A4",
            -1,
        ),
        //Q15
        new Question(
            "assets\\questionResponses\\Q15A1",
            "assets\\questionResponses\\Q15A2",
            "assets\\questionResponses\\Q15A3",
            "assets\\questionResponses\\Q15A4",
            -1,
        ),
        //Q16
        new Question(
            "assets\\questionResponses\\Q16A1",
            "assets\\questionResponses\\Q16A2",
            "assets\\questionResponses\\Q16A3",
            "assets\\questionResponses\\Q16A4",
            -1,
        ),
        //Q17
        new Question(
            "assets\\questionResponses\\Q17A1",
            "assets\\questionResponses\\Q17A2",
            "assets\\questionResponses\\Q17A3",
            "assets\\questionResponses\\Q17A4",
            -1,
        ),
        //Q18
        new Question(
            "assets\\questionResponses\\Q18A1",
            "assets\\questionResponses\\Q18A2",
            "assets\\questionResponses\\Q18A3",
            "assets\\questionResponses\\Q18A4",
            -1,
        ),
        //Q19
        new Question(
            "assets\\questionResponses\\Q19A1",
            "assets\\questionResponses\\Q19A2",
            "assets\\questionResponses\\Q19A3",
            "assets\\questionResponses\\Q19A4",
            -1,
        ),
        //Q20
        new Question(
            "assets\\questionResponses\\Q20A1",
            "assets\\questionResponses\\Q20A2",
            "assets\\questionResponses\\Q20A3",
            "assets\\questionResponses\\Q20A4",
            -1,
        ),
    ]

    shuffle(questions);

    cur = questions[questionNumber];

    //display question 0
    $("#a1").attr("src", cur.a1);
    $("#a2").attr("src", cur.a2);
    $("#a3").attr("src", cur.a3);
    $("#a4").attr("src", cur.a4);

    //take input
    $("#a1").click(submit(1));
    $("#a2").click(submit(2));
    $("#a3").click(submit(3));
    $("#a4").click(submit(4));
});

//Fisher-Yates shuffle 
function shuffle(questions){
    for(i = 0; i < questions.length; i++){
        var j = random(i, questions.length);
        var temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function submit(ans){
    //correct
    if(cur.answer(ans)){
        //green animation
        score++;
    }
    //incorrect
    else{
        //red animation
    }

    questionNumber++;

    if(questionNumber < 10){
        cur = questions[questionNumber];

        $("#a1").attr("src", cur.a1);
        $("#a2").attr("src", cur.a2);
        $("#a3").attr("src", cur.a3);
        $("#a4").attr("src", cur.a4);
    }
    else{
        //finish
    }
}