const playerImg = document.querySelector("#playerImg");
const computerImg = document.querySelector("#computerImg");
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const imageLinks1 = ["images/blue/sprite_2.png", "images/blue/sprite_0.png", "images/blue/sprite_1.png"];
const imageLinks2 = ["images/red/sprite_2.png", "images/red/sprite_0.png", "images/red/sprite_1.png"];
const text = document.querySelector("#text");
const winText = document.querySelector("#winText");
const loseText = document.querySelector("#loseText");
const drawText = document.querySelector("#drawText");
const colorImg1 = document.querySelector("#player");
const colorImg2 = document.querySelector("#computer");
let win = 0;
let lose = 0;
let draw = 0;

button1.addEventListener("click", displayGame);
button2.addEventListener("click", displayGame);
button3.addEventListener("click", displayGame);

function displayGame(event) {
    if(!playerImg || !computerImg) {
        console.error("Error: image not found!");
        return;
    }
    const playerChoice = {
        button1: 0, 
        button2: 1, 
        button3: 2 
    }[event.target.id];

    text.style.transition = "transform 0.5s ease-out"; 
    text.style.transform = "rotateY(0deg)";
    void text.offsetWidth;

    setTimeout(() => {
    const computerChoice = Math.floor(Math.random() * 3);
    if(playerChoice === computerChoice) {
        playerImg.src = imageLinks1[playerChoice];
        computerImg.src = imageLinks2[computerChoice];
        text.innerText = "It's a draw!";
        drawText.innerText = draw++;
        colorImg1.style.backgroundColor = "#A6AEBF";
        colorImg2.style.backgroundColor = "#A6AEBF";
        text.style.transform = "rotateY(360deg)"; 
        playDrawSound();
    } else if(
        (playerChoice === 0 && computerChoice === 2) || 
        (playerChoice === 1 && computerChoice === 0) || 
        (playerChoice === 2 && computerChoice === 1)
    ) {
        playerImg.src = imageLinks1[playerChoice];
        computerImg.src = imageLinks2[computerChoice];
        text.innerText = "You win!";
        winText.innerText = win += 1;
        colorImg1.style.backgroundColor = "#578FCA";
        colorImg2.style.backgroundColor = "#CD5656";
        text.style.transform = "rotateY(360deg)"; 
        playWinSound();
        if(win === 10) {
            text.innerText = "Libre kita ng kwek kwek!";
        }
    } else {
        playerImg.src = imageLinks1[playerChoice];
        computerImg.src = imageLinks2[computerChoice];
        text.innerText = "You lose!";;
        loseText.innerText = lose++;
        colorImg1.style.backgroundColor = "#CD5656";
        colorImg2.style.backgroundColor = "#578FCA";
        text.style.transform = "rotateY(360deg)"; 
        playLoseSound();
    }
    }, 500);
}

let audio;
function playButtonSound() {
    audio = document.getElementById("buttonPress");
    audio.currentTime = 0;
    audio.play(); 
}

function playObjectSound() {
    audio = document.getElementById("randomObjectPress");
    audio.currentTime = 0;
    audio.play();
}

function playWinSound() {
    audio = document.getElementById("playWin");
    audio.currentTime = 0;
    audio.play();
}

function playLoseSound() {
    audio = document.getElementById("playLose");
    audio.currentTime = 0;
    audio.play();
}

function playDrawSound() {
    audio = document.getElementById("playDraw");
    audio.currentTime = 0;
    audio.play();
}
