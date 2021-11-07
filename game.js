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
        question: "what is 2 + 2?"
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "10",
        answer: 2,
    },
    {
        question: "what is 2 + 2?"
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "10",
        answer: 2,
    },
    {
        question: "what is 2 + 2?"
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "10",
        answer: 2,
    },
    {
        question: "what is 2 + 2?"
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "10",
        answer: 2,
    },
    {
        question: "what is 2 + 2?"
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "10",
        answer: 2,
    },
    {
        question: "what is 2 + 2?"
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "10",
        answer: 2,
    },
    {
        question: "what is 2 + 2?"
        choice1: "2",
        choice2: "4",
        choice3: "6",
        choice4: "10",
        answer: 2,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 7 //change once it has been determined how many questions we want 

// start quiz function 

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()

}
// keep track of scores and sends guest to new page 
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score)
        return window.location.assign("/end.html")
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
}