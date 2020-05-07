//Advanced Trivia Game
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
    var questions = [
    {
        text: "In Disney's Lady and the Tramp, what dish do the two dogs share?",
        correct: "Spaghetti",
        option1: "Salad",
        option2: "Soup",
        option3: "Spaghetti",
        option4: "Falfel",
    },//you are a great dog! || Bad doggy!
    {
        text: "Backdraft is a movie about which profession?",
        correct: "Firemen",
        option1: "Firemen",
        option2: "Airplane Mechanics",
        option3: "Strippers",
        option4: "Pig Farmers",
    },//Yay! Sound the firedrill! || You just got hosed!
    {
        text: "What is the name of Danny's gang in Grease?",
        correct: "The Thunderbirds",
        option1: "Queen",
        option2: "The Thunderbirds",
        option3: "The Mariacha's",
        option4: "The Big Dudes",
    },//Hey! How yu doin?! || Get outta here!
    {
        text: "Who plays Hilary Swank's coach in Million Dollar Baby?",
        correct: "Clint Eastwood",
        option1: "Rocky Balboa",
        option2: "Chris Helmsworth",
        option3: "Cher",
        option4: "Clint Eastwood",
    },//Good punch!!! || What?  I'm going to knock you out!
    {
        text: "Which Hollywood leading man was in Spy Game, The Horse Whisperer, and All the President's Men?",
        correct: "Robert Redford",
        option1: "Clint Eastwood",
        option2: "Al Pacino",
        option3: "Robert Redford",
        option4: "Ben Affleck",
    },//"You followed the money!" Way to go! || "Your life is in danger!" Bummer!
    {
        text: "What actor gets the girl in There's Something About Mary?",
        correct: "Ben Stiller",
        option1: "Ben Stiller",
        option2: "Matt Damon",
        option3: "David Spade",
        option4: "Brad Pitt",
    },//Well played! || Bah ha ha! Really?? Not even close!
    {
        text: "What 1975 film made people afraid to go into the water?",
        correct: "Jaws",
        option1: "Barracuda",
        option2: "Jaws",
        option3: "Hammerhead",
        option4: "Mega",
    },//Yep! Not getting in the water! ||  Time to walk the plank!
    {
        text: "Who directed Jurrasic Park?",
        correct: "Steven Spielberg",
        option1: "Steven Spielberg",
        option2: "Martin Scorsese",
        option3: "James Cameron",
        option4: "George Lucas",
    },//Yep! You are the Dinosaur! || Seriously?  You thought that???

    ]
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
    startButton.click(function(){
        startButton.toggle();
        quizSection.toggle();
        showQuestion();
    })
    $("#question-section button").click(function(event) {
        var selected = event.currentTarget.innerText;
        var question = questions[currentQuestionIndex]
        if(selected === question.correct) {
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
        var question =  questions[currentQuestionIndex];
        questionLabel.html(question.text)
        //Populate Questions in HTML
        option1Button.html(question.option1)
        option2Button.html(question.option2)
        option3Button.html(question.option3)
        option4Button.html(question.option4)
        var timer = setInterval(function() {
            time--;
            if(time < 0) {
                clearInterval(timer);
                currentQuestionIndex++;
                if(currentQuestionIndex < questions.length) {
                    showQuestion();
                }
                else{
                    console.log("Show results sections...");
                }
            }
            timeLabel.html(time);
        }, 1000)
        })
    }