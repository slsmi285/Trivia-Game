//Advanced Trivia Game//1. Home Page
//start Game

//2. Timer - 30 seconds
//when page loads, first, the timer, questions and summary must be hidden.

//3. 8 Questions - Object/Array - 4 mulitple choice answers
//1 correct answer
//Correct Answer: Win
//Wrong Answer: Lose
//Unanswered: Lose
//Out of Time: Lose
//video image populates
//Delay 3 seconds before next question

//4. End of 8 questions:
//Score:
//Correct Answers:
//Incorrect Answers:
//Unanswered:

//5. Prompt: Do you want to play again?
//If user chooses correct answer -- correct answer is true.
//Player wins.
//Prompt displays "You Win: Correct Answer Displayed - above image or video image"

//for next random question, there is a 3 second delay before next question is displayed.

//if the player runs out of time, a prompt will be displayed "You ran out of time!  - display correct answer above picture".
// If the player chooses the wrong answer, a prompt will be displayed "Wrong Answer! - display correct answer above picture"

//There is a timer, 3 types of scores and 2 types of resets.
//timer is 30 seconds
// 3 types of scores -- final page: Correct Answers, Incorrect Answers, Unanswered.
//Final page prompts  - displays: All done! Here's how you did!
//Final page - reset - start over onlclick button
$(document).ready(function () {

    //event listeners
    $("#remaining-time").hide();
    $("#start").on("click", trivia.startGame);
    $(document).on("click", ".option", trivia.guessChecker);
})

var trivia = {
    //trvia properties
    correct: 0,
    incorrect: 0,
    unanswered: 0,
    currentSet: 0,
    time: 20,
    timerOn: false,
    timerId: "",
    // questions options and answers data
    questions: {
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q6: "",
        q7: "",
    },
    options: {
        q1: [],
        q2: [],
        q3: [],
        q4: [],
        q5: [],
        q6: [],
        q7: [],
    },
    answers: {
        q1: "",
        q2: "",
        q3: "",
        q4: "",
        q5: "",
        q6: "",
        q7: "",
    },
    //trivia methods
    //method to initialize game
    startGame: function(){
        //restarting game results
        trivia.currentSet = 0;
        trivia.correct = 0;
        trivia.incorrect = 0;
        trivia.unanswered = 0;
        clearInterval(trivia.timerId);

        //show game section
        $("#game").show();

        //empty last results
        $("#results").html("");

        //show timer
        $("#timer").text(trivia.timer);

        //remove start button
        $("#start").hide();

        $("#remaining-time").show();

        //ask first question
        trivia.nextQuestion();

    },
    //method to loop through and display questions and options
    nextQuestion: function () {
        
    }
}

    var currentQuestion;
    var correctAnswer;
    var incorrectAnswer;
    var unanswered;
    var seconds;
    var time;
    var answered;
    var userSelect;

    var messages = {
        correct: "Brilliant! Well done!",
        incorrect: "That's not the right answer." + "<br>" + "No. No. Don't Cry",
        endTime: "Time's Up!" + "<br>" + "But, better luck on the next one!",
        finished: "So, how did you do?",
    };
    //array of objects
    var triviaQuest = [
        {
            question: "In Disney's Lady and the Tramp, what dish do the two dogs share?",
            answerList: ["Falafal", "Salad", "Soup", "Spaghetti"],
            answer: 3,
            image: "assets/images/L&T.gif",
            answerText: "The setting was inspired by Walt Disney's hometown. ..."
        },
        {
            question: "Backdraft is a movie about which profession?",
            answerList: ["Strippers", "Airplane Mechanics", "Firemen", "Pig Farmers"],
            answer: 2,
            image: "assets/images/backdraft.gif",
            answerText: "Robert De Niro's Character Is Based On A Real Person. ..."
        },

        {
            question: "What is the name of Danny's gang in Grease?",
            answerList: ["The Thunderbirds", "Queen", "The Mariacha's", "The Big Kahuna's"],
            answer: 0,
            image: "assets/images/grease.gif",
            answerText: "The Olivia Newton-John insisted on having a screen test with john travolta. ...'s"
        },

        {
            question: "Who plays Hilary Swank's coach in Million Dollar Baby?",
            answerList: ["Rocky Balboa", "Chris Helmsworth", "Cher", "Clint Eastwood"],
            answer: 3,
            image: "assets/images/mdb.gif",
            answerText: "Based on a book called Rope Burns by F. X. O'Toole."

        },

        {
            question: "Which Hollywood leading man was in Spy Game, The Horse Whisperer, and All the President's Men?",
            answerList: ["Clint Eastwood", "Al Pacino", "Robert Redford", "Ben Affleck"],
            answer: 2,
            image: "assets/images/apm.gif",
            answerText: "Redford only wanted to produce it, but the studio made him star in it, too. ..."
        },

        {
            question: "What actor gets the girl in There's Something About Mary?",
            answerList: ["Ben Stiller", "Matt Damon", "David Spade", "Brad Pitt"],
            answer: 0,
            image: "assets/images/wam.gif",
            answerText: "Ben Stiller won the role of Ted Stroehmann over Owen Wilson and the future host of The Daily Show."
        },

        {
            question: "What 1975 film made people afraid to go into the water?",
            answerList: ["Baby Shark", "Hammerhead", "Jaws", "Megladon"],
            answer: 2,
            image: "assets/images/jaws.gif",
            answerText: "The shark was named “Bruce” after Spielberg's lawyer. ..."
        },

        {
            question: "Who directed Jurrasic Park?",
            answerList: ["Steven Spielberg", "George Lucas", "Henry Winkler", "Walt Disney"],
            answer: 0,
            image: "assets/images/jp.gif",
            asnwerText: "Dr. Grant: I think we're out of a job. Malcolm: Don't you mean extinct?"
        },


    ];

    //this hides the game area on the page load
    $("#gameCol").hide();

    //This captures user click on the reset button to create a new game
    $("#startBtn").on("click", function () {
        $(this).hide();
        newGame();
    });

    //this functions sets up the page for a new game emptying all areas and showing game area
    function newGame() {
        $("#gameCol").show();
        $("#finalMessage").empty();
        $("#correctAnswers").empty();
        $("#incorrectAnswers").empty();
        $("#unanswered").empty();
        $("#gif").hide();
        $("#gifCaption").hide();
        currentQuestion = 0;
        correctAnswer = 0;
        incorrectAnswer = 0;
        unanswered = 0;
        newQuestion();
    }
    //This function displays the next question
    function newQuestion() {
        $("#message").empty();
        $("#correctedAnswer").empty();
        $("#gif").hide();
        $("#gifCaption").hide();
        answered = true;
    }
    //this function displays the new question
    $("#currentQuestion").html("Question " + (currentQuestion + 1) + " of " + triviaQuest.length);
    console.log("currentQuestion line 156");
    //$(".question").html(triviaQuest[currentQuestion].question);
    //console.log("html class=question line 158");

    //this function displays the new question's answer options in multiple choice type
    for (var i = 0; i <= 5; i++) {
        var choices = $("<div>");
        //choices.text(triviaQuest[currentQuestion].answerList[i]);
        choices.attr({ "data-index": i });
        choices.addClass("thisChoice");
        $(".answerList").append(choices);
    }

    //this sets the timer
    countdown();

    //When the user clicks on an answer this will pause the time and display the correct answer to the question
    $(".thisChoice").on("click", function () {
        userSelect = $(this).data("index");
        clearInterval(time);
        answerPage();

    });




    //This function is for the timer countdown
    function countdown() {
        seconds = 15;
        $("#timeLeft").html("00: " + seconds);
        answered = true;
        //sets a delay of one second before the timer starts
        time = setInterval(showCountdown, 1000);
    }
    //This function displays the countdown
    function showCountdown() {
        seconds--;

        if (seconds < 10) {
            $("#timeLeft").html("00:0" + seconds);

        }
        else {
            $("#timeLeft").html("00:0" + seconds);
        }
        if (seconds < 1) {
            clearInterval(time);
            answered = false;
            answerPage();
        }


        //This function takes the user to the answer page after the user selects an answer or timer runs out
        function answerPage() {
            $("#currentQuestion").empty();
            $(".thisChoice").empty(); //Clears question page
            $(".question").empty();
            $("#gif").show();
            $("#gifCaption").show();
        }

            var rightAnswerText = triviaQuest[currentQuestion].answer[triviaQuest[currentQuestion].answer];
            console.log("rightAnswerText, line 219");
            var rightAnswerIndex = triviaQuest[currentQuestion].answer;
            console.log("rightAnswerIndex, line 221");

            //This adds the gif that corresponds to this question
            var gifImageLink = triviaQuest[currentQuestion].image;
            var newGif = $("<img>");
            newGif.attr("src", gifImageLink);
            newGif.addClass("gifImg");
            $("#gif").html(newGif);

            //This adds a line of text below the gif that talks about why the answer is correct.
            var gifCaption = triviaQuest[currentQuestion].answerText;
                    newCaption = $("<div>");
                    newCaption.html(gifCaption);
                    newCaption.addClass("gifCaption");
                    $("#gifCaption").html(newCaption);

        //This checks to see if user choice is correct, incorrect, or unanswered
        if ((userSelect == rightAnswerIndex) && (answered === true)) {
            correctAnswer++;
            $("#message").html(messages.incorrect);

        } else if ((userSelect != rightAnswerIndex) && (answered === true)) {
            incorrectAnswer++;
            $("#message").html("The correct answer was: " + rightAnswerText);

        } else {
            unanswered++;
            $("#message").html(messages.incorrect);
            $("#correctedAnswer").html("The correct answe was: " + rightAnswerText);
            answered = true;
        }
        if (currentQuestion == (triviaQuestions.length - 1)) {
            setTimeout(scoreboard, 6000);
        } else {
            currentQuestion++;
            setTimeout(newQuestion, 6000);
        }


        //This function displays all the game stats
        function scoreboard() {
            $("#timeLeft").empty();
            $("#message").empty();
            $("#correctedAnswer").empty();
            $("#gif").hide();
            $("#gifCaption").hide();

            $("#finalMessage").html(messages.finished);
            $("#correctAnswers").html("Correct Answers: " + correctAnswer);
            $("#incorrectAnswers").html("Incorrect Answers: " + incorrectAnswer);
            $("#unanswered").html("Unanaswered: " + unanswered);
            $("#startOverBtn").addClass("reset");
            $("#startOverBtn").show();
            $("#startOverBtn").html("PLAY AGAIN");

        }
    }
});