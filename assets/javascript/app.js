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
    time: 10,
    timerOn: false,
    timerId: "",
    // questions options and answers data
    questions: {
        q1: "In Disney's Lady and the Tramp, what dish do the two dogs share?",
        q2: "Backdraft is a movie about which profession?",
        q3: "What is the name of Danny's gang in Grease?",
        q4: "Who plays Hilary Swank's coach in Million Dollar Baby?",
        q5: "Which Hollywood leading man was in Spy Game, The Horse Whisperer, and All the President's Men?",
        q6: "What actor gets the girl in There's Something About Mary?",
        q7: "What 1975 film made people afraid to go into the water?",
        q8: "Who played Captain Kirk in the series and the motion, Star Trek?",
    },
    options: {
        q1: ["Falafal", "Salad", "Soup", "Spaghetti"],
        q2: ["Strippers", "Airplane Mechanics", "Firemen", "Pig Farmers"],
        q3: ["The Thunderbirds", "Queen", "The Mariacha's", "The Big Kahuna's"],
        q4: ["Rocky Balboa", "Chris Helmsworth", "Cher", "Clint Eastwood"],
        q5: ["Clint Eastwood", "Al Pacino", "Robert Redford", "Ben Affleck"],
        q6: ["Ben Stiller", "Matt Damon", "David Spade", "Brad Pitt"],
        q7: ["Baby Shark", "Hammerhead", "Jaws", "Megladon"],
        q8: ["Harrison Ford", "Tom Selleck", "Kurt Russell", "William Shatner"],
    },
    answers: {
        q1: "Spaghetti",
        q2: "Firemen",
        q3: "The Thunderbirds",
        q4: "Clint Eastwood",
        q5: "Robert Redford",
        q6: "Ben Stiller",
        q7: "Jaws",
        q8: "William Shatner",
        
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
        //set timer to 30 seconds each question
        trivia.timer = 10;
        $("#timer").removeClass("last-seconds");
        $("#timer").text(trivia.timer);

        //to prevent timer speed up
        if (!trivia.timerOn) {
            trivia.timerId = setInterval(trivia.timerRunning, 1000);
        }

        //gets all the questions then indexes the current questions
        var questionContent = Object.values(trivia.questions)[trivia.currentSet];
        $("#question").text(questionContent);

        //an array of all the user options for the current question
        var questionOptions = Object.values(trivia.options)[trivia.currentSet];

        //creates all the trivia guess options in the html
        $.each(questionOptions, function (index, key) {
            $("#options").append($('<button class="option btn btn-info btn-md">' + key + '</button>'));
        })
    },



    //method to decrement counter and count unanswered if timer runs out
    timerRunning: function() {
        //if timer still has time left and there are still questions left to ask
        if (trivia.timer> -1 && trivia.currentSet < Object.keys(trivia.questions).length) {
            $("#timer").text(trivia.timer);
            trivia.timer--;
            if (trivia.timer === 4) {
                $("#timer").addClass("last-seconds");
            }
        }
        //the time has run out and increment unanswered, run result
        else if (trivia.timer === -1) {
            trivia.unanswered++;
            trivia.result = false;
            clearInterval(trivia.timerId);
            resultId = setTimeout(trivia.guessResult, 1000);
            $("#results").html("<h3>Times Up! The answer was   " + Object.values(trivia.answers)[trivia.currentSet] + " </h3>");
        }
        //if all the questions have been shown end the game, show results
        else if (trivia.currentSet === Object.keys(trivia.questions).length) {

            //adds results of game (correct, incorrect, unanswered) to the page
            $("#results")
            .html("<h3>Thank you for playing! </h3>" +
                "<h6>Correct:  " + trivia.correct + "</h6>" +
                "<h6>Incorrect:  " + trivia.incorrect + "</h6>" +
                "<h6>Unanswered:  " + trivia.unanswered + "</h6>" +
                "<h4>Do you want to play again?</h4>");

                //hide game section
                $("#game").hide();

                //show start button to begin a new game
                $("#start").show();
        }
    },
    //method to evaluate the option clicked
    guessChecker: function() {

        //time ID for gameResult setTimeout
        var resultId;

        //the answer to the current question being asked
        var currentAnswer = Object.values(trivia.answers)[trivia.currentSet];
        
        //if the text of the option picked matches the answer of the current question, increment correct
        if ($(this).text() === currentAnswer) {
            //turn button green for correct
            $(this).addClass("btn-success").removeClass("btn-info");

            trivia.correct++;
            clearInterval(trivia.timerId);
            resultId = setTimeout(trivia.guessResult, 1000);
            $("#results").html("<h3>Brilliant! Correct!</h3>");
        }
        //else the user picked the wrong option, increment incorrect
        else {
            //turn button clicked red for incorrect
            $(this).addClass("btn-danger").removeClass("btn-info");

            trivia.incorrect++;
            clearInterval(trivia.timerId);
            resultId = setTimeout(trivia.guessResult, 1000);
            $("#results").html("<h3>Don't Cry! Better luck next time!" + currentAnswer + "</h3>");
        }

    },
    //method to remove previous question results and options
    guessResult: function () {

        //increment to next question set
        trivia.currentSet++;

        //remove the options and results
        $(".option").remove();
        $("#results h3").remove();

        //begin next question
        trivia.nextQuestion();
    }
}
