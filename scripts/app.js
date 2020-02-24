const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
const missedGuess = 0;
const phrases = ['No soup for you', 'These pretzels are making me thirsty', 'I was in the pool', 'Master of my domain', 'Serenity now'];


// return a random phrase from an array
function getRandomPhraseAsArray(arr) {
     let arrayObject = arr[Math.floor(Math.random() * arr.length)];
     let randomPhrase = arrayObject;
     return randomPhrase.split('');
}


// adds the letters of a string to the display
function addPhraseToDisplay(arr) {
    for (let i = 0; i < arr.length; i += 1) {
        let ul = document.querySelector('#phrase ul');
        let li = document.createElement('LI');
        li.textContent = arr[i];
        if (li.textContent !== ' ') {
            li.className = 'letter';
        } 
       phraseToDisplay = ul.appendChild(li);
    }  return phraseToDisplay;
};

const phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);


// check if a letter is in the phrase 
function checkLetter(button) {
    let checkLetter = document.getElementsByClassName('letter');
    let match = null;
    for (let i = 0; i < checkLetter.length; i += 1) {
        if (button.textContent === checkLetter.textContent) {
            checkLetter.className = 'show';
            match = button.textContent;
        }
    } return match
};

// check if the game has been won or lost
const checkWin = () => {

}

// listen for the start game button to be press
startButton.addEventListener('click', () => {
    let removeOverlay = document.getElementById('overlay');
    removeOverlay.style.display = 'none';
});

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e=> {
    if (e.target.tagName == 'BUTTON') {
        e.target.className = 'chosen'
        let chosen = document.querySelectorAll('.chosen');
        chosen.disabled = true;
        let letterFound = checkLetter(e);
    }

});