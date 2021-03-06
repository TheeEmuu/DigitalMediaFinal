var questionNumber = 0;
var score = 0;
var cur;
let questions = []
$(document).ready(function(){
    questions = [
        //Q1
        new Question(
            "assets\\questionResponses\\Q1A1.jpg",
            "assets\\questionResponses\\Q1A2.png",
            "assets\\questionResponses\\Q1A3.jpg",
            "assets\\questionResponses\\Q1A4.jpg",
            2,
        ),
        //Q2
        new Question(
            "assets\\questionResponses\\Q2A1.jpg",
            "assets\\questionResponses\\Q2A2.jpg",
            "assets\\questionResponses\\Q2A3.jpg",
            "assets\\questionResponses\\Q2A4.jpg",
            4,
        ),
        //Q3
        new Question(
            "assets\\questionResponses\\Q3A1.jpeg",
            "assets\\questionResponses\\Q3A2.jpg",
            "assets\\questionResponses\\Q3A3.jpg",
            "assets\\questionResponses\\Q3A4.jpg",
            1,
        ),
        //Q4
        new Question(
            "assets\\questionResponses\\Q4A1.jpg",
            "assets\\questionResponses\\Q4A2.jpg",
            "assets\\questionResponses\\Q4A3.jpg",
            "assets\\questionResponses\\Q4A4.jpg",
            4,
        ),
        //Q5
        new Question(
            "assets\\questionResponses\\Q5A1.jpg",
            "assets\\questionResponses\\Q5A2.jpg",
            "assets\\questionResponses\\Q5A3.jpg",
            "assets\\questionResponses\\Q5A4.jpg",
            1,
        ),
        //Q6
        new Question(
            "assets\\questionResponses\\Q6A1.png",
            "assets\\questionResponses\\Q6A2.jpg",
            "assets\\questionResponses\\Q6A3.jpg",
            "assets\\questionResponses\\Q6A4.jpg",
            4,
        ),
        //Q7
        new Question(
            "assets\\questionResponses\\Q7A1.png",
            "assets\\questionResponses\\Q7A2.png",
            "assets\\questionResponses\\Q7A3.jpg",
            "assets\\questionResponses\\Q7A4.png",
            1,
        ),
        //Q8
        new Question(
            "assets\\questionResponses\\Q8A1.jpg",
            "assets\\questionResponses\\Q8A2.jpg",
            "assets\\questionResponses\\Q8A3.jpg",
            "assets\\questionResponses\\Q8A4.jpg",
            4,
        ),
        //Q9
        new Question(
            "assets\\questionResponses\\Q9A1.png",
            "assets\\questionResponses\\Q9A2.jpg",
            "assets\\questionResponses\\Q9A3.png",
            "assets\\questionResponses\\Q9A4.png",
            4,
        ),
        //Q10
        new Question(
            "assets\\questionResponses\\Q10A1.jpg",
            "assets\\questionResponses\\Q10A2.jpg",
            "assets\\questionResponses\\Q10A3.jpg",
            "assets\\questionResponses\\Q10A4.jpg",
            2,
        ),
        //Q11
        new Question(
            "assets\\questionResponses\\Q11A1.jpg",
            "assets\\questionResponses\\Q11A2.jpg",
            "assets\\questionResponses\\Q11A3.jpg",
            "assets\\questionResponses\\Q11A4.jpg",
            4,
        ),
        //Q12
        new Question(
            "assets\\questionResponses\\Q12A1.png",
            "assets\\questionResponses\\Q12A2.jpg",
            "assets\\questionResponses\\Q12A3.png",
            "assets\\questionResponses\\Q12A4.jpg",
            2,
        ),
        //Q13
        new Question(
            "assets\\questionResponses\\Q13A1.jpg",
            "assets\\questionResponses\\Q13A2.jpg",
            "assets\\questionResponses\\Q13A3.jpg",
            "assets\\questionResponses\\Q13A4.jpg",
            3,
        ),
        //Q14
        new Question(
            "assets\\questionResponses\\Q14A1.jpg",
            "assets\\questionResponses\\Q14A2.png",
            "assets\\questionResponses\\Q14A3.jpg",
            "assets\\questionResponses\\Q14A4.jpg",
            3,
        ),
        //Q15
        new Question(
            "assets\\questionResponses\\Q15A1.jpg",
            "assets\\questionResponses\\Q15A2.jpg",
            "assets\\questionResponses\\Q15A3.jpg",
            "assets\\questionResponses\\Q15A4.jpg",
            3,
        ),
        //Q16
        new Question(
            "assets\\questionResponses\\Q16A1.jpg",
            "assets\\questionResponses\\Q16A2.jpg",
            "assets\\questionResponses\\Q16A3.jpg",
            "assets\\questionResponses\\Q16A4.jpg",
            1,
        ),
        //Q17
        new Question(
            "assets\\questionResponses\\Q17A1.jpg",
            "assets\\questionResponses\\Q17A2.jpeg",
            "assets\\questionResponses\\Q17A3.jpg",
            "assets\\questionResponses\\Q17A4.png",
            3,
        ),
        //Q18
        new Question(
            "assets\\questionResponses\\Q18A1.png",
            "assets\\questionResponses\\Q18A2.png",
            "assets\\questionResponses\\Q18A3.png",
            "assets\\questionResponses\\Q18A4.png",
            1,
        ),
        //Q19
        new Question(
            "assets\\questionResponses\\Q19A1.jpg",
            "assets\\questionResponses\\Q19A2.png",
            "assets\\questionResponses\\Q19A3.jpg",
            "assets\\questionResponses\\Q19A4.jpg",
            3,
        ),
        //Q20
        new Question(
            "assets\\questionResponses\\Q20A1.jpg",
            "assets\\questionResponses\\Q20A2.jpg",
            "assets\\questionResponses\\Q20A3.jpg",
            "assets\\questionResponses\\Q20A4.jpg",
            1,
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
    document.getElementById("a1").onclick = function(){submit(1)};
    document.getElementById("a2").onclick = function(){submit(2)};
    document.getElementById("a3").onclick = function(){submit(3)};
    document.getElementById("a4").onclick = function(){submit(4)};
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
        score++;
    }
    //incorrect
    else{
        $(cur.getIncorrectAnswer(ans)).css('border-color', 'rgba(255,0,0,1)');
    }

    $(cur.getCorrectAnswer()).css('border-color', 'rgba(0,255,0,1)');

    setTimeout(() => {
        $(".answer").css('border-color', 'rgba(0,0,0,0)');
        $(".answer").fadeOut(200);

        setTimeout(() => {
            questionNumber++;

        $("#progress").html(questionNumber + "/10");

        if(questionNumber < 10){
            cur = questions[questionNumber];

            $("#a1").attr("src", cur.a1);
            $("#a2").attr("src", cur.a2);
            $("#a3").attr("src", cur.a3);
            $("#a4").attr("src", cur.a4);

            $(".answer").fadeIn(200);
        }
        else{
            $("#Q").html("Game Over!");

            var result = 
                score == 0 ? "need to get your eyes checked" : 
                score < 3  ? "should probably get your eyes checked" : 
                score < 5  ? "got less than half right" :
                score < 7  ? "did okay" :
                score < 9  ? "did pretty well" :
                score < 10 ? "did very well" :
                "did perfectly";

            $("#progress").html("You scored " + score + " out of 10, that means you " + result + "!");
        }
        }, 200)
    }, 2000);
}