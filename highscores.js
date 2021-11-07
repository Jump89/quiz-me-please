const highScoresList = document.querySelector('highScoresList')
const highScores = JSON.parse(localStorage.getItem('highScores')) || []

highScoresList.innerHTML =
/// creating new arry to return and display score and name value
highScores.map(score => { 
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join('')