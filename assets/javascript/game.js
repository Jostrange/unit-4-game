// Random number displayed when user opens page as target number scoreboard 1


var targetNumber
var sumOfCrystalValue = 0
var wins = 0
var loss = 0

function randomNumberFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function generateAndDisplayTargetNumber() {
    var minNum = 19;
    var maxNum = 120

    targetNumber = randomNumberFromRange(minNum, maxNum);

    console.log(targetNumber);
    $(".scoreboard").text(targetNumber);

}




// user clicks crystal button and random number adds random number to the scoreboard 2

// user clicks other crystal and random number adds to the current Score on scoreboard 2


function generateAndDisplayCrystalNumbers() {
    var minNumber = 1;
    var maxNumber = 12;

    var randomNumber = randomNumberFromRange(minNumber, maxNumber);
    var crystal2Value = randomNumberFromRange(minNumber, maxNumber)
    var crystal3Value = randomNumberFromRange(minNumber, maxNumber)
    var crystal4Value = randomNumberFromRange(minNumber, maxNumber)


    console.log(randomNumber);
    $(".crystal1").click(function () {
        sumOfCrystalValue = sumOfCrystalValue + randomNumber;
        checkScore()
        $(".scoreboard-bottom").text(sumOfCrystalValue);
    })
    $(".crystal2").click(function () {
        sumOfCrystalValue = sumOfCrystalValue + crystal2Value;
        checkScore()
        $(".scoreboard-bottom").text(sumOfCrystalValue);
    })
    $(".crystal3").click(function () {
        sumOfCrystalValue = sumOfCrystalValue + crystal3Value;
        checkScore()
        $(".scoreboard-bottom").text(sumOfCrystalValue);
    })
    $(".crystal4").click(function () {
        sumOfCrystalValue = sumOfCrystalValue + crystal4Value;
        checkScore()
        $(".scoreboard-bottom").text(sumOfCrystalValue);
    })


}

function reset() {
    generateAndDisplayTargetNumber();
    generateAndDisplayCrystalNumbers();

}
// if random number equals the number shown from the beginning, the user wins and the win score will increase by 1
// if random number is greater than target number, the user loses and the loss score will increase by one
// after the outcome of the game, the random number changes back to another random number for the next attempt
function checkScore() {
    

    if (sumOfCrystalValue === targetNumber) {
        console.log(sumOfCrystalValue, targetNumber);
        console.log("wins");
        $(".game-performance").text("loss:" + loss + "wins: " + ++wins);
        sumOfCrystalValue = 0;
        reset();


    }

    else if (sumOfCrystalValue > targetNumber) {
        $(".game-performance").text("loss:" + ++loss + "wins:" + wins);
        console.log("loss");
        sumOfCrystalValue = 0;
        reset();
    };



};







// Game steps
generateAndDisplayTargetNumber();
generateAndDisplayCrystalNumbers();


// 