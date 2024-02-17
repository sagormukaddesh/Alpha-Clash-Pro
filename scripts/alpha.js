// function play(){
//     const homeSection = document.getElementById('home-screen');
//     console.log(homeSection.classList);
//     homeSection.classList.add('hidden');
//     const playGround = document.getElementById('play-ground')
//     playGround.classList.remove('hidden')
// }

function handleKeyboardButtonPress(event) {
    const playerPress = event.key;
    const currentAlphabet = document.getElementById('current-alphabet');
    const currentTargetAlphabet = currentAlphabet.innerText;
    const expectedAlphabet = currentTargetAlphabet.toLocaleLowerCase();
    console.log(playerPress, expectedAlphabet);

if(playerPress === 'Escape'){
    gameOver();
}
    if (playerPress === expectedAlphabet) {
        console.log('good');


        const currentScore = getTextElementById('current-score');
        console.log(currentScore);
        const updatedScore = currentScore + 1;
        setTextValueById('current-score', updatedScore);


        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseFloat(currentScoreText);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;


        continueGame();
        removeBgColor(expectedAlphabet);
    }
    else {
        const currentLife = getTextElementById('current-life');
        const updatedLife = currentLife - 1;
        setTextValueById('current-life', updatedLife)

        if (updatedLife === 0) {
            gameOver();
        }


        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseFloat(currentLifeText);
        // if (currentLife < 1 || currentLife == 0) {
        //     alert('You Have lost the Game, Please RESTART the game?')
        //     hideElementByID('play-ground')
        //     showElementByID('restart-game')
        // } else if (currentLife >= 1) {
        //     const newLife = currentLife - 1;
        //     currentLifeElement.innerText = newLife;
        // }


    }
}
document.addEventListener('keyup', handleKeyboardButtonPress);


function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log(`your random alphabet:`, alphabet);

    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;

    setBgColorById(alphabet);

}
function play() {
    hideElementByID('home-screen')
    hideElementByID('restart-game');
    showElementByID('play-ground')

    setTextValueById('current-life', 5)
    setTextValueById('current-score', 0)


    continueGame();

}

function gameOver() {
    hideElementByID('play-ground');
    showElementByID('restart-game');

    const finalScore = getTextElementById('current-score');
    setTextValueById('final-score', finalScore);
    const getCurrentAlphabet = getElementTextById('current-alphabet');
    removeBgColor(getCurrentAlphabet);
}
