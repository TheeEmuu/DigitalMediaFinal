var jquery = document.createElement('script');
jquery.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
jquery.type = 'text/javascript';
var questions = document.createElement('script');
questions.src = './Questions.js';
questions.type = 'text/javascript';

document.getElementsByTagName('head')[0].appendChild(jquery);
document.getElementsByTagName('head')[0].appendChild(questions);

var questionNumber = 0;
var score = 0;
var cur;
$(document).ready(function(){
    let questions = [
        //Q1
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q2
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q3
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q4
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q5
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q6
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q7
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q8
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q9
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q10
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q11
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q12
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q13
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q14
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q15
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q16
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q17
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q18
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q19
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
            -1,
        ),
        //Q20
        new Question(
            "a1",
            "a2",
            "a3",
            "a4",
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