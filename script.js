const words = [
    'californication',
    'plataforma5',
    'black',
    'summer',
    'flea',
    'aeroplane',
    'peppers',
    'unlimited',
    'arcadium',
    'love',
    'getaway',
    'stadium',
    'quixoticelixer',
    'quarter',
    'snow',
    'dylan',
    'zephyr',
    'funky',
    'chili'
];

let time = 10;
let score = 0;
let newWord = "";
let userWord = "";


function getRandomInt(max) { return Math.floor(Math.random() * max) };
function randomWord(){ newWord = words[getRandomInt(words.length-1)] };
function addToDom(){ 
    randomWord();
    document.getElementById("randomWord").innerHTML = newWord;
};

function updateScore(){ 
    score += 1; 
    document.getElementById("score").innerHTML = score;
};
//añade palabra random al DOM


function runGame(){
    time = time-0.25;
    document.getElementById("timeSpan").innerHTML = parseInt(time) + "s";
    
    if(time == 0){
        document.getElementById("end-game-container").style.display = "inline";
        clearInterval(timer);
    }
    console.log(time);
    userWord = document.getElementById("text").value;
    if(newWord.toUpperCase() == userWord.toUpperCase()){
        time += 3;
        //borrar el input del usuario
        document.getElementById("text").value = "";
        updateScore();
        addToDom();
        userWord = "";
    }
}

addToDom();
let timer = setInterval(runGame,250);


//Deberia ir el ciclo del juego -> (based on time (10segs.)).
    //Genera palabra aleatoria
/*
addToDom();

    if(newWord == userWord){
        document.getElementById("text").innerHTML = "";
        userWord = "";
        updateScore();
        addTime();
        addToDom();
    };
    let game = setInterval(updateTime,1000);
*/





