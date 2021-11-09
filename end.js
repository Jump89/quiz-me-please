const username = document.querySelector("#username")
const saveScoreBtn = document.querySelector("#saveScoreBtn")
const finalScore = document.querySelector("#finalScore")
const mostRecentScore = localStorage.getItem("mostRecentScore")

const highScores = JSON.parse(localStorage.getItem('highScores')) || [] // local storage string

const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {  // keyup whenever we press the key it reinable save btn
    saveScoreBtn.disabled = !username.value

})
// function to get high score and save to local storage 
savedHighScore = e => {
    e.preventDefault()

    const score = {
        score: mostRecentScore,
        name: username.value
    }

    highScores.push(score)

    highScores.sort((a,b) => {
            return b.score - a.score
     })

     highScores.splice(5)

     localStorage.setItem("highScores", JSON.stringify(highScores))
     window.location.assign('/')
}