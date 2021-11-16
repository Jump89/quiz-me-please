const username = document.querySelector("#username")
const saveScoreBtn = document.querySelector("#saveScoreBtn")
// const finalScore = document.querySelector("#finalScore")
const mostRecentScore = localStorage.getItem("mostRecentScore")


//const highScores = JSON.parse(localStorage.getItem('highScores')) || [] // local storage string
let highScores = JSON.parse(localStorage.getItem('mostRecentScore')); // local storage string
 console.log(highScores)
 
let allUsers = [];

// const MAX_HIGH_SCORES = 5

finalScore.innerText = mostRecentScore

username.addEventListener('keyup', () => {  // keyup whenever we press the key it reinable save btn
    saveScoreBtn.disabled = !username.value

})
// function to get high score and save to local storage 
const saveHighScore = function(e) {
    e.preventDefault();

    const userDetails = {
        score: highScores,
        name: username.value
    };
    allUsers.push(userDetails);
    if (JSON.parse(localStorage.getItem("allUserArray"))){
        let existingLocalStorageArr = JSON.parse (
            localStorage.getItem("allUserArray")
        );
        existingLocalStorageArr.push(userDetails);
        localStorage.setItem(
            "allUserArray",
            JSON.stringify(existingLocalStorageArr)
        );
    } else {
        localStorage.setItem("allUserArray", JSON.stringify(allUsers));
    }
    

    //  localStorage.setItem("highScores", JSON.stringify(highScores))
     window.location.assign('highscores.html');
};

