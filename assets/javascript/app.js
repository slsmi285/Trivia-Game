//Advanced Trivia Game
$(document).ready(function(){
//1. Home Page
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
var messages = {
    correct: "Brilliant! Well done!",
    incorrect: "That's not the right answer." + "<br>" + "No. No. Don't Cry",
    endTime: "Time's Up!" + "<br>" + "But, better luck on the next one!",
    finished: "So, how did you?"
}
var triviaQuestions = [
    {
        question: "In Disney's Lady and the Tramp, what dish do the two dogs share?",
        answerList: ["Falafal", "Salad", "Soup", "Spaghetti"],
        answer: 3,
        image:"assets/images/L&T.gif",
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
        answerList: ["Ben Stiller","Matt Damon", "David Spade", "Brad Pitt",
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
        answerList: ["Steven Spielberg", "George Lucas", "Henry Winkler", "Walt Disney",
        answer: 0,
        image: "assets/images/jp.gif",
        asnwerText: "Dr. Grant: I think we're out of a job. Malcolm: Don't you mean extinct?"
    },


]

//this hides the game area on the page load
$("#gameCol").hide();

//This captures user click on the reset button to create a new game
$("#startBtn").on("click", function() {
    $(this).hide();
    newGame();
});

//this functions sets up the page for a new game emptying all areas and showing game area
function newGame() {
    $("#gameCol").show();
    $("#finalMessage").empty():
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
$("#currentQuestion").html("Question " + (currentQuestion+1) + " of " + triviaQuestions.length);
$(".question").html(triviaQuestions[currentQuestion].question);

//this function displays the new question's answer options in multiple choice type
for(var i = 0; i <=5; i++) {
    var choices = $("<div>");
    choices.text(triviaQuestions[currentQuestion].answerList[i])
}



var time = 15;
var startButton = $(".start-button");
var quizSection = $("#quiz");
var questionSection = $("#question-section");
var timeLabel = $("#time");
var questionLabel = $("qLabel");
//Option Buttons
var option1Button = $("opt1");
var option2Button = $("opt2");
var option3Button = $("opt3");
var option4Button = $("opt4");
var currentQuestionIndex = 0;
startButton.click(function () {
    startButton.toggle();
    quizSection.toggle();
    showQuestion();
})
$("#question-section button").click(function (event) {
    var selected = event.currentTarget.innerText;
    var question = questions[currentQuestionIndex]
    if (selected === question.correct) {
        //document.write("Correct!");
        console.log("Correct!");
    }
    else {
        console.log("Wrong!");
    }
})
function showQuestion() {
    time = 15;
    timeLabel.html(time);
    var question = questions[currentQuestionIndex];
    questionLabel.html(question.text)
    //Populate Questions in HTML
    option1Button.html(question.option1)
    option2Button.html(question.option2)
    option3Button.html(question.option3)
    option4Button.html(question.option4)
    var timer = setInterval(function () {
        time--;
        if (time < 0) {
            clearInterval(timer);
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            }
            else {
                console.log("Show results sections...");
            }
        }
        timeLabel.html(time);
    }, 1000)
}

