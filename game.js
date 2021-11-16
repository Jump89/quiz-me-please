const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');
const startTimer = 20; /// change


let currentQuestion = {}
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let time = startTimer;

var sec = 20;

// timer fFunction that subtracts  time from wrong answers 
(function() {

    function startTimer(){
        console.log('timer suppose to go')
        var timer = setInterval(function(){
            sec--;
            document.getElementById('time').innerHTML='00:'+sec;
            if (sec <= 0) {
                clearInterval(timer);
                alert("Time is up!");
                return window.location.assign('/end.html')

            }
        }, 1000);
    }
  
    startTimer();
})();

// array of questions 
let questions = [
    {  
        question: "Commonly used data types do not include",
        choice1: "Strings",
        choice2: "Booleans",
        choice3: "Alerts",
        choice4: "Numbers",
        answer: 3 

    },
    {
        question: "The condition in an if / else statement is enclosed with _____",
        choice1: "Quotes",
        choice2: "Curly Brackets",
        choice3: "Parenthesis",
        choice4: "Square Brackets",
        answer: 3
    },
    {
        question: "Arrays in JavaScript can be used to store",
        choice1: "Numbers",
        choice2: "Other Arrays",
        choice3: "Booleans",
        choice4: "All of the above",
        answer: 4,
    },
    {
        question: "String values must be enclosed within_____ when being assigned to variables",
        choice1: "Commas",
        choice2: "Curly Brackets",
        choice3: "Quotes",
        choice4: "Parenthesis",
        answer: 4
    },
    {
        question: "A very useful tool used during development and debugging for printing content to debugger is:",
        choice1: "JavaScript",
        choice2: "Terminal/Bash",
        choice3: "For Loops",
        choice4: "Console.Log",
        answer: 4
    }
]
 // start quiz function 

const SCORE_POINTS = 20
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions] // spread operator to get all values from questions
    getNewQuestion();
}
 // created new function to keep track of scores and sends guest to new page
getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS || sec === 0) {
        localStorage.setItem('mostRecentScore', score)
        console.log("this is our score!", score);

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}` // increment's questions by 1 
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 20}%`  // calculate which question user is on and percentage user is on 
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length) // calculate value of question index 
    currentQuestion = availableQuestions[questionsIndex]  // keep track of question user is on 
    question.innerText = currentQuestion.question // which question to ask 


    choices.forEach(choice => {
        const number = choice.dataset['number'] // will know what user has clicked on 
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}
// function for correct and incorrect -
choices.forEach(choice => {
    choice.addEventListener('click', e => { // click event for choices 
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }
        else if (classToApply === 'incorrect'){  /// if answer is incorrect subtract - 5 seconds from time 
            sec -= 5;
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion();

        }, 1000)
    });
});

incrementScore = num => {   // change the score 
    score +=num
    scoreText.innerText = score
    console.log("this is our score", score);
};

startGame()