const pluscountScore1 = document.getElementById("pluscountScore1");
pluscountScore1.addEventListener("click", function () {
    const score1 = document.getElementById("score1");
    let scorePlus1 = Number(score1.innerHTML);
    scorePlus1++;
    score1.innerHTML = scorePlus1;
});

const minuscountScore1 = document.getElementById("minuscountScore1");
minuscountScore1.addEventListener("click", function () {
    const score1 = document.getElementById("score1");
    let scoreMinus1 = Number(score1.innerHTML);
    scoreMinus1--;
    if(scoreMinus1 < 0) {
        alert("Cannot be less than 0");
    } else {score1.innerHTML = scoreMinus1;}

});

const pluscountScore2 = document.getElementById("pluscountScore2");
pluscountScore2.addEventListener("click", function () {
    const score2 = document.getElementById("score2");
    let scorePlus2 = Number(score2.innerHTML);
    scorePlus2++;
    score2.innerHTML = scorePlus2;
});

const minuscountScore2 = document.getElementById("minuscountScore2");
minuscountScore2.addEventListener("click", function () {
    const score2 = document.getElementById("score2");
    let scoreMinus2 = Number(score2.innerHTML);
    scoreMinus2--;
    score2.innerHTML = scoreMinus2;
    if(scoreMinus1 < 0) {
        alert("Cannot be less than 0");
    } else {score1.innerHTML = scoreMinus1;}
});

const manualChangeScore1 = document.getElementById("manualChangeScore1");
manualChangeScore1.addEventListener("click", function () {
    const score1 = document.getElementById("score1");
    let newScore;
    do {
        newScore = prompt("Enter the new score for Team 1:", score1.innerHTML);
    } while (isNaN(newScore) || newScore === "" || newScore < 0);
    score1.innerHTML = newScore;
});

const manualChangeScore2 = document.getElementById("manualChangeScore2");
manualChangeScore2.addEventListener("click", function () {
    const score2 = document.getElementById("score2");
    let newScore;
    do {
        newScore = prompt("Enter the new score for Team 2:", score2.innerHTML);
    } while (isNaN(newScore) || newScore === "" || newScore < 0);;
    score2.innerHTML = newScore;
});

const changeTeam1 = document.getElementById("changeTeam1");
changeTeam1.addEventListener("click", function() {
    const idTeam1 = document.getElementById("id-team1");
    let newID1 = prompt("Enter the name of Team 1", idTeam1.innerHTML);
    idTeam1.innerHTML = newID1;
})

const changeTeam2 = document.getElementById("changeTeam2");
changeTeam2.addEventListener("click", function() {
    const idTeam2 = document.getElementById("id-team2");
    let newID2 = prompt("Enter the name of Team 2", idTeam2.innerHTML);
    idTeam2.innerHTML = newID2;
})