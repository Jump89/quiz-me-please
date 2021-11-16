const username = document.querySelector("#username")  // get the username from form in end.html 
const saveScoreBtn = document.querySelector("#saveScoreBtn")
const mostRecentScore = localStorage.getItem("mostRecentScore")
const finalScore = document.querySelector("#finalScore");

// line 1 and line 7 we use on line 21 to create userDetails object to put on local storage 

let highScores = JSON.parse(localStorage.getItem('mostRecentScore')); // get the high score form local storage 

let allUsers = [];     

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {  // keyup whenever we press the key it reinable save btn
    saveScoreBtn.disabled = !username.value

})
// function to save user name and score to local storage  
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
    

     window.location.assign('highscores.html'); /// sends user to highscore screen 
};

