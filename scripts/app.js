const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const startButton = document.querySelector('.btn__reset');
var missed = 0;
var overlay = document.getElementById('overlay');
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
        if (button.textContent === checkLetter[i].textContent.toLowerCase()) {
            checkLetter[i].classList.add('show');
            match = button.textContent;
        }
    } return match
};


// listen for the start game button to be press
startButton.addEventListener('click', () => {
    overlay.style.display = 'none';
});

// listen for the onscreen keyboard to be clicked
qwerty.addEventListener('click', e=> {
    if (e.target.tagName == 'BUTTON') {
        e.target.className = 'chosen'
        let chosen = document.querySelectorAll('.chosen');
        chosen.disabled = true;
        let letterFound = checkLetter(e.target);
        if (letterFound === null) {
            let ol = document.querySelector('#scoreboard ol');
            let li = document.querySelector('#scoreboard li')
            let removeHeart = ol.removeChild(li);
            missed += 1;
        }
    } 
    });

// check if the game has been won or lost
 function checkWin() {
    let show = document.getElementsByClassName('show');
    let letter = document.getElementsByClassName('letter');
    if (show.length === letter.length) {
        overlay.classList.add('win');
        let title= document.querySelector('.title');
        title.textContent = 'You won!';
        overlay.style.display = 'flex';
    } else if (missed > 4) {
        overlay.classList.add('lose');
        title.textContent = 'Sorry, you lost';
        overlay.style.display = 'flex';
    }
}

