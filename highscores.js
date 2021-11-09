const highScoresList = document.querySelector('#highScoresList')
const highScores = JSON.parse(localStorage.getItem("highScores")) || []

/// creating new arry to return and display score and name value
highScoresList.innerHTML = highScores.map(score => { 
    return `<li class="high-score">${score.name} - ${score.score}</li>`
}).join("")