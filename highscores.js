const highScoresList = document.querySelector('#highScoresList')



/// creating new arry to return and display score and name value
function displayUser () {
    JSON.parse(localStorage.getItem("allUserArray"))
    .map(
        oneUser =>
(highScoresList.innerHTML += `<li class="high-score"> ${oneUser.name} - ${oneUser.score}</li>`)
).join("");
 }
 displayUser();
