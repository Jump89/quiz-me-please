const question = document.querySelector("#question");
const choices = document.querySelector(".choice-text");
const progressText = document.querySelectorAll("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

// Add questions 
let questions = [
    {
        question: "what is 2 + 2?",
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "10",
        answer: 2,
    },
    {
        question: "what is 2 + 2?",
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "10",
        answer: 2,
    },
    {
        question: "what is 2 + 1?",
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "10",
        answer: 2,
    },
    {
        question: "what is 2 + 2?",
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "10",
        answer: 2,
    },
    {
        question: "what is 2 + 11?",
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "10",
        answer: 2,
    },
    {
        question: "what is 2 + 10?",
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "10",
        answer: 2,
    },
    {
        question: "what is 2 + 3?",
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "10",
        answer: 2,
    },
];

const SCORE_POINTS = 100
const MAX_QUESTIONS = 7 //change once it has been determined how many questions we want 

// start quiz function 

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions] // spread operator to get all values from questions
    getNewQuestion()

};
// created new function to keep track of scores and sends guest to new page 
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)

        return window.location.assign("/end.html")
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}` // increment's questions by 1 
    progressBarFull.getElementsByClassName.width = `${(questionCounter/MAX_QUESTIONS) * 100}%` // calculate which question user is on and percentage user is on 

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length) // calculate value of question index 
    currentQuestion = availableQuestions[questionsIndex] // keep track of question user is on 
    question.innerText = currentQuestion.question // which question to ask 

    choices.forEach(choice => {
        const number = choice.dataset('number') // will know what user has clicked on 
        choice.innerText = currentQuestion['choice' + number] 
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) 
        return
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset('number')

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply === 'correct')
            incrementScore(SCORE_POINTS)

            selectedChoice.parentElement.classList.add(classToApply)
    })
});

incrementScore = num => {
    score +=num
    score.Text.innerText = score
};

startGame();