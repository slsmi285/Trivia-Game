//Advance Trivia game!
// when the page is loaded first, the timer, questions and summary must be hidden.
//Game has 8 questions and each question has 4 multiple choice questions/answers.
//Once questions is answered by the selector a video image pops up announcing win or lose. The image is part of the answer
//create a function for a random pick for questions being displayed for multiple choice. answers are displayed and you have a 30 sec timer once "start"button clicked.
// will craete a container using bootstrap to place "p" and multiple choice in it. 
// after each question is completed by user, the page loads to next multiple choice question with the 30 sec timer starting over.
var questions = [
  {
    text: 'What is unique about the first kiss in the Spider Man movie?',
    correct: 'He was upside down in the rain.',
    option1: 'It was underwater.',
    option2: 'He was upside down in the rain.',
    option3: 'He was NOT dressed as Spider Man',
    option4: 'It was with Spider Man\'s best friend',
  },
  {
    text: 'Who is the strongest superhero?',
    correct: 'Superman.',
    option1: 'Iron Man.',
    option2: 'Captain America.',
    option3: 'Superman.',
    option4: 'Aqua Man.',
  },
]
var time = 5;
var startButton = $('.start-button');
var quizSection = $('#quiz');
var questionSection = $('#question-section');
var timeLabel = $('#time');
var questionLabel = $('#qLabel')
// Option Buttons
var option1Button = $('#opt1')
var option2Button = $('#opt2')
var option3Button = $('#opt3')
var option4Button = $('#opt4')
var currentQuestionIndex = 0
startButton.click(function() {
  startButton.toggle();
  quizSection.toggle();
  showQuestion();
})
$('#question-section button').click(function(event) {
  var selected = event.currentTarget.innerText;
  var question = questions[currentQuestionIndex]
  if(selected === question.correct) {
   // document.write("Correct!");
    console.log("Correct!");
  }
  else {
    console.log("Wrong!");
  }
})
function showQuestion() {
  time = 5;
  timeLabel.html(time);
  var question = questions[currentQuestionIndex];
  questionLabel.html(question.text)
  // Populate Questions in HTML
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
      else {
        console.log('Show results sections...')
      }
    }
    timeLabel.html(time);
  }, 1000)
}