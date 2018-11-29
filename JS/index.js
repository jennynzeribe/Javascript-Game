window.addEventListener('load',init);

//global variables

//levels
const level = {
    easy: 5,
    medium: 3,
    hard: 1
};
//change levels
const currentLevel = level.easy;

var time = currentLevel;
var score = 0;
var isPlaying;
//dom element
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words = [
    'hat',
    'machine',
    'annual',
    'miracle',
    'jokers',
    'cook',
    'question',
    'answer',
    'cocktail',
    'hero',
    'developer',
    'establishment',
    'nutrition',
    'javascript',
    'revolver',
    'echo',
    'siblings',
    'joke',
    'stubborn',
    'javascript'
];

//initialize
function init(){
    //show number of seconds in UI
//seconds.innerHTML = currentLevel;
    //load word from array
   showWord(words);
   //match
   wordInput.addEventListener('input', startMatch);
   //call countdown
   setInterval(countdown, 1000);
   //check game status
   setInterval(checkStatus, 50);
}
//start macth
function startMatch() {
    if (matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    //if score is negative 1 the score is 0
    if (score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
    scoreDisplay.innerHTML = score;
}

//match currentword to wordinput
function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!!!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}
//pick and show random word
function showWord(words){
    const randIndex = Math.floor(Math.random()* words.length);
    currentWord.innerHTML = words[randIndex];
}

//countdown
function countdown(){
    //make sure time is not run out
if(time > 0){
    time--;
}else if(time === 0){
    isPlaying = false;
}
//show time
timeDisplay.innerHTML = time;
}

//check game status
function checkStatus() {
    if (!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!!!';
        score = -1;
    }
}